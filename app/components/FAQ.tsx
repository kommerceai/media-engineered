'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How long does it take to see results?',
    answer: 'While results can vary based on your starting point and goals, most clients see significant improvements in engagement and growth within the first 2-3 months of implementing our strategies.'
  },
  {
    question: 'What platforms do you specialize in?',
    answer: 'We specialize in all major social media platforms including Instagram, TikTok, YouTube, and Twitter. Our strategies are tailored to maximize your presence on the platforms most relevant to your audience.'
  },
  {
    question: 'Do you offer customized packages?',
    answer: 'Yes! We understand that every creator is unique. We offer customized packages based on your specific needs, goals, and budget. Schedule a discovery call to discuss your requirements.'
  },
  {
    question: 'How do you measure success?',
    answer: 'We track various metrics including engagement rates, follower growth, reach, and conversion rates. We provide detailed monthly reports and adjust strategies based on the data.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Get answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-zinc-800 rounded-lg text-left hover:bg-zinc-700 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <FiChevronDown
                  className={`text-yellow-300 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-zinc-800 rounded-b-lg mt-px"
                >
                  <p className="text-zinc-400">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 