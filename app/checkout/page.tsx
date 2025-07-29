"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import { ShopPayButton } from "@/components/shop-pay-button"
import Image from "next/image"
import { PromoCodeInput } from "@/components/promo-code-input"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const [isShopPay, setIsShopPay] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setIsShopPay(urlParams.get("method") === "shop-pay")
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout submission
    alert("Order placed successfully!")
    dispatch({ type: "CLEAR_CART" })
  }

  const handleShopPayCheckout = () => {
    // Simulate Shop Pay checkout process
    alert("Redirecting to Shop Pay...")
    setTimeout(() => {
      alert("Shop Pay checkout completed!")
      dispatch({ type: "CLEAR_CART" })
    }, 2000)
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/">
            <Button className="bg-white text-black hover:bg-gray-200">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-zinc-300">
            <ArrowLeft className="h-5 w-5" />
            Back to RUINED
          </Link>
          <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: "serif" }}>
            RUINED
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Checkout</h2>

              {/* Shop Pay Option */}
              {!isShopPay && (
                <div className="mb-8 p-6 bg-zinc-900 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <span className="font-semibold">Express Checkout</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">Skip the form and checkout securely with Shop Pay</p>
                  <ShopPayButton size="lg" className="w-full" onClick={handleShopPayCheckout} />
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-zinc-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-black px-2 text-zinc-400">Or checkout manually</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Manual Checkout Form */}
              {!isShopPay && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            required
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="bg-zinc-900 border-zinc-700 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            required
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            required
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="bg-zinc-900 border-zinc-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3">
                    Complete Order - ${(state.total * 1.08).toFixed(2)} USD
                  </Button>
                </form>
              )}

              {/* Shop Pay Checkout */}
              {isShopPay && (
                <div className="text-center space-y-6">
                  <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
                    <div className="animate-pulse">
                      <div className="h-8 bg-purple-600 rounded mb-4"></div>
                      <div className="h-4 bg-zinc-700 rounded mb-2"></div>
                      <div className="h-4 bg-zinc-700 rounded w-3/4 mx-auto"></div>
                    </div>
                  </div>
                  <p className="text-zinc-400">Redirecting to Shop Pay...</p>
                  <Button onClick={handleShopPayCheckout} className="bg-purple-600 hover:bg-purple-700 text-white">
                    Continue with Shop Pay
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-zinc-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Section */}
              <div className="border-t border-zinc-700 mt-6 pt-4">
                <PromoCodeInput />
              </div>

              <div className="border-t border-zinc-700 mt-6 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${state.subtotal.toFixed(2)}</span>
                </div>

                {state.discount > 0 && (
                  <div className="flex justify-between text-sm text-green-400">
                    <span>Discount ({state.appliedPromoCode?.code})</span>
                    <span>-${state.discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-zinc-700 pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${(state.total * 1.08).toFixed(2)} USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Free shipping on orders over $150</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">Shop Pay available for faster checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
