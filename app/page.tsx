"use client";

import Image from "next/image";
import Products from "@/components/products";
import Events from "@/components/events";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import WhyChooseUs from "@/components/why-choose-us";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section with black background and flower image */}
      <section className="relative bg-black min-h-[100vh] flex items-center justify-center overflow-visible">
        <div className="container mx-auto text-center relative z-30 pt-20 pb-60">
          <h1
            className={`${playfair.className} text-10xl md:text-7xl text-white font-bold mb-3 opacity-90`}
          >
            Violet Bloom
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Exquisite floral arrangements for every occasion
          </p>
        </div>
        <motion.div
          className="absolute  transform -translate-x-1/2 z-20"
          style={{ top: "40%" }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0,
            immediateRender: true,
          }}
        >
          <div className="relative w-[300px] md:w-[400px] lg:w-[600px] h-[500px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/images/purple-bouquet.png"
              alt="Beautiful Purple Flower Bouquet"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 900px) 90vw, (max-width: 1200px) 60vw, 50vw"
            />
          </div>
        </motion.div>
        <Image
          src={"/images/pur.jpg"}
          alt={"pur"}
          width={20}
          height={20}
        ></Image>
      </section>

      {/* Best Sellers This Month Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className={`${playfair.className} text-4xl md:text-3xl text-center mb-16`}
          >
            Our Best Sellers This Month
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {bestSellersData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative">
                  {/* Oval container */}
                  <div className="w-64 h-80 bg-[#f0f7f7] rounded-[50%] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* The flower image positioned at the top */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="relative w-48 h-48 mt-2">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-contain z-10"
                          sizes="(max-width: 768px) 80vw, 300px"
                        />
                      </div>
                    </div>

                    {/* Text content inside the oval */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 pt-2 text-center">
                      <p className="text-gray-600 text-sm">
                        For Special Person
                      </p>
                      <h3
                        className={`${playfair.className} text-lg font-bold mt-1`}
                      >
                        {item.name}
                      </h3>
                      <p className="text-black font-bold mt-1">${item.price}</p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="bg-[#f0f7f7] text-teal-700 p-2 rounded-full hover:bg-teal-50 transition">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 12H16M12 8V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Products Section with oval containers */}
      <section id="products">
        <Products />
      </section>

      {/* Events Section */}
      <section id="events">
        <Events />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className={`${playfair.className} text-2xl font-bold mb-4`}>
                Violet Bloom
              </h3>
              <p className="text-gray-400 max-w-xs">
                Bringing nature's beauty into your life with carefully crafted
                floral arrangements.
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Flower Street, Garden City</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: hello@violetbloom.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Violet Bloom. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const newArrivalsData = [
  {
    name: "Spring Elegance",
    description: "A delicate mix of spring blooms in pastel colors.",
    price: "59.99",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Sunset Romance",
    description: "Vibrant roses and lilies in warm sunset tones.",
    price: "69.99",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Pure Serenity",
    description: "White and cream blooms for a peaceful arrangement.",
    price: "54.99",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const bestSellersData = [
  {
    name: "Be My Valentine",
    price: "27.23",
    image: "/images/valentine.png",
  },
  {
    name: "Mother's Day",
    price: "25.36",
    image: "/images/mothers2.png",
  },
  {
    name: "Happy Birthday",
    price: "30.27",
    image: "/images/pink_lily.png",
  },
];
