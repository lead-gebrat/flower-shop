import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/navbar";
import FloatingCart from "@/components/floating-cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Center Garden - Elegant Blooms",
  description:
    "Discover beautiful floral arrangements for every occasion at Violet Bloom. Specializing in weddings, events, and custom bouquets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Navbar />
            {children}
            <FloatingCart />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
