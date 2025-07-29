import { type NextRequest, NextResponse } from "next/server"
import { shopPayIntegration } from "@/lib/shop-pay-integration"

export async function POST(request: NextRequest) {
  try {
    console.log("Shop Pay checkout API called")
    const checkoutData = await request.json()
    console.log("Received checkout data:", checkoutData)

    // Validate the checkout data
    if (!checkoutData.items || !Array.isArray(checkoutData.items) || checkoutData.items.length === 0) {
      console.error("Invalid items data:", checkoutData.items)
      return NextResponse.json({ success: false, error: "No items provided for checkout" }, { status: 400 })
    }

    if (!checkoutData.total || checkoutData.total <= 0) {
      console.error("Invalid total:", checkoutData.total)
      return NextResponse.json({ success: false, error: "Invalid checkout total" }, { status: 400 })
    }

    if (!checkoutData.currency) {
      console.error("Missing currency")
      return NextResponse.json({ success: false, error: "Currency is required" }, { status: 400 })
    }

    console.log("Creating Shop Pay checkout...")

    // Create the Shop Pay checkout (no sensitive data needed)
    const result = await shopPayIntegration.initiateCheckout(checkoutData)

    if (result.success) {
      console.log("Shop Pay checkout created successfully:", result.checkoutId)
      return NextResponse.json({
        success: true,
        checkoutUrl: result.url,
        checkoutId: result.checkoutId,
        message: "Shop Pay checkout created successfully",
      })
    } else {
      console.error("Failed to create Shop Pay checkout")
      return NextResponse.json({ success: false, error: "Failed to create Shop Pay checkout" }, { status: 500 })
    }
  } catch (error) {
    console.error("Shop Pay checkout API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  console.log("Shop Pay checkout API health check")
  return NextResponse.json({
    message: "Shop Pay checkout API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  })
}
