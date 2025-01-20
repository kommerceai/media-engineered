"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" key="homepage-v4">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background overflow-hidden"
      >
        <motion.div
          variants={fadeIn}
          className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 opacity-5 pointer-events-none"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-full w-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
            />
          ))}
        </motion.div>
        <div className="container relative px-4 md:px-6">
          <motion.div
            variants={stagger}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <motion.div variants={fadeIn} className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-200">
                Transform Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We help brands grow through strategic content creation and
                data-driven marketing solutions.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 sm:space-x-4"
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="group">
                  View Our Work
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Content Creation",
                description:
                  "Professional content that engages and converts your target audience.",
                features: [
                  "Social Media Content",
                  "Blog Posts & Articles",
                  "Video Production",
                  "Graphic Design",
                ],
              },
              {
                title: "Strategy & Growth",
                description:
                  "Data-driven strategies to grow your audience and increase engagement.",
                features: [
                  "Market Research",
                  "Competitor Analysis",
                  "Growth Planning",
                  "Performance Tracking",
                ],
              },
              {
                title: "Community Building",
                description:
                  "Build and nurture an engaged community around your brand.",
                features: [
                  "Community Management",
                  "Engagement Strategies",
                  "Event Planning",
                  "Brand Advocacy",
                ],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <Card className="p-6 cursor-pointer transition-all hover:shadow-lg hover:scale-105">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        {service.description}
                      </p>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Includes:</h4>
                      <ul className="text-sm space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={stagger}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { value: "50M+", label: "Impressions Generated" },
              { value: "1000+", label: "Active Creators" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <motion.h3
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold text-primary"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full py-12 md:py-24 lg:py-32 bg-primary relative overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-primary-foreground/10 to-transparent rounded-full blur-3xl"
        />
        <div className="container relative px-4 md:px-6">
          <motion.div
            variants={stagger}
            className="flex flex-col items-center space-y-4 text-center text-white"
          >
            <motion.div variants={fadeIn} className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Brand?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join our network of successful creators and start growing your
                audience today.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
