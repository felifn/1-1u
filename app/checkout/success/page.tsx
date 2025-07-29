"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Package, Truck, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderDetails {
  orderId: string
  total: number
  currency: string
  method: string
  items: Array<{
    name: string
    price: string
    quantity: number
    size?: string
    color?: string
  }>
  estimatedDelivery: string
}

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("Checkout success page loaded")

    // Get order details from URL parameters
    const orderId = searchParams.get("orderId") || `RUINED-${Date.now().toString().slice(-6)}`
    const method = searchParams.get("method") || "shop-pay"
    const total = Number.parseFloat(searchParams.get("total") || "81.00")
    const currency = searchParams.get("currency") || "CAD"

    console.log("Order details from URL:", { orderId, method, total, currency })

    // Generate estimated delivery date (7 days from now)
    const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Simulate loading and set order details
    setTimeout(() => {
      const orderData: OrderDetails = {
        orderId,
        total,
        currency,
        method,
        items: [
          {
            name: "DECAY HENLEY (BLACK)",
            price: `$${total.toFixed(2)} ${currency}`,
            quantity: 1,
            size: "M",
            color: "BLACK",
          },
        ],
        estimatedDelivery,
      }

      console.log("Setting order details:", orderData)
      setOrderDetails(orderData)
      setIsLoading(false)
    }, 1500)
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg">Processing your order...</p>
          <p className="text-sm text-zinc-400 mt-2">Please wait while we confirm your purchase</p>
        </div>
      </div>
    )
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Order not found</h1>
          <Link href="/">
            <Button className="bg-white text-black hover:bg-gray-200">Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-center block">
            <h1 className="ruined-logo-gothic ruined-logo-textured ruined-logo-cracked text-4xl font-bold tracking-wider">
              RUINED
            </h1>
          </Link>
        </div>
      </header>

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-xl text-zinc-400 mb-2">Thank you for your purchase</p>
          <p className="text-lg text-zinc-500">Order #{orderDetails.orderId}</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-sm">
            <CheckCircle className="w-4 h-4" />
            Paid with {orderDetails.method.replace("-", " ").toUpperCase()}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Package className="w-6 h-6" />
            Order Summary
          </h2>

          {orderDetails.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-zinc-700 last:border-b-0"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <div className="flex gap-4 text-zinc-400 text-sm mt-1">
                  {item.size && <span>Size: {item.size}</span>}
                  {item.color && <span>Color: {item.color}</span>}
                  <span>Qty: {item.quantity}</span>
                </div>
              </div>
              <p className="font-semibold text-lg">{item.price}</p>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 text-xl font-bold border-t border-zinc-700">
            <span>Total</span>
            <span>
              ${orderDetails.total.toFixed(2)} {orderDetails.currency}
            </span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-lg p-6 text-center hover:bg-zinc-800 transition-colors">
            <Mail className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Confirmation Email</h3>
            <p className="text-zinc-400 text-sm">You'll receive an order confirmation email within 5 minutes</p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 text-center hover:bg-zinc-800 transition-colors">
            <Package className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Processing</h3>
            <p className="text-zinc-400 text-sm">Your order will be processed and shipped within 1-2 business days</p>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 text-center hover:bg-zinc-800 transition-colors">
            <Truck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Delivery</h3>
            <p className="text-zinc-400 text-sm">Estimated delivery: {orderDetails.estimatedDelivery}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/shop-all">
            <Button className="bg-white text-black hover:bg-gray-200 font-medium px-8 py-3 flex items-center gap-2">
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-medium px-8 py-3">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Order Tracking Info */}
        <div className="bg-zinc-900 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Truck className="w-5 h-5" />
            Track Your Order
          </h3>
          <p className="text-zinc-400 mb-4">
            You can track your order status and shipping updates using your order number:{" "}
            <span className="text-white font-mono">{orderDetails.orderId}</span>
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Track Order</Button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-zinc-400 border-t border-zinc-800 pt-8">
          <p className="mb-2">Need help with your order?</p>
          <p>
            Contact us at{" "}
            <a href="mailto:support@ruined.com" className="text-white underline hover:text-gray-300">
              support@ruined.com
            </a>{" "}
            or call{" "}
            <a href="tel:+1-800-RUINED" className="text-white underline hover:text-gray-300">
              1-800-RUINED
            </a>
          </p>
          <p className="text-sm mt-4 text-zinc-500">
            Order placed on{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
