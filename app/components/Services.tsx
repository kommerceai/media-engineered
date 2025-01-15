"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Check,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Data-Driven Strategy",
    description: "Strategic planning backed by analytics and market insights.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Community Building",
    description: "Foster engaged communities that drive organic growth.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Content Creation",
    description: "Compelling content that resonates with your target audience.",
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Campaign Optimization",
    description: "Continuous improvement of campaign performance.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Growth Analytics",
    description: "Detailed tracking and reporting of key metrics.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Performance Marketing",
    description: "Results-driven approach to digital marketing.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "2,997",
    description: "Perfect for businesses just starting their growth journey.",
    features: [
      "Social Media Management",
      "Basic Content Creation",
      "Monthly Performance Reports",
      "Community Management",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "4,997",
    description: "Ideal for businesses ready to scale their online presence.",
    features: [
      "Everything in Starter",
      "Advanced Content Strategy",
      "Influencer Collaborations",
      "Weekly Strategy Calls",
      "Priority Support",
      "Custom Analytics Dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Comprehensive solution for established brands.",
    features: [
      "Everything in Growth",
      "Dedicated Account Manager",
      "Custom Strategy Development",
      "24/7 Priority Support",
      "Advanced Analytics",
      "Brand Partnership Opportunities",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions to help your brand grow
            organically and sustainably.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${tier.popular ? "border-primary shadow-lg" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full group relative overflow-hidden"
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    {tier.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/5 to-primary-foreground/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
