"use client";

import { VideoShowcase } from "@/lib/data";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useState } from "react";

interface VideoCardProps {
  video: VideoShowcase;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="group overflow-hidden hover:border-spark-600 hover:shadow-lg hover:shadow-spark-600/20 transition-all duration-300 h-full">
        <div className="relative aspect-video overflow-hidden bg-black">
          {!isPlaying ? (
            <>
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="w-16 h-16 rounded-full bg-spark-600/90 flex items-center justify-center group-hover:scale-110 transition-transform hover:bg-spark-600 focus:outline-none focus:ring-2 focus:ring-spark-600 focus:ring-offset-2"
                  aria-label={`Play ${video.title}`}
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </button>
              </div>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              src={video.url}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-white">{video.title}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
