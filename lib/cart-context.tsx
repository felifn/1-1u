"use client"

import type React from "react"
import { createContext, useContext, useReducer, useState } from "react"
import { validatePromoCode, calculateDiscount, type PromoCode } from "./promo-codes"

interface CartItem {
  id: string
  name: string
  price: string
  image: string
  size?: string
  color?: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  subtotal: number
  discount: number
  total: number
  appliedPromoCode?: PromoCode
  promoCodeError?: string
}

interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
  showNotification: (item: { name: string; image: string; price: string }) => void
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "TOGGLE_CART" }
  | { type: "CLEAR_CART" }
  | { type: "APPLY_PROMO_CODE"; payload: string }
  | { type: "REMOVE_PROMO_CODE" }

const CartContext = createContext<CartContextType | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      let newItems
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }

      const subtotal = calculateSubtotal(newItems)
      const discount = state.appliedPromoCode ? calculateDiscount(state.appliedPromoCode, subtotal) : 0

      return {
        ...state,
        items: newItems,
        subtotal,
        discount,
        total: subtotal - discount,
      }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      const subtotal = calculateSubtotal(newItems)
      const discount = state.appliedPromoCode ? calculateDiscount(state.appliedPromoCode, subtotal) : 0

      return {
        ...state,
        items: newItems,
        subtotal,
        discount,
        total: subtotal - discount,
      }
    }
    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
        .filter((item) => item.quantity > 0)

      const subtotal = calculateSubtotal(newItems)
      const discount = state.appliedPromoCode ? calculateDiscount(state.appliedPromoCode, subtotal) : 0

      return {
        ...state,
        items: newItems,
        subtotal,
        discount,
        total: subtotal - discount,
      }
    }
    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        subtotal: 0,
        discount: 0,
        total: 0,
        appliedPromoCode: undefined,
        promoCodeError: undefined,
      }
    case "APPLY_PROMO_CODE": {
      const validation = validatePromoCode(action.payload, state.subtotal)

      if (!validation.isValid) {
        return {
          ...state,
          promoCodeError: validation.error,
          appliedPromoCode: undefined,
          discount: 0,
          total: state.subtotal,
        }
      }

      const discount = calculateDiscount(validation.promoCode!, state.subtotal)

      return {
        ...state,
        appliedPromoCode: validation.promoCode,
        discount,
        total: state.subtotal - discount,
        promoCodeError: undefined,
      }
    }
    case "REMOVE_PROMO_CODE":
      return {
        ...state,
        appliedPromoCode: undefined,
        discount: 0,
        total: state.subtotal,
        promoCodeError: undefined,
      }
    default:
      return state
  }
}

function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace("$", "").replace(" USD", ""))
    return total + price * item.quantity
  }, 0)
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
    subtotal: 0,
    discount: 0,
    total: 0,
  })

  const [notification, setNotification] = useState<{
    item: { name: string; image: string; price: string }
    isVisible: boolean
  } | null>(null)

  const showNotification = (item: { name: string; image: string; price: string }) => {
    setNotification({ item, isVisible: true })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <CartContext.Provider value={{ state, dispatch, showNotification }}>
      {children}
      {/* Cart Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ease-out ${
            notification.isVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"
          }`}
        >
          <div className="bg-green-900 border border-green-700 rounded-lg p-4 shadow-lg max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-100 font-medium text-sm">Added to cart</p>
                <p className="text-green-200 text-xs truncate">{notification.item.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
