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
    <section className="pb-20 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 rounded-full opacity-20">
        <Image
          src="/images/front.png"
          alt="Decorative flower"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
      <div className="absolute top-20 right-10 w-16 h-16 md:w-20 md:h-20 rounded-full opacity-20">
        <Image
          src="/images/front.png"
          alt="Decorative flower"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2 mb-8 md:mb-16">
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-center`}
          >
            Why Choose Us
            <span
              className={`${playfair.className} block text-sm tracking-wider`}
            >
              your goto flower shop
            </span>
          </h2>
        </div>

        {/* Desktop and Tablet Layout */}
        <div className="hidden md:block">
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            {/* Central image with circular gradient container */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-[50%]"
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
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 lg:w-48 lg:h-48">
                  <Image
                    src="/images/pinkTulips.png"
                    alt="Flower Bouquet"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 144px, 192px"
                  />
                </div>
              </motion.div>
            </div>

            {/* Features positioned around the circle - Responsive */}
            {features.map((feature) => {
              let positionClasses = "";
              let textAlign = "";

              switch (feature.position) {
                case "top-left":
                  positionClasses =
                    "absolute top-8 lg:top-12 right-1/2 mr-8 lg:mr-16";
                  textAlign = "text-right";
                  break;
                case "top-right":
                  positionClasses =
                    "absolute top-8 lg:top-12 left-1/2 ml-8 lg:ml-16";
                  textAlign = "text-left";
                  break;
                case "bottom-left":
                  positionClasses =
                    "absolute bottom-8 lg:bottom-12 right-1/2 mr-8 lg:mr-16";
                  textAlign = "text-right";
                  break;
                case "bottom-right":
                  positionClasses =
                    "absolute bottom-8 lg:bottom-12 left-1/2 ml-8 lg:ml-16";
                  textAlign = "text-left";
                  break;
                default:
                  break;
              }

              return (
                <motion.div
                  key={feature.id}
                  className={`${positionClasses} ${textAlign} w-64 lg:w-80`}
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
                    className={`${playfair.className} text-lg lg:text-xl font-semibold mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Central image */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="relative w-40 h-40 rounded-[50%]"
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
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                <Image
                  src="/images/pinkTulips.png"
                  alt="Flower Bouquet"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </motion.div>
          </div>

          {/* Features in column layout */}
          <div className="space-y-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="text-center px-4"
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
                  className={`${playfair.className} text-lg font-semibold mb-2`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
