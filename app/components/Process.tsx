'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with understanding your goals, audience, and current challenges.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our team creates a customized growth plan tailored to your needs.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the strategy with continuous optimization and adjustments.'
  },
  {
    number: '04',
    title: 'Growth & Scaling',
    description: 'Monitor results and scale successful strategies for sustained growth.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A proven methodology to help you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-zinc-800 p-6 rounded-lg h-full">
                <span className="text-4xl font-bold text-yellow-300 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-300 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 