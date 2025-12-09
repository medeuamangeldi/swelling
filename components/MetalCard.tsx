"use client";

import { Metal } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface MetalCardProps {
  metal: Metal;
}

export function MetalCard({ metal }: MetalCardProps) {
  const IconComponent = (Icons as any)[metal.icon] || Icons.Box;

  return (
    <motion.div variants={fadeInUp}>
      <Card className="group hover:border-spark-600 hover:shadow-lg hover:shadow-spark-600/20 transition-all duration-300 text-center h-full">
      <CardHeader className="items-center">
        <div className="p-4 rounded-full bg-steel-800/50 group-hover:bg-spark-600/10 transition-colors mb-4">
          <IconComponent className="w-8 h-8 text-spark-600" />
        </div>
        <CardTitle className="text-lg">{metal.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-steel-300 text-sm">
          {metal.description}
        </CardDescription>
      </CardContent>
    </Card>
    </motion.div>
  );
}
