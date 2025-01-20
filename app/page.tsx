"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Globe2, LayoutGrid, LineChart, Mail, MessageSquare, Star, Users2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Preload images for better performance
    const images = [
      "/images/hero-bg.jpg",
      "/images/feature-1.jpg",
      "/images/feature-2.jpg",
      "/images/feature-3.jpg",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Globe2 className="h-6 w-6" />
          <span className="sr-only">Media Engineered</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-grid-dark opacity-20" />
            <motion.div
              style={{ opacity }}
              className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"
            />
          </div>

          <div className="container relative z-10 py-20 lg:py-32">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
                  >
                    <div className="relative w-12 h-12">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-12 h-12 bg-primary rounded-xl"
                      />
                    </div>
                    <span className="text-xl font-semibold text-foreground">
                      Media Engineered
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur border border-border rounded-full px-4 py-2 mb-8"
                  >
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm text-muted-foreground">
                      Trusted by 1000+ brands
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                  >
                    <span className="text-foreground">Transform Your</span>
                    <br />
                    <span className="text-primary">Digital Presence</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
                  >
                    We help brands grow through strategic content creation and data-driven marketing solutions.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-xl group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Started
                        <motion.div
                          animate={{ x: [-16, 0] }}
                          transition={{
                            duration: 0.3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </motion.div>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </Button>
                    <Link href="/case-studies" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-border text-lg h-14 px-8 hover:bg-muted rounded-xl group"
                      >
                        View Case Studies
                        <div className="relative ml-2">
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border pt-8"
                  >
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-3xl lg:text-5xl font-bold text-foreground"
                      >
                        50M+
                      </motion.h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Organic Impressions
                      </p>
                    </div>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-3xl lg:text-5xl font-bold text-foreground"
                      >
                        1000+
                      </motion.h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Active Creators
                      </p>
                    </div>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-3xl lg:text-5xl font-bold text-foreground"
                      >
                        95%
                      </motion.h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Client Satisfaction
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right Content - Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 relative w-full max-w-xl lg:max-w-none"
                >
                  <div className="relative w-full aspect-square">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"
                    />
                    <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
                      <motion.div
                        animate={{
                          opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-full h-full bg-muted"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Comprehensive solutions to help your brand grow organically and sustainably
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Content Strategy",
                  description: "Data-driven content planning that resonates with your audience",
                },
                {
                  title: "Social Media Management",
                  description: "Engaging content and community management across platforms",
                },
                {
                  title: "Analytics & Insights",
                  description: "Detailed tracking and optimization of your marketing efforts",
                },
              ].map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
              <p className="text-primary-foreground/80 mb-8">
                Join our network of successful creators and start growing your audience today.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Media Engineered. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
