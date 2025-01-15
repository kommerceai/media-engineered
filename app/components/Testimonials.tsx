"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "/images/testimonial-1.jpg",
    quote:
      "Working with this team has transformed my online presence. My audience engagement has increased by 300% in just 3 months!",
  },
  {
    name: "Mike Chen",
    role: "YouTuber",
    image: "/images/testimonial-2.jpg",
    quote:
      "Their strategic approach to content creation and community building helped me reach 1 million subscribers.",
  },
  {
    name: "Emma Davis",
    role: "Social Media Influencer",
    image: "/images/testimonial-3.jpg",
    quote:
      "The insights and strategies provided were game-changing. I now have a clear roadmap for growing my brand.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            See what our clients have to say about their experience working with
            us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-zinc-300 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
