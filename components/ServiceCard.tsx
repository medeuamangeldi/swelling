"use client";

import { Service } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Wrench;

  return (
    <Card className="group hover:border-spark-600 hover:shadow-lg hover:shadow-spark-600/20 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-spark-600/10 group-hover:bg-spark-600/20 transition-colors">
            <IconComponent className="w-6 h-6 text-spark-600" />
          </div>
        </div>
        <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
        <CardDescription className="text-steel-300">
          {service.description}
        </CardDescription>
      </CardHeader>
      {service.features && service.features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-steel-300"
              >
                <Icons.Check className="w-4 h-4 mr-2 text-spark-600" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
