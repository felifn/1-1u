"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Search, User, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const restockedProducts = [
  {
    id: 1,
    name: "RUIN DENIM JACKET",
    price: "$128.00 USD",
    image: "/placeholder.svg?height=400&width=400&text=Restocked+Denim+Jacket",
  },
  {
    id: 2,
    name: "DESTROYED JEANS (INDIGO)",
    price: "$98.00 USD",
    image: "/placeholder.svg?height=400&width=400&text=Restocked+Destroyed+Jeans",
  },
  {
    id: 3,
    name: "SHREDDED HOODIE (BLACK)",
    price: "$85.00 USD",
    image: "/placeholder.svg?height=400&width=400&text=Restocked+Shredded+Hoodie",
  },
]

export default function JustRestockedPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "serif" }}>
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
            <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 bg-black z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-800 mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              <nav className="space-y-6">
                <Link
                  href="/shop-all"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SHOP ALL
                </Link>
                <Link
                  href="/new-releases"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NEW RELEASES
                </Link>
                <Link
                  href="/just-restocked"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  JUST RESTOCKED
                </Link>
                <Link
                  href="/blanks"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BLANKS
                </Link>
                <Link
                  href="/hoodies"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOODIES
                </Link>
                <Link
                  href="/tshirts"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  TSHIRTS
                </Link>
                <Link
                  href="/bottoms"
                  className="block text-white text-lg font-semibold tracking-wider hover:text-zinc-300 transition-colors"
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-wider mb-2">JUST RESTOCKED</h1>
          <p className="text-zinc-400">Back from the dead</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restockedProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-zinc-900 border-zinc-800 group cursor-pointer hover:bg-zinc-800 transition-colors"
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
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="bg-white text-black hover:bg-gray-200 rounded-full">
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
      </main>
    </div>
  )
}
