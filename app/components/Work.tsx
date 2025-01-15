"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Transform Your Marketing",
    description: "Marketing analytics dashboard with proactive insights",
    image:
      "https://placehold.co/600x400/2563eb/ffffff?text=Marketing+Dashboard",
  },
  {
    title: "Generate AI Content",
    description: "AI-powered content generation platform",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=AI+Platform",
  },
  {
    title: "Web Apps that Make Sense",
    description: "Intuitive web applications with modern UX",
    image: "https://placehold.co/600x400/0891b2/ffffff?text=Web+Apps",
  },
  {
    title: "Revolutionize Analytics",
    description: "Next-generation analytics platform",
    image: "https://placehold.co/600x400/0d9488/ffffff?text=Analytics",
  },
];

export default function Work() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 hover:text-primary transition-colors duration-300">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
