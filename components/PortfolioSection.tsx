"use client";

import { Briefcase } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Structural Steel Welding",
    image: "/images/our-work/structural-steel-welding.jpeg",
    category: "Commercial",
  },
  {
    id: 2,
    title: "Custom Metal Fabrication",
    image: "/images/our-work/custom-metal-fabrication.jpeg",
    category: "Custom Work",
  },
  {
    id: 3,
    title: "Industrial Welding Project",
    image: "/images/our-work/industrial-welding-project.jpeg",
    category: "Industrial",
  },
  {
    id: 4,
    title: "Steel Beam Welding",
    image: "/images/our-work/steel-beam-welding.jpeg",
    category: "Commercial",
  },
  {
    id: 5,
    title: "Pipe Welding Work",
    image: "/images/our-work/pipe-welding-work.jpeg",
    category: "Industrial",
  },
  {
    id: 6,
    title: "Metal Staircase Fabrication",
    image: "/images/our-work/metal-staircase-fabrication.jpeg",
    category: "Custom Work",
  },
  {
    id: 7,
    title: "Handrail Welding",
    image: "/images/our-work/handrail-welding.jpeg",
    category: "Residential",
  },
  {
    id: 8,
    title: "Gate Fabrication",
    image: "/images/our-work/gate-fabrication.jpeg",
    category: "Residential",
  },
  {
    id: 9,
    title: "TIG Welding Aluminum",
    image: "/images/our-work/tig-welding-aluminum.jpeg",
    category: "Custom Work",
  },
  {
    id: 10,
    title: "Truck Frame Repair",
    image: "/images/our-work/truck-frame-repair.jpeg",
    category: "Automotive",
  },
  {
    id: 11,
    title: "Trailer Hitch Welding",
    image: "/images/our-work/trailer-hitch-welding.jpeg",
    category: "Automotive",
  },
  {
    id: 12,
    title: "Exhaust System Fabrication",
    image: "/images/our-work/exhaust-system-fabrication.jpeg",
    category: "Automotive",
  },
  {
    id: 13,
    title: "Roll Cage Welding",
    image: "/images/our-work/roll-cage-welding.jpeg",
    category: "Automotive",
  },
  {
    id: 14,
    title: "Steel Frame Construction",
    image: "/images/our-work/steel-frame-construction.jpeg",
    category: "Commercial",
  },
  {
    id: 15,
    title: "Metal Rack Fabrication",
    image: "/images/our-work/metal-rack-fabrication.jpeg",
    category: "Custom Work",
  },
  {
    id: 16,
    title: "Custom Bracket Welding",
    image: "/images/our-work/custom-bracket-welding.jpeg",
    category: "Custom Work",
  },
  {
    id: 17,
    title: "Precision TIG Work",
    image: "/images/our-work/precision-tig-work.jpeg",
    category: "Custom Work",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-steel-950 to-steel-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-spark-600/10 border border-spark-600/30 mb-4 sm:mb-6">
            <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-spark-600" />
            <span className="text-xs sm:text-sm font-medium text-spark-600">
              Our Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Completed Projects & Portfolio
          </h2>
          <p className="text-base sm:text-lg text-steel-300 px-4">
            Explore our diverse range of welding and fabrication projects across
            residential, commercial, industrial, and automotive sectors.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 1 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-lg bg-steel-900 border border-steel-700 hover:border-spark-600 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-950/90 via-steel-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium text-spark-600 bg-spark-600/10 border border-spark-600/30 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
