"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, User, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
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
      <main className="flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-md space-y-8">
          {/* Login/Signup Title */}
          <h1 className="text-4xl font-bold text-center tracking-wider">{isSignUp ? "CREATE ACCOUNT" : "LOGIN"}</h1>

          {/* Shop Sign In Button */}
          <Link href="https://shop.app/" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full text-lg">
              {isSignUp ? "Sign up with shop" : "Sign in with shop"}
            </Button>
          </Link>

          {/* OR Divider */}
          <div className="text-center">
            <span className="text-zinc-400 text-sm font-medium">OR</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-zinc-600 rounded-full px-6 py-3 text-white placeholder:text-zinc-400 placeholder:font-medium focus:border-white focus:ring-0 text-sm"
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="LAST NAME"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-zinc-600 rounded-full px-6 py-3 text-white placeholder:text-zinc-400 placeholder:font-medium focus:border-white focus:ring-0 text-sm"
                />
              </div>
            )}

            <Input
              name="email"
              type="email"
              placeholder="EMAIL"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent border-2 border-zinc-600 rounded-full px-6 py-3 text-white placeholder:text-zinc-400 placeholder:font-medium focus:border-white focus:ring-0 text-sm"
            />

            <Input
              name="password"
              type="password"
              placeholder="PASSWORD"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="bg-transparent border-2 border-zinc-600 rounded-full px-6 py-3 text-white placeholder:text-zinc-400 placeholder:font-medium focus:border-white focus:ring-0 text-sm"
            />

            {isSignUp && (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="CONFIRM PASSWORD"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="bg-transparent border-2 border-zinc-600 rounded-full px-6 py-3 text-white placeholder:text-zinc-400 placeholder:font-medium focus:border-white focus:ring-0 text-sm"
              />
            )}

            {!isSignUp && (
              <div className="text-center">
                <Link href="#" className="text-white text-sm font-medium underline hover:text-zinc-300">
                  FORGOT YOUR PASSWORD?
                </Link>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-full text-lg"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </Button>
          </form>

          {/* Toggle Sign In/Sign Up */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-white text-sm font-medium underline hover:text-zinc-300"
            >
              {isSignUp ? "ALREADY HAVE AN ACCOUNT? SIGN IN" : "CREATE ACCOUNT"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer Info Section */}
      <footer className="mt-auto">
        <div className="text-center py-8">
          <h3 className="text-white text-lg font-bold mb-4 tracking-wider">INFO</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-white underline">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="hover:text-white underline">
              REFUND POLICY
            </Link>
            <Link href="#" className="hover:text-white underline">
              SHIPPING POLICY
            </Link>
            <Link href="#" className="hover:text-white underline">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
