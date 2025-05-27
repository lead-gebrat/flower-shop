"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`${playfair.className} text-white text-2xl font-bold`}>
            Violet Bloom
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition">
              Home
            </Link>
            <Link href="#products" className="text-white hover:text-purple-300 transition">
              Products
            </Link>
            <Link href="#events" className="text-white hover:text-purple-300 transition">
              Events
            </Link>
            <Link href="#contact" className="text-white hover:text-purple-300 transition">
              Contact
            </Link>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-purple-300 transition py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-white hover:text-purple-300 transition py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="#events"
              className="text-white hover:text-purple-300 transition py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-purple-300 transition py-2 px-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart (0)
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
