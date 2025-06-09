"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Playfair_Display, Roboto_Mono } from "next/font/google";
import ProductModal from "./product-modal";
import { useCart } from "@/lib/cart-context";

const playfair = Playfair_Display({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const products = [
  {
    id: 1,
    name: "Lavender Bliss",
    description: "delicate small purple flowers",
    price: 79.99,
    image: "/images/purple.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 15,
    category: "Premium Bouquets",
    details: [
      "Soft lavender and purple accents",
      "Symbol of grace and elegance",
      "Soothing scent for relaxation",
      "Ideal for heartfelt occasions",
      "Hand-tied with silk ribbon",
    ],
  },
  {
    id: 2,
    name: "Daisy Bloom",
    description: "bright daisies with orange hues",
    price: 65.99,
    image: "/images/daisy.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 8,
    category: "Seasonal Collection",
    details: [
      "Cheerful daisy mix in bold colors",
      "Symbolizes joy and happiness",
      "Sustainably grown and harvested",
      "Perfect for everyday cheer",
      "Same-day delivery in select areas",
    ],
  },
  {
    id: 3,
    name: "Crimson Embrace",
    description: "classic red rose bouquet",
    price: 69.99,
    image: "/images/red2.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 12,
    category: "Classic Collection",
    details: [
      "Lush crimson roses, velvety petals",
      "Timeless romantic gesture",
      "Symbol of deep affection",
      "Arranged with elegant greenery",
      "Includes rose care guide",
    ],
  },
  {
    id: 4,
    name: "Blushing Lilys",
    description: "white lilies with pink blush",
    price: 89.99,
    image: "/images/lily.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 20,
    category: "Romance Collection",
    details: [
      "Graceful oriental lilies with blush tips",
      "Fragrant and eye-catching",
      "Represents devotion and admiration",
      "Luxury tissue and ribbon wrap",
      "Perfect for romantic moments",
    ],
  },
  {
    id: 5,
    name: "Baby's Breath",
    description: "soft lilac baby's breath blooms",
    price: 59.99,
    image: "/images/baby4.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 0,
    category: "Wildflower Collection",
    details: [
      "Pastel baby's breath in soft lilac",
      "Light and airy floral touch",
      "Symbol of everlasting love",
      "Eco-conscious and compostable wrap",
      "Grown with sustainable methods",
    ],
  },
  {
    id: 6,
    name: "Lavender Escape",
    description: "vibrant lavender tropical bouquet",
    price: 99.99,
    image: "/images/hello.png",
    imageSize: { width: 240, height: 200 },
    backgroundColor: "bg-gray-100",
    inStock: 5,
    category: "Tropical Collection",
    details: [
      "Lush lavender tones with exotic flair",
      "Features heliconias and orchids",
      "Symbolizes serenity and luxury",
      "Hand-prepped in climate control",
      "Ships with tropical care kit",
    ],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleAddToCart = (
    product: (typeof products)[0],
    event: React.MouseEvent
  ) => {
    event.stopPropagation();
    if (product.inStock > 0) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
          inStock: product.inStock,
        },
      });
    }
  };

  return (
    <section className="relative pb-20 lg:px-20 bg-white" ref={ref}>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full  opacity-20">
        <Image
          src={"/images/front.png"}
          alt="Decorative flower"
          fill
          className="object-contain"
          sizes={"80px, 80px"}
        />
      </div>
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full  opacity-20">
        <Image
          src={"/images/front.png"}
          alt="Decorative flower"
          fill
          className="object-contain"
          sizes={"(max-width: 48px), 48px"}
        />
      </div>
      <div className="container mx-auto py-4 px-4 ">
        <div className="mb-15 px-4 py-10">
          <h2 className={`font-serif text-4xl md:text-5xl text-center `}>
            Our Flowers
            <span
              className={`${playfair.className} text-sm tracking-wide block text-center`}
            >
              Hand picked with care
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-12 lg:grid-cols-3 gap-y-14 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              initial="hidden"
              animate={controls}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleProductClick(product)}
            >
              <div
                className={`w-full h-100 ${product.backgroundColor} rounded-lg overflow-visible flex flex-col justify-between items-center relative hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
              >
                {/* Stock count for available items */}
                {product.inStock > 0 && product.inStock <= 10 && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full z-20">
                    Only {product.inStock} left
                  </div>
                )}

                {/* Out of stock indicator */}
                {product.inStock === 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-20">
                    Out of Stock
                  </div>
                )}

                {/* Image container */}
                <div className="flex-1 flex justify-center items-center relative overflow-visible">
                  <div
                    className="relative overflow-visible z-5"
                    style={{
                      width: product.imageSize.width,
                      height: product.imageSize.height,
                      top: "-20%",
                    }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="z-10 object-contain"
                      sizes="(max-width: 768px) 240px, 240px"
                    />
                  </div>
                </div>

                {/* Product info */}
                <div className="z-10 text-center px-4 pb-4 pt-0 w-full">
                  <h3 className={`font-sans text-2xl font-semibold mb-2`}>
                    {product.name}
                  </h3>
                  <p
                    className={`font-serif text-gray-600 text-sm mt-2 line-clamp-2 mb-2`}
                  >
                    {product.description}
                  </p>
                  <p className="text-purple-800 text-lg font-bold mb-3">
                    ${product.price}
                  </p>

                  {/* Stock status */}
                  <p className="text-xs text-gray-500 mb-3">
                    {product.inStock > 0
                      ? `${product.inStock} in stock`
                      : "Out of stock"}
                  </p>

                  {/* Add to cart button */}
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={product.inStock === 0}
                    className={`lg:w-40 md:w-40 w-full py-2 px-2 rounded-lg transition-all duration-300 ${
                      product.inStock > 0
                        ? "bg-purple-700 text-white hover:bg-purple-800 transform hover:scale-105 hover:z-40"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </section>
  );
}
