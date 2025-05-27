"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const features = [
  {
    id: 1,
    title: "Fresh Products",
    description:
      "We only source fresh flowers daily to ensure your bouquets last longer and look beautiful.",
    position: "top-left",
  },
  {
    id: 2,
    title: "100% Natural",
    description:
      "All our flowers are grown naturally without harmful chemicals, ensuring a safe and eco-friendly product.",
    position: "top-right",
  },
  {
    id: 3,
    title: "Moneyback Guarantee",
    description:
      "If you're not completely satisfied with your purchase, we offer a 100% money-back guarantee.",
    position: "bottom-left",
  },
  {
    id: 4,
    title: "Maintained With Care",
    description:
      "Each arrangement is carefully crafted by our expert florists with attention to every detail.",
    position: "bottom-right",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink-100 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-purple-100 opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-pink-100 opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
          </div>
          <h2
            className={`${playfair.className} text-4xl md:text-5xl text-center`}
          >
            Why Choose Us
          </h2>
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 relative h-[600px] md:h-[700px]">
          {/* Central image with circular gradient container */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="relative w-64 h-64 rounded-[50%]"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,192,203,1) 50%, rgba(255,182,193,1) 100%)",
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              initial="hidden"
              animate={controls}
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                <Image
                  src="/images/pinkTulips.png"
                  alt="Flower Bouquet"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
            </motion.div>
          </div>

          {/* Features positioned absolutely around the circle */}
          {features.map((feature) => {
            let positionStyles = {};
            switch (feature.position) {
              case "top-left":
                positionStyles = {
                  top: "10%",
                  left: "calc(50% - 480px)", // Shifted right to be closer to the circle
                  textAlign: "right",
                  maxWidth: "440px",
                };
                break;
              case "top-right":
                positionStyles = {
                  top: "10%",
                  left: "calc(50% + 80px)", // Positioned to the right of the circle
                  textAlign: "left",
                  maxWidth: "440px",
                };
                break;
              case "bottom-left":
                positionStyles = {
                  bottom: "10%",
                  left: "calc(50% - 480px)", // Shifted right to be closer to the circle
                  textAlign: "right",
                  maxWidth: "440px",
                };
                break;
              case "bottom-right":
                positionStyles = {
                  bottom: "10%",
                  left: "calc(50% + 80px)", // Positioned to the right of the circle
                  textAlign: "left",
                  maxWidth: "440px",
                };
                break;
              default:
                break;
            }

            return (
              <motion.div
                key={feature.id}
                className="absolute flex flex-col"
                style={positionStyles}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: feature.id * 0.1 },
                  },
                }}
                initial="hidden"
                animate={controls}
              >
                <h3
                  className={`${playfair.className} text-xl font-semibold mb-2`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
