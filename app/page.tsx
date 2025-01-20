"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Globe2, LayoutGrid, LineChart, Mail, MessageSquare, Users2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Digital Marketing Strategy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Drive growth with data-driven insights and strategic content creation. Let us help you reach your target audience effectively.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your journey today. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <LayoutGrid className="w-8 h-8" />
                    <h3 className="font-bold">Content Strategy</h3>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Develop comprehensive content strategies that align with your business goals.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <LineChart className="w-8 h-8" />
                    <h3 className="font-bold">Analytics & Insights</h3>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Make data-driven decisions with our advanced analytics and reporting.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Users2 className="w-8 h-8" />
                    <h3 className="font-bold">Social Media</h3>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Engage your audience across all major social media platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-4 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We combine industry expertise with data-driven insights to deliver exceptional results.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Customized strategies for your business</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>Dedicated support team</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-h-[300px] rounded-xl border bg-gray-100 p-8 dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-8 h-8" />
                  <h3 className="font-bold">Get in Touch</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ready to transform your digital presence? Contact us today.
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <Button className="w-full">
                    Schedule a Call
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </div>
              </div>
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
