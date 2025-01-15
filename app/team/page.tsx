"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Kendall Shaw",
    role: "CEO & Founder",
    bio: "Visionary leader with expertise in organic marketing and community building.",
    image: "/team/kendall.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Zoe S",
    role: "Marketing Strategist",
    bio: "Expert in developing and executing comprehensive marketing strategies.",
    image: "/team/zoe.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Hassan Jordan",
    role: "Growth Specialist",
    bio: "Specializes in scaling businesses through data-driven marketing approaches.",
    image: "/team/hassan.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vanessa Centeno",
    role: "Content Director",
    bio: "Creative mind behind our content strategies and brand storytelling.",
    image: "/team/vanessa.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Abby",
    role: "Community Manager",
    bio: "Building and nurturing engaged communities across platforms.",
    image: "/team/abby.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Khalid",
    role: "Technical Lead",
    bio: "Driving technical innovation and platform optimization.",
    image: "/team/khalid.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Donald",
    role: "Operations Manager",
    bio: "Ensuring smooth execution of marketing campaigns and client projects.",
    image: "/team/donald.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse group of experts dedicated to helping brands grow
            organically through innovative marketing strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{member.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
