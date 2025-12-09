"use client";

import { VIDEO_SHOWCASE } from "@/lib/data";
import { VideoCard } from "./VideoCard";
import { Video } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function VideoSection() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-steel-900 to-steel-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spark-600/10 border border-spark-600/30 mb-6">
            <Video className="w-4 h-4 text-spark-600" />
            <span className="text-sm font-medium text-spark-600">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            See Our Craftsmanship in Action
          </h2>
          <p className="text-lg text-steel-300">
            Watch our skilled team deliver precision welding and custom
            fabrication projects.
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
