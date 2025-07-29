export interface PromoCode {
  code: string
  type: "percentage" | "fixed"
  value: number
  description: string
  minOrder?: number
  maxDiscount?: number
  expiryDate?: Date
  isActive: boolean
}

export const promoCodes: PromoCode[] = [
  {
    code: "WELCOME20",
    type: "percentage",
    value: 20,
    description: "20% off your first order",
    minOrder: 50,
    maxDiscount: 100,
    isActive: true,
  },
  {
    code: "SAVE10",
    type: "percentage",
    value: 10,
    description: "10% off any order",
    isActive: true,
  },
  {
    code: "FLAT15",
    type: "fixed",
    value: 15,
    description: "$15 off your order",
    minOrder: 75,
    isActive: true,
  },
  {
    code: "RUINED25",
    type: "percentage",
    value: 25,
    description: "25% off for loyal customers",
    minOrder: 100,
    maxDiscount: 150,
    isActive: true,
  },
  {
    code: "NEWDROP",
    type: "fixed",
    value: 30,
    description: "$30 off new releases",
    minOrder: 120,
    isActive: true,
  },
  {
    code: "EXPIRED",
    type: "percentage",
    value: 50,
    description: "Expired promo code",
    expiryDate: new Date("2024-01-01"),
    isActive: false,
  },
]

export function validatePromoCode(
  code: string,
  orderTotal: number,
): {
  isValid: boolean
  promoCode?: PromoCode
  error?: string
} {
  const promoCode = promoCodes.find((promo) => promo.code.toLowerCase() === code.toLowerCase())

  if (!promoCode) {
    return { isValid: false, error: "Invalid promo code" }
  }

  if (!promoCode.isActive) {
    return { isValid: false, error: "This promo code is no longer active" }
  }

  if (promoCode.expiryDate && new Date() > promoCode.expiryDate) {
    return { isValid: false, error: "This promo code has expired" }
  }

  if (promoCode.minOrder && orderTotal < promoCode.minOrder) {
    return {
      isValid: false,
      error: `Minimum order of $${promoCode.minOrder} required for this promo code`,
    }
  }

  return { isValid: true, promoCode }
}

export function calculateDiscount(promoCode: PromoCode, orderTotal: number): number {
  if (promoCode.type === "percentage") {
    const discount = (orderTotal * promoCode.value) / 100
    return promoCode.maxDiscount ? Math.min(discount, promoCode.maxDiscount) : discount
  } else {
    return Math.min(promoCode.value, orderTotal)
  }
}
