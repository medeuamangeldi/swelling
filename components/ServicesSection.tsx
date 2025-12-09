"use client";

import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ServiceCard";
import { Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Welding services background"
          fill
          className="object-cover brightness-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/90 via-steel-950/80 to-steel-950/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spark-600/10 border border-spark-600/30 mb-6">
            <Zap className="w-4 h-4 text-spark-600" />
            <span className="text-sm font-medium text-spark-600">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Welding & Fabrication Services
          </h2>
          <p className="text-lg text-steel-300">
            From precision TIG welding to large-scale manufacturing, we handle
            projects of all sizes with expert craftsmanship and cutting-edge
            techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
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
