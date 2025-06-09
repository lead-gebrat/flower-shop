"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show confirmation and clear form
    setShowConfirmation(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);

    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
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
      <div className="container mx-auto px-4">
        <h2 className={`font-serif  text-4xl md:text-5xl text-center `}>
          Contact Us
          <span className="text-sm  text-center block tracking-widest">
            We'd love to hear from you
          </span>
        </h2>

        <div className="flex p-10 lg:flex-row flex-col  justify-center items-start gap-4 max-w-7xl mx-auto">
          {/* Contact Form - Made Wider */}
          <div className="w-full flex flex-col items-end justify-end mx-auto relative">
            {/* Success Message */}
            {showConfirmation && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Message sent successfully!</span>
              </motion.div>
            )}

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="relative w-full lg:w-[80%]  bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 shadow-xl border border-gray-200"
            >
              {/* Decorative Flowers - Inside form, above name and email */}

              <div className="absolute top-1 left-0 w-16 h-16  ">
                <Image
                  src="/images/front2.png"
                  alt="Decorative flower"
                  width={74}
                  height={74}
                  className="object-contain pr-4"
                />
              </div>

              <div
                className="absolute bottom-1 right-0 w-16 h-16 "
                style={{ animationDelay: "1s" }}
              >
                <Image
                  src="/images/front2.png"
                  alt="Decorative flower"
                  width={74}
                  height={74}
                  className="object-contain pl-4"
                />
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2 text-sm"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 text-sm"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2 text-sm"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2 text-sm"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-purple-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              {/* Submit Button - Made Smaller */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium px-8 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className=" w-full lg:w-[60%]">
            <div className="bg-white  p-6 ">
              <h3 className={`font-sans text-xl font-bold mb-6 text-gray-800`}>
                Contact Information
              </h3>

              <div className="flex flex-col gap-8 justify-between">
                <div className="flex items-center group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="h-6 w-6 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Address</p>
                    <p className="text-gray-600 text-sm">
                      Bole Atlas, Garden Center
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="h-6 w-6 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Phone</p>
                    <p className="text-gray-600 text-sm">(+251) 941139289</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg
                      className="h-6 w-6 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <p className="text-gray-600 text-sm">
                      centerGarden@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Business Hours:</strong>
                  <br />
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
