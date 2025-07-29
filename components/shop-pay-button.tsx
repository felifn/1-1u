"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Loader2 } from "lucide-react"

interface ShopPayButtonProps {
  productId?: string
  productName?: string
  productPrice?: number
  selectedSize?: string
  selectedColor?: string
  quantity?: number
  className?: string
  disabled?: boolean
}

export function ShopPayButton({
  productId,
  productName,
  productPrice,
  selectedSize,
  selectedColor,
  quantity = 1,
  className = "",
  disabled = false,
}: ShopPayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleShopPayCheckout = async () => {
    try {
      setIsLoading(true)

      // Validate required fields for product checkout
      if (productId && !selectedSize) {
        alert("Please select a size before checking out")
        return
      }

      let checkoutData

      if (productId && productName && productPrice) {
        // Direct product checkout
        checkoutData = {
          items: [
            {
              id: productId,
              name: `${productName} (${selectedColor || "Default"})`,
              price: productPrice,
              quantity: quantity,
              variant: selectedSize ? `${selectedColor || "Default"} / ${selectedSize}` : selectedColor || "Default",
              image: `/placeholder.svg?height=100&width=100&text=${encodeURIComponent(productName)}`,
            },
          ],
          total: productPrice * quantity,
          currency: "CAD",
        }
      } else {
        // Cart-based checkout (fallback)
        checkoutData = {
          items: [
            {
              id: "sample-item",
              name: "Sample Product",
              price: 50.0,
              quantity: 1,
              variant: "Default",
            },
          ],
          total: 50.0,
          currency: "CAD",
        }
      }

      console.log("Initiating Shop Pay checkout with data:", checkoutData)

      // Call the checkout API
      const response = await fetch("/api/shop-pay/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      })

      const result = await response.json()

      if (result.success && result.checkoutUrl) {
        console.log("Shop Pay checkout URL generated:", result.checkoutUrl)

        // Open Shop Pay in a new window
        const shopPayWindow = window.open(
          result.checkoutUrl,
          "shop-pay-checkout",
          "width=800,height=600,scrollbars=yes,resizable=yes",
        )

        if (shopPayWindow) {
          // Monitor the window to detect when checkout is complete
          const checkClosed = setInterval(() => {
            if (shopPayWindow.closed) {
              clearInterval(checkClosed)
              console.log("Shop Pay window closed - checkout may be complete")

              // Show success message and redirect
              alert("Thank you for your purchase! Redirecting to confirmation page...")

              // Redirect to success page with order details
              const orderParams = new URLSearchParams({
                orderId: result.checkoutId,
                total: checkoutData.total.toString(),
                currency: checkoutData.currency,
                items: JSON.stringify(checkoutData.items),
              })

              window.location.href = `/checkout/success?${orderParams.toString()}`
            }
          }, 1000)

          // Auto-close check after 30 minutes
          setTimeout(
            () => {
              clearInterval(checkClosed)
              if (!shopPayWindow.closed) {
                shopPayWindow.close()
              }
            },
            30 * 60 * 1000,
          )
        } else {
          alert("Please allow popups to use Shop Pay checkout")
        }
      } else {
        console.error("Shop Pay checkout failed:", result.error)
        alert(`Checkout failed: ${result.error || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Shop Pay button error:", error)
      alert("An error occurred during checkout. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleShopPayCheckout}
      disabled={disabled || isLoading}
      className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center gap-2 ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4" />
          Shop Pay
        </>
      )}
    </Button>
  )
}
