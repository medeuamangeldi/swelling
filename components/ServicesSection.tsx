"use client";

import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";
import { Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden min-h-screen"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.webp"
          alt="Welding services background"
          fill
          className="object-cover object-center brightness-[0.15]"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/90 via-steel-950/80 to-steel-950/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-spark-600/10 border border-spark-600/30 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-spark-600" />
            <span className="text-xs sm:text-sm font-medium text-spark-600">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Comprehensive Welding & Fabrication Services
          </h2>
          <p className="text-base sm:text-lg text-steel-300 px-4">
            From precision TIG welding to large-scale manufacturing, we handle
            projects of all sizes with expert craftsmanship and cutting-edge
            techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 1 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Special Notes */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="glass-effect rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Special Capabilities
            </h3>
            <ul className="space-y-3 text-steel-300">
              <li className="flex items-start">
                <span className="text-spark-600 mr-2">•</span>
                <span>
                  <strong className="text-white">Large Volume Orders:</strong>{" "}
                  Equipped to handle manufacturing and high-volume production
                  runs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-spark-600 mr-2">•</span>
                <span>
                  <strong className="text-white">General Contractors:</strong>{" "}
                  Experienced working with GCs on commercial projects
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-spark-600 mr-2">•</span>
                <span>
                  <strong className="text-white">Engineering Drawings:</strong>{" "}
                  Follow architectural/engineering specifications precisely
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-spark-600 mr-2">•</span>
                <span>
                  <strong className="text-white">AutoCAD Design:</strong> Create
                  detailed drawings of any complexity for your projects
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-spark-600 mr-2">•</span>
                <span>
                  <strong className="text-white">Laser Cutting:</strong>{" "}
                  Currently not available on-site, but we can coordinate and
                  manage laser cutting projects for you
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
