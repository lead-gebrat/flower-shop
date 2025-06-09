"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
const events = [
  {
    id: 1,
    title: "Weddings",
    description:
      "Transform your wedding day into a breathtaking celebration with our bespoke floral arrangements. Our expert team designs stunning centerpieces, bouquets, and venue decorations, tailored to your unique theme and color palette. From romantic arches to elegant table settings, we ensure every detail reflects your vision, creating an unforgettable atmosphere for your special day.",
    image: "/images/weddings.jpg",
  },
  {
    id: 2,
    title: "Valentine's Day",
    description:
      "Celebrate love with our enchanting Valentine's Day floral designs. We craft romantic arrangements featuring vibrant roses, delicate lilies, and other seasonal blooms to set the perfect mood. Whether it's an intimate dinner or a grand gesture, our custom displays add a touch of elegance and passion to make your Valentine's Day truly memorable.",
    image: "/images/valentines.jpg",
  },
  {
    id: 3,
    title: "Proposals",
    description:
      "Make your proposal moment magical with our custom floral setups. From rose-petal pathways to heart-shaped arrangements, we create stunning backdrops that capture the essence of your love story. Our team works closely with you to design a personalized setting that ensures your proposal is as unforgettable as your commitment.",
    image: "/images/proposal.webp",
  },
  {
    id: 4,
    title: "Bridal Showers",
    description:
      "Elevate your bridal shower with our charming floral decorations. We design whimsical arrangements and vibrant displays to complement the joy of the occasion. From elegant centerpieces to floral backdrops for photos, our creations add a festive and personalized touch, making the bride-to-be’s celebration a beautiful and memorable event.",
    image: "/images/bridal.webp",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    event: "",
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsDialogOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        address: "",
        event: "",
        date: "",
        time: "",
      });
    }, 2000);
  };

  return (
    <section className="relative pb-20 pt-10 bg-gray-50" ref={ref}>
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
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-serif">
          Events We Decorate
          <span
            className={`${playfair.className} text-sm tracking-wide block text-center`}
          >
            For your special occasions
          </span>
        </h2>

        <div className="space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
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
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  Book
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600 mb-4">
                  Booking Successful!
                </h3>
                <p className="text-gray-600">
                  Your event has been booked. We will contact you soon!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">Book Your Event</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Event
                    </label>
                    <select
                      name="event"
                      value={formData.event}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select an event</option>
                      {events.map((event) => (
                        <option key={event.id} value={event.title}>
                          {event.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
