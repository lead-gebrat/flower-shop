"use client";

import Image from "next/image";
import Products from "@/components/products";
import Events from "@/components/events";
import Contact from "@/components/contact";
import WhyChooseUs from "@/components/why-choose-us";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const { dispatch } = useCart();

  const handleBestSellerAddToCart = (item: (typeof bestSellersData)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: Number.parseFloat(item.price),
        image: item.image,
        description: `Best selling ${item.name.toLowerCase()} arrangement`,
        inStock: 10,
      },
    });
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section with elegant background */}
      <section className="relative bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col justify-center"
            >
              <h1
                className={`${playfair.className} text-6xl text-start tracking-widest font-medium md:text-5xl  text-gray-900 leading-tight mb-6`}
              >
                Center Garden
                <span
                  className={`block ${playfair.className} pl-2 text-lg tracking-wider`}
                >
                  Grace in your hands, joy in your day
                </span>
              </h1>
              <p
                className={
                  "text-gray-700  font-sans text-lg leading-relaxed mb-8"
                }
              >
                Exquisite floral arrangements for every occasion. We bring
                nature's beauty into your life with carefully crafted bouquets,
                wedding decorations, and special event styling.
              </p>
              <div>
                <button
                  onClick={scrollToProducts}
                  className=" bg-gray-900 p-6 text-white hover:bg-opacity-90 px-8 py-3 transition-colors duration-300"
                >
                  Shop Now
                </button>
              </div>
            </motion.div>

            {/* Right Content - Three Panels */}
            <div className="lg:col-span-8 grid gap-4 grid-cols-3">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative w-[calc(100%)] h-[500px] ${product.bgColor} overflow-visible`} // Ensure overflow-visible
                >
                  <div className="absolute overflow-visible  h-full w-[calc(100%)] ">
                    {" "}
                    {/* Adjusted left and width */}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/30 to-transparent">
                    <h3
                      className={`${playfair.className} ${product.text} text-xl`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers This Month Section - Restored Oval Design */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full  opacity-20">
          <Image
            src={"/images/front.png"}
            alt="Decorative flower"
            fill
            className="object-contain"
            sizes={"80px, 80px"}
          />
        </div>
        <div className="absolute  top-20 right-10 w-20 h-20 rounded-full  opacity-20">
          <Image
            src={"/images/front.png"}
            alt="Decorative flower"
            fill
            className="object-contain"
            sizes={"(max-width: 48px), 48px"}
          />
        </div>
        <div className="container mx-auto px-4">
          <h2 className={`font-serif text-4xl md:text-5xl text-center mb-16`}>
            Our Best Sellers
            <span className="block text-sm tracking-widest">
              This Month's Top Picks
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {bestSellersData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  {/* Oval container */}
                  <div className="w-64 h-80 bg-[#f0f7f7] rounded-[50%] flex flex-col items-center justify-center shadow-md relative overflow-hidden">
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
                      <h3
                        className={`${playfair.className} text-lg font-bold mt-1`}
                      >
                        {item.name}
                      </h3>
                      <p className="text-black font-bold mt-1">${item.price}</p>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      onClick={() => handleBestSellerAddToCart(item)}
                      className="bg-black text-white border-2 p-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center mx-auto"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 3H5L5.4 5M7 13H17L19 6H5.4M7 13L5.4 5M7 13L6.2 15.8C6.067 16.42 6.52 17 7.16 17H17M17 17C16.45 17 16 17.45 16 18C16 18.55 16.45 19 17 19C17.55 19 18 18.55 18 18C18 17.45 17.55 17 17 17ZM7 17C6.45 17 6 17.45 6 18C6 18.55 6.45 19 7 19C7.55 19 8 18.55 8 18C8 17.45 7.55 17 7 17Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            <div className="mb-6  md:mb-0">
              <div className="flex justify-start items-center">
                <div>
                  <Image
                    src="/images/tulipLogo2.png"
                    alt="Center Garden Logo"
                    width={50}
                    height={50}
                    className=""
                  />
                </div>
                <div>
                  <h3
                    className={`${playfair.className} tracking-wider  text-2xl font-medium mb-4`}
                  >
                    CENTER GARDEN
                    <span className="block text-center tracking-widest text-sm">
                      ELEGANT BLOOMS
                    </span>
                  </h3>
                </div>
              </div>
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
                <li>Bole Atlas, Garden center</li>
                <li>Phone: (+251) 941139289</li>
                <li>Email: centerGarden@gmail.com</li>
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
              &copy; {new Date().getFullYear()} Center Garden. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Featured products with vertical panels (same as before)
const featuredProducts = [
  {
    id: 1,
    name: "Pink Rose",
    price: 49.99,
    image: "/images/pinku.png",
    bgColor: "bg-pink-100",
    text: "text-pink-400 font-bold",
    description: "Symbolize gratitude, appreciation, and gentle affection.",
  },
  {
    id: 2,
    name: "Purple Daisy",
    price: 39.99,
    image: "/images/purplee.png",
    bgColor: "bg-purple-100",
    text: "text-purple-400 font-bold",
    description: "Represent ample creativity, royalty, and pride.",
  },
  {
    id: 3,
    name: "Yellow Dandelion",
    price: 29.99,
    image: "/images/yellow.png",
    bgColor: "bg-yellow-100",
    text: "text-yellow-400 font-bold",
    description: "Symbolize Resilience, hope, and youthful joy.",
  },
];

// Best sellers data (restored from previous design)
const bestSellersData = [
  {
    id: 101,
    name: "Be My Valentine",
    price: "27.23",
    image: "/images/valentine.png",
  },
  {
    id: 102,
    name: "Mother's Day Special",
    price: "25.36",
    image: "/images/mothers2.png",
  },
  {
    id: 103,
    name: "Happy Birthday",
    price: "30.27",
    image: "/images/pink_lily.png",
  },
];
