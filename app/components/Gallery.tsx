import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Gallery() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              variants={item}
              className="aspect-[9/16] relative bg-gray-100 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <Image
                src={`/placeholder-${index + 1}.jpg`}
                alt={`Creator ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 