"use client"

import { useEffect } from "react"
import { Check } from "lucide-react"
import Image from "next/image"

interface CartNotificationProps {
  item?: {
    name: string
    image: string
    price: string
  }
  isVisible: boolean
  onHide: () => void
}

export function CartNotification({ item, isVisible, onHide }: CartNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onHide])

  if (!item) return null

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"
      }`}
    >
      <div className="bg-green-900 border border-green-700 rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-green-100 font-medium text-sm">Added to cart</p>
            <p className="text-green-200 text-xs truncate">{item.name}</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={40}
              height={40}
              className="rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
