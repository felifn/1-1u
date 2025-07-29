"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingCart, Minus, Plus, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { getProductById, type Product } from "@/lib/products"
import { ShopPayButton } from "@/components/shop-pay-button"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { dispatch, showNotification } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<"description" | "size-guide">("description")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    console.log("Product page loaded with ID:", params.id)
    const productId = Number.parseInt(params.id as string)
    const foundProduct = getProductById(productId)

    if (foundProduct) {
      console.log("Product found:", foundProduct)
      setProduct(foundProduct)
      setSelectedColor(foundProduct.colors[0]?.name || "")
    } else {
      console.log("Product not found, redirecting to home")
      router.push("/")
    }
  }, [params.id, router])

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold mb-4">Loading product...</h1>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    console.log("Add to cart clicked", { selectedSize, selectedColor, quantity })

    if (!selectedSize) {
      alert("Please select a size")
      return
    }

    const selectedColorData = product.colors.find((color) => color.name === selectedColor)

    const cartItem = {
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      name: `${product.name} (${selectedColor})`,
      price: product.price,
      image: selectedColorData?.image || product.image,
      size: selectedSize,
      color: selectedColor,
    }

    console.log("Adding item to cart:", cartItem)

    dispatch({
      type: "ADD_ITEM",
      payload: cartItem,
    })

    showNotification({
      name: `${product.name} (${selectedColor})`,
      image: selectedColorData?.image || product.image,
      price: product.price,
    })

    // Add multiple quantities if needed
    for (let i = 1; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: cartItem,
      })
    }

    console.log("Item added to cart successfully")
  }

  const currentImage = product.colors.find((color) => color.name === selectedColor)?.image || product.image

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 bg-black z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-center">
            <h1 className="ruined-logo-gothic ruined-logo-textured ruined-logo-cracked text-4xl font-bold tracking-wider">
              RUINED
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/shop-all" className="hover:text-gray-300 transition-colors">
              SHOP ALL
            </Link>
            <Link href="/new-releases" className="hover:text-gray-300 transition-colors">
              NEW RELEASES
            </Link>
            <Link href="/just-restocked" className="hover:text-gray-300 transition-colors">
              RESTOCKED
            </Link>
            <Link href="/hoodies" className="hover:text-gray-300 transition-colors">
              HOODIES
            </Link>
            <Link href="/tshirts" className="hover:text-gray-300 transition-colors">
              T-SHIRTS
            </Link>
            <Link href="/bottoms" className="hover:text-gray-300 transition-colors">
              BOTTOMS
            </Link>
            <Link href="/blanks" className="hover:text-gray-300 transition-colors">
              BLANKS
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/auth">
              <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800 relative"
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/shop-all" className="hover:text-gray-300 transition-colors">
                SHOP ALL
              </Link>
              <Link href="/new-releases" className="hover:text-gray-300 transition-colors">
                NEW RELEASES
              </Link>
              <Link href="/just-restocked" className="hover:text-gray-300 transition-colors">
                RESTOCKED
              </Link>
              <Link href="/hoodies" className="hover:text-gray-300 transition-colors">
                HOODIES
              </Link>
              <Link href="/tshirts" className="hover:text-gray-300 transition-colors">
                T-SHIRTS
              </Link>
              <Link href="/bottoms" className="hover:text-gray-300 transition-colors">
                BOTTOMS
              </Link>
              <Link href="/blanks" className="hover:text-gray-300 transition-colors">
                BLANKS
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-zinc-800">
                <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                <Link href="/auth">
                  <User className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                </Link>
                <button onClick={() => dispatch({ type: "TOGGLE_CART" })} className="relative">
                  <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-300" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
              <Image
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-white" : "border-zinc-700"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-wider mb-2">{product.name}</h1>
              <p className="text-2xl font-medium">{product.priceCAD}</p>
              <p className="text-sm text-zinc-400 underline cursor-pointer">Shipping calculated at checkout.</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">COLOR: {selectedColor}</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      console.log("Color selected:", color.name)
                      setSelectedColor(color.name)
                    }}
                    className={`w-16 h-16 rounded-lg border-2 overflow-hidden ${
                      selectedColor === color.name ? "border-white" : "border-zinc-700"
                    }`}
                  >
                    <Image
                      src={color.image || "/placeholder.svg"}
                      alt={color.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      console.log("Size selected:", size)
                      setSelectedSize(size)
                    }}
                    className={`px-4 py-2 rounded-full border text-sm font-medium ${
                      selectedSize === size
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-zinc-600 hover:border-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-zinc-800 border border-zinc-600 rounded-l-lg rounded-r-none"
                  onClick={() => {
                    const newQuantity = Math.max(1, quantity - 1)
                    console.log("Quantity decreased to:", newQuantity)
                    setQuantity(newQuantity)
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="px-4 py-2 border-t border-b border-zinc-600 bg-transparent text-white text-center min-w-[60px]">
                  {quantity}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-zinc-800 border border-zinc-600 rounded-r-lg rounded-l-none"
                  onClick={() => {
                    const newQuantity = quantity + 1
                    console.log("Quantity increased to:", newQuantity)
                    setQuantity(newQuantity)
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black font-medium py-3 rounded-lg transition-colors"
              >
                ADD TO CART
              </Button>
              <ShopPayButton
                size="lg"
                className="w-full"
                productId={product.id.toString()}
                productName={product.name}
                productPrice={Number.parseFloat(product.priceCAD.replace(/[^0-9.]/g, ""))}
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                quantity={quantity}
              />
              <p className="text-center text-sm text-zinc-400 underline cursor-pointer">More payment options</p>
            </div>

            {/* Description and Size Guide Tabs */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  onClick={() => setActiveTab("description")}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                    activeTab === "description"
                      ? "bg-white text-black"
                      : "bg-transparent border border-zinc-600 text-white hover:border-white"
                  }`}
                >
                  DESCRIPTION
                </Button>
                <Button
                  onClick={() => setActiveTab("size-guide")}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                    activeTab === "size-guide"
                      ? "bg-white text-black"
                      : "bg-transparent border border-zinc-600 text-white hover:border-white"
                  }`}
                >
                  SIZE GUIDE
                </Button>
              </div>

              <div className="p-4 bg-zinc-900 rounded-lg">
                {activeTab === "description" ? (
                  <p className="text-zinc-300">{product.description}</p>
                ) : (
                  <p className="text-zinc-300">{product.sizeGuide}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
