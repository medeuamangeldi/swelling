"use client";

import { WHY_CHOOSE_US } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import * as Icons from "lucide-react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewport } from "@/lib/animations";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
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
            <Award className="w-4 h-4 text-spark-600" />
            <span className="text-sm font-medium text-spark-600">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Trusted Welding Partner
          </h2>
          <p className="text-lg text-steel-300">
            With decades of combined experience and state-of-the-art equipment,
            we deliver excellence on every project.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.Check;
            return (
              <motion.div key={item.id} variants={fadeInUp}>
                <Card className="group hover:border-spark-600 hover:shadow-lg hover:shadow-spark-600/20 transition-all duration-300 text-center h-full">
                  <CardHeader className="items-center pb-4">
                    <div className="p-4 rounded-full bg-spark-600/10 group-hover:bg-spark-600/20 transition-colors mb-4">
                      <IconComponent className="w-8 h-8 text-spark-600" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
