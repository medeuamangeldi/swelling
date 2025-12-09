"use client";

import { METALS } from "@/lib/data";
import { MetalCard } from "./MetalCard";
import { Layers } from "lucide-react";

export function MetalsSection() {
  return (
    <section id="metals" className="py-20 bg-steel-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Metals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {METALS.map((metal) => (
            <MetalCard key={metal.id} metal={metal} />
          ))}
        </div>
      </div>
    </section>
  );
}
