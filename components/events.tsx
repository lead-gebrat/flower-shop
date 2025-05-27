"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const events = [
  {
    id: 1,
    title: "Wedding Floral Decor",
    description:
      "Elegant floral arrangements for your special day. Our expert team creates stunning centerpieces, bouquets, and venue decorations tailored to your wedding theme and color palette.",
    image: "/images/wedding.jpg",
  },
  {
    id: 2,
    title: "Corporate Event Styling",
    description:
      "Elevate your corporate events with sophisticated floral designs. From conference table arrangements to reception displays, we create professional floral decor for any business occasion.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 3,
    title: "Birthday & Anniversary Celebrations",
    description:
      "Make your celebration memorable with custom floral designs. Whether it's a milestone birthday or special anniversary, our arrangements add joy and color to your important moments.",
    image: "/placeholder.svg?height=500&width=800",
  },
  {
    id: 4,
    title: "Seasonal Holiday Decorations",
    description:
      "Transform your home or office with festive floral displays for any holiday. Our seasonal arrangements bring warmth and cheer to your space throughout the year.",
    image: "/placeholder.svg?height=500&width=800",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`${playfair.className} text-4xl md:text-5xl text-center mb-16`}
        >
          Events We Decorate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.1 },
                },
              }}
              initial="hidden"
              animate={controls}
              className="group relative overflow-hidden rounded-lg shadow-lg h-80"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className={`${playfair.className} text-2xl font-bold mb-2`}>
                  {event.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                  <p className="text-white text-opacity-90 mt-2">
                    {event.description}
                  </p>
                  <button className="mt-4 bg-white text-purple-800 px-6 py-2 rounded-full hover:bg-purple-100 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
