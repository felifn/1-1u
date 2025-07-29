"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"
import { Tag, X, Check } from "lucide-react"

interface PromoCodeInputProps {
  className?: string
}

export function PromoCodeInput({ className = "" }: PromoCodeInputProps) {
  const [promoCode, setPromoCode] = useState("")
  const [isApplying, setIsApplying] = useState(false)
  const { state, dispatch } = useCart()

  const handleApplyPromoCode = async () => {
    if (!promoCode.trim()) return

    setIsApplying(true)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    dispatch({ type: "APPLY_PROMO_CODE", payload: promoCode.trim() })

    if (!state.promoCodeError) {
      setPromoCode("")
    }
    setIsApplying(false)
  }

  const handleRemovePromoCode = () => {
    dispatch({ type: "REMOVE_PROMO_CODE" })
    setPromoCode("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleApplyPromoCode()
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Applied Promo Code */}
      {state.appliedPromoCode && (
        <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-700 rounded-lg">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-green-400 font-medium text-sm">{state.appliedPromoCode.code} applied</span>
            <span className="text-green-300 text-xs">({state.appliedPromoCode.description})</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-green-400 hover:text-green-300 hover:bg-green-900/30"
            onClick={handleRemovePromoCode}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}

      {/* Promo Code Input */}
      {!state.appliedPromoCode && (
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                className="pl-10 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400"
                disabled={isApplying}
              />
            </div>
            <Button
              onClick={handleApplyPromoCode}
              disabled={!promoCode.trim() || isApplying}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              {isApplying ? "Applying..." : "Apply"}
            </Button>
          </div>

          {/* Error Message */}
          {state.promoCodeError && (
            <p className="text-red-400 text-sm flex items-center gap-1">
              <X className="h-3 w-3" />
              {state.promoCodeError}
            </p>
          )}

          {/* Sample Codes Hint */}
          <div className="text-xs text-zinc-500">Try: WELCOME20, SAVE10, FLAT15, RUINED25, NEWDROP</div>
        </div>
      )}
    </div>
  )
}
