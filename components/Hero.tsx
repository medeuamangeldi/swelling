"use client";

import { Button } from "./ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-welding.webp"
          alt="Professional welding services"
          fill
          className="object-cover object-center brightness-[0.3]"
          style={{ objectPosition: "center center" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/80 via-steel-950/60 to-steel-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-20 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-spark-600/20 border border-spark-600/50 backdrop-blur-sm mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-spark-600" />
            <span className="text-xs sm:text-sm font-medium text-white">
              Same-Day Mobile Welding Available
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">O&S Welding</span>
            <span className="block text-spark-600">Fabrication LLC</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-steel-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Professional Welding, Custom Fabrication & Manufacturing Services in
            Chicago
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-steel-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Licensed & insured experts offering 10+ welding processes, mobile
            services, AutoCAD design, and high-volume manufacturing for
            residential, commercial, and industrial projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button
              size="xl"
              className="w-full sm:w-auto spark-glow font-semibold text-sm sm:text-base"
              onClick={() =>
                (window.location.href = `tel:${CONTACT_INFO.phones.ory}`)
              }
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {CONTACT_INFO.phones.ory}
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="w-full sm:w-auto font-semibold text-sm sm:text-base"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get a Free Quote
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="glass-effect rounded-lg p-4">
              <div className="text-spark-600 font-bold text-2xl mb-1">10+</div>
              <div className="text-steel-300 text-sm">Years Experience</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-spark-600 font-bold text-2xl mb-1">
                Same Day
              </div>
              <div className="text-steel-300 text-sm">Emergency Service</div>
            </div>
            <div className="glass-effect rounded-lg p-4">
              <div className="text-spark-600 font-bold text-2xl mb-1">
                Licensed
              </div>
              <div className="text-steel-300 text-sm">& Fully Insured</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-spark-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
