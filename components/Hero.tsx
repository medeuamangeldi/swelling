"use client";

import { Button } from "./ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565044586706-0b8d85138597?q=80&w=2070&auto=format&fit=crop"
          alt="Professional welding services"
          fill
          className="object-cover brightness-[0.3]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/80 via-steel-950/60 to-steel-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-spark-600/20 border border-spark-600/50 backdrop-blur-sm mb-8">
            <Clock className="w-4 h-4 text-spark-600" />
            <span className="text-sm font-medium text-white">
              Same-Day Mobile Welding Available
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">O&S Welding</span>
            <span className="block text-spark-600">Fabrication LLC</span>
          </h1>

          <p className="text-xl md:text-2xl text-steel-200 mb-8 max-w-3xl mx-auto">
            Professional Welding, Custom Fabrication & Manufacturing Services in
            Chicago
          </p>

          <p className="text-lg text-steel-300 mb-12 max-w-2xl mx-auto">
            Licensed & insured experts offering 10+ welding processes, mobile
            services, AutoCAD design, and high-volume manufacturing for
            residential, commercial, and industrial projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="xl"
              className="w-full sm:w-auto spark-glow font-semibold"
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
              className="w-full sm:w-auto font-semibold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Free Quote
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-effect rounded-lg p-4">
              <div className="text-spark-600 font-bold text-2xl mb-1">10+</div>
              <div className="text-steel-300 text-sm">Welding Processes</div>
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
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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
      </div>
    </section>
  );
}
