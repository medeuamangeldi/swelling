"use client";

import { VideoShowcase } from "@/lib/data";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";

interface VideoCardProps {
  video: VideoShowcase;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden hover:border-spark-600 hover:shadow-lg hover:shadow-spark-600/20 transition-all duration-300">
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-spark-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{video.title}</h3>
            <ExternalLink className="w-4 h-4 text-spark-600" />
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
