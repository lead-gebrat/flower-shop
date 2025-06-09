"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            {/* Left Navigation Items */}
            <div
              className={`${playfair.className} ${
                scrolled ? "text-white" : "text-[#f5f0e8] "
              }   hidden md:flex items-center space-x-8`}
            >
              <Link
                href="/"
                className="text-white hover:text-purple-300 transition"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-white hover:text-purple-300 transition"
              >
                Products
              </Link>
            </div>

            {/* Logo - Center */}
            <div className="flex mx-14 justify-center items-center">
              <div>
                <Image
                  src={`${
                    scrolled
                      ? "/images/tulipLogo2.png"
                      : "/images/tulipLogo.png"
                  }`}
                  alt="Logo"
                  width={50}
                  height={50}
                  className={``}
                />
              </div>

              <div
                className={`${playfair.className} text-center ${
                  scrolled ? "text-white" : "text-gray-800"
                }   `}
              >
                <p className="text-2xl font-medium tracking-wider">
                  CENTER GARDEN
                </p>
                <p className="text-xs font-medium tracking-widest">
                  ELEGANT BLOOMS
                </p>
              </div>
            </div>

            {/* Right Navigation Items */}
            <div
              className={`${playfair.className} ${
                scrolled ? "text-white" : "text-[#f5f0e8] "
              } hidden md:flex items-center space-x-8`}
            >
              <Link
                href="#events"
                className="text-white hover:text-purple-300 transition"
              >
                Events
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-purple-300 transition"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
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
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
