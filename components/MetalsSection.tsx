"use client";

import { METALS } from "@/lib/data";
import { MetalCard } from "./MetalCard";
import { Layers } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function MetalsSection() {
  return (
    <section id="metals" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/metals-bg.jpg"
          alt="Metal materials background"
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
            <Layers className="w-4 h-4 text-spark-600" />
            <span className="text-sm font-medium text-spark-600">
              Materials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Metals We Work With
          </h2>
          <p className="text-lg text-steel-300">
            Expert welding and fabrication services for a wide range of metals
            and alloys.
          </p>
        </motion.div>

        {/* Metals Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {METALS.map((metal) => (
            <MetalCard key={metal.id} metal={metal} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
