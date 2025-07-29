"use client"

import { useState, useEffect } from "react"
import { X, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  price: string
  image: string
  size?: string
  color?: string
  quantity: number
}

interface AnimatedCartItemProps {
  item: CartItem
  index: number
  isRemoving?: boolean
  onRemoveComplete?: () => void
}

export function AnimatedCartItem({ item, index, isRemoving = false, onRemoveComplete }: AnimatedCartItemProps) {
  const { dispatch } = useCart()
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Staggered entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  useEffect(() => {
    if (isRemoving) {
      setIsExiting(true)
      const timer = setTimeout(() => {
        onRemoveComplete?.()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isRemoving, onRemoveComplete])

  const handleRemove = () => {
    setIsExiting(true)
    setTimeout(() => {
      dispatch({ type: "REMOVE_ITEM", payload: item.id })
    }, 300)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemove()
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: newQuantity },
      })
    }
  }

  return (
    <div
      className={`transform transition-all duration-300 ease-out ${
        isVisible && !isExiting
          ? "translate-x-0 opacity-100 scale-100"
          : isExiting
            ? "translate-x-full opacity-0 scale-95"
            : "translate-x-8 opacity-0 scale-95"
      }`}
      style={{
        transitionDelay: isExiting ? "0ms" : `${index * 50}ms`,
      }}
    >
      <div className="flex gap-4 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors duration-200">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={80}
            height={80}
            className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-sm">{item.name}</h3>
          <p className="text-zinc-400 text-sm">{item.price}</p>
          {item.size && <p className="text-zinc-400 text-xs">Size: {item.size}</p>}

          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-zinc-700 transition-all duration-200 hover:scale-110"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-white text-sm w-8 text-center font-medium">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-zinc-700 transition-all duration-200 hover:scale-110"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-400 hover:text-red-400 hover:bg-red-900/20 transition-all duration-200 hover:scale-110"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
