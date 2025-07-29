"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Search, User, ShoppingCart, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { PromoBanner } from "@/components/promo-banner"
import { products } from "@/lib/products"

const selvedgeProducts = [
  {
    id: 6,
    name: "RUIN DENIM JACKET",
    price: "$128.00 USD",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "DESTROYED JEANS (INDIGO)",
    price: "$98.00 USD",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    name: "SHREDDED HOODIE",
    price: "$78.00 USD",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function RuinedHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state, dispatch, showNotification } = useCart()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, products.length - 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3))
  }

  const addToCart = (product: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })

    // Show notification
    showNotification({
      name: product.name,
      image: product.image,
      price: product.price,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-zinc-900 text-center py-2 text-xs font-medium">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">{"★".repeat(5)}</div>
            <span className="ml-2">4.8/5 (2.1k+)</span>
          </div>
          <div className="font-bold">BUY 2 ITEMS GET 15% OFF</div>
          <div>FREE SHIPPING ON $150+ ORDERS</div>
        </div>
      </div>

      {/* Promo Banner */}
      <PromoBanner />

      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zinc-800"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <Link href="/" className="text-center">
            <h1 className="ruined-logo-gothic ruined-logo-textured ruined-logo-cracked ruined-logo-interactive text-4xl font-bold tracking-wider">
              RUINED
            </h1>
          </Link>

          <div className="flex items-center gap-2">
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
              className="text-white hover:bg-zinc-800 relative transition-all duration-200 hover:scale-110"
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
            >
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {state.items.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ touchAction: 'none' }}
          />

          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out mobile-menu">
            <div className="p-6 h-full overflow-y-auto">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-800 mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Links */}
              <nav className="space-y-6">
                <Link
                  href="/shop-all"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SHOP ALL
                </Link>
                <Link
                  href="/new-releases"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NEW RELEASES
                </Link>
                <Link
                  href="/just-restocked"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  JUST RESTOCKED
                </Link>
                <Link
                  href="/blanks"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BLANKS
                </Link>
                <Link
                  href="/hoodies"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOODIES
                </Link>
                <Link
                  href="/tshirts"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  TSHIRTS
                </Link>
                <Link
                  href="/bottoms"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOTTOMS
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* New Releases Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 tracking-wider">NEW RELEASES</h2>

          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {products.slice(0, 5).map((product) => (
                  <div key={product.id} className="relative">
                    <Link href={`/product/${product.id}`}>
                      <Card className="bg-zinc-900 border-zinc-800 flex-shrink-0 w-80 group cursor-pointer hover:bg-zinc-800 transition-all duration-300 hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={400}
                              height={400}
                              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-sm mb-2 tracking-wide">{product.name}</h3>
                            <p className="text-white font-medium">{product.price}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                    <div className="absolute bottom-20 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10">
                      <Button
                        size="icon"
                        className="bg-white text-black hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addToCart(product)
                        }}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-200 hover:scale-110"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-zinc-800 hover:bg-zinc-700 text-white transition-all duration-200 hover:scale-110"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button variant="ghost" size="sm" className="text-white hover:bg-zinc-800">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">1/3</span>
            <Button variant="ghost" size="sm" className="text-white hover:bg-zinc-800">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
              View all
            </Button>
          </div>
        </section>

        {/* Selvedge Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wider">RESTOCKED</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selvedgeProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-zinc-900 border-zinc-800 group cursor-pointer hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <Button
                        size="icon"
                        className="bg-white text-black hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 tracking-wide">{product.name}</h3>
                    <p className="text-white font-medium">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="ruined-logo-textured font-bold text-lg mb-4 tracking-wider">RUINED</h3>
              <p className="text-zinc-400 text-sm">Streetwear for the broken generation. Embrace the decay.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Bottoms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    TikTok
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-400">
            <p>&copy; 2024 RUINED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
