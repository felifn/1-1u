"use client"

import { useState, useEffect } from "react"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { ShopPayButton } from "./shop-pay-button"
import { PromoCodeInput } from "./promo-code-input"
import { AnimatedCartItem } from "./animated-cart-item"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (state.isOpen) {
      setIsAnimating(true)
    }
  }, [state.isOpen])

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          state.isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={() => dispatch({ type: "TOGGLE_CART" })}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-black z-50 border-l border-zinc-800 transform transition-transform duration-300 ease-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div
              className={`transform transition-all duration-300 delay-100 ${
                isAnimating ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                {state.items.length === 0 ? "Cart" : `Cart (${state.items.length})`}
              </h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800 transition-all duration-200 hover:scale-110 hover:rotate-90"
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <div
                className={`flex flex-col items-center justify-center h-full text-center px-8 transform transition-all duration-500 delay-200 ${
                  isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="transform transition-all duration-300 hover:scale-105">
                  <h2 className="text-2xl font-bold text-white mb-8 tracking-wider">YOUR CART IS EMPTY</h2>
                </div>

                <Button
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-3 rounded-lg mb-12 transition-all duration-200 hover:scale-105 transform"
                  onClick={() => dispatch({ type: "TOGGLE_CART" })}
                >
                  CONTINUE SHOPPING
                </Button>

                <div className="space-y-2 transform transition-all duration-300 delay-100">
                  <p className="text-white font-medium">HAVE AN ACCOUNT?</p>
                  <Link
                    href="/auth"
                    className="text-white underline hover:text-zinc-300 transition-colors duration-200"
                    onClick={() => dispatch({ type: "TOGGLE_CART" })}
                  >
                    LOG IN TO CHECK OUT FASTER.
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {state.items.map((item, index) => (
                  <AnimatedCartItem key={item.id} item={item} index={index} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div
              className={`border-t border-zinc-800 p-6 space-y-4 transform transition-all duration-500 delay-300 ${
                isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Promo Code Input */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <PromoCodeInput />
              </div>

              {/* Order Summary */}
              <div className="space-y-2 text-white">
                <div className="flex justify-between items-center transition-all duration-200 hover:text-zinc-300">
                  <span>Subtotal:</span>
                  <span>${state.subtotal.toFixed(2)} USD</span>
                </div>

                {state.discount > 0 && (
                  <div className="flex justify-between items-center text-green-400 transform transition-all duration-300 animate-pulse">
                    <span>Discount:</span>
                    <span>-${state.discount.toFixed(2)} USD</span>
                  </div>
                )}

                <div className="border-t border-zinc-700 pt-2">
                  <div className="flex justify-between items-center text-lg font-bold transition-all duration-200 hover:text-zinc-300">
                    <span>Total:</span>
                    <span>${state.total.toFixed(2)} USD</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="transform transition-all duration-200 hover:scale-105">
                  <ShopPayButton size="lg" className="w-full" />
                </div>
                <Link href="/checkout">
                  <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-200 hover:scale-105 transform">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
