"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const products = [
  {
    id: 1,
    name: "Purple Passion",
    description: "Exquisite purple roses and calla lilies",
    price: "$79.99",
    image: "/images/purple.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
  {
    id: 2,
    name: "Sunrise Delight",
    description: "Vibrant mix of orange and yellow blooms",
    price: "$65.99",
    image: "/images/daisy.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
  {
    id: 3,
    name: "Pure Elegance",
    description: "White roses with delicate green accents",
    price: "$69.99",
    image: "/images/red2.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
  {
    id: 4,
    name: "Romantic Red",
    description: "Classic red roses arrangement",
    price: "$89.99",
    image: "/images/lily.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
  {
    id: 5,
    name: "Garden Charm",
    description: "Mixed wildflowers in seasonal colors",
    price: "$59.99",
    image: "/images/baby4.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
  {
    id: 6,
    name: "Exotic Paradise",
    description: "Tropical flowers in bold, vibrant colors",
    price: "$99.99",
    image: "/images/hello.png",
    imageSize: { width: 240, height: 240 },
    backgroundColor: "bg-gray-100",
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 px-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`${playfair.className} text-4xl md:text-5xl text-center mb-12`}
        >
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="flex flex-col items-center"
            >
              <div
                className={`w-100 h-200 ${product.backgroundColor} rounded-lg overflow-visible flex justify-center items-center relative`}
              >
                <div
                  className="relative overflow-visible z-5"
                  style={{
                    width: product.imageSize.width,
                    height: product.imageSize.height,
                    left: "-10%",
                    top: "-20%",
                  }}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="z-10"
                    sizes="(max-width: 768px) 100px, 100px"
                  />
                </div>

                <div className="z-10 text-center p-0">
                  <h3 className={`${playfair.className} text-md font-bold`}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-purple-800 text-sm font-bold mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
