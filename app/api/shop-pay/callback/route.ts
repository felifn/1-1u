import { type NextRequest, NextResponse } from "next/server"
import { shopPayIntegration } from "@/lib/shop-pay-integration"

export async function POST(request: NextRequest) {
  try {
    console.log("Shop Pay callback API called")
    const callbackData = await request.json()
    console.log("Received callback data:", callbackData)

    // Validate webhook signature in production
    const signature = request.headers.get("x-shop-pay-signature")
    if (process.env.NODE_ENV === "production" && !signature) {
      console.error("Missing webhook signature in production")
      return NextResponse.json(
        {
          error: "Missing webhook signature",
          success: false,
        },
        { status: 401 },
      )
    }

    console.log("Processing Shop Pay callback...")

    // Handle the Shop Pay callback (no sensitive data needed)
    const result = await shopPayIntegration.handleCheckoutCallback(callbackData)

    if (result.success) {
      console.log("Shop Pay callback processed successfully:", result.orderId)
      return NextResponse.json({
        success: true,
        orderId: result.orderId,
        message: "Order processed successfully",
      })
    } else {
      console.error("Failed to process Shop Pay callback")
      return NextResponse.json({ success: false, error: "Failed to process order" }, { status: 500 })
    }
  } catch (error) {
    console.error("Shop Pay callback API error:", error)
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
  console.log("Shop Pay callback API health check")
  return NextResponse.json({
    message: "Shop Pay callback API is running",
    timestamp: new Date().toISOString(),
  })
}
