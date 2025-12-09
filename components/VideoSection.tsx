"use client";

import { VIDEO_SHOWCASE } from "@/lib/data";
import { VideoCard } from "./VideoCard";
import { Video } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function VideoSection() {
  return (
    <section
      id="process"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-steel-900 to-steel-950"
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
            <Video className="w-3 h-3 sm:w-4 sm:h-4 text-spark-600" />
            <span className="text-xs sm:text-sm font-medium text-spark-600">
              Work Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Welding & Fabrication in Action
          </h2>
          <p className="text-base sm:text-lg text-steel-300 px-4">
            Watch professional welding techniques and custom fabrication
            processes.
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {VIDEO_SHOWCASE.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
