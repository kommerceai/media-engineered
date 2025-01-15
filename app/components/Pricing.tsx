import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: "Starter",
    price: "999",
    description: "Perfect for emerging creators",
    features: [
      "Social media audit",
      "Content strategy",
      "Weekly analytics",
      "Basic support",
    ],
  },
  {
    name: "Growth",
    price: "1,999",
    description: "For serious content creators",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Content calendar",
      "24/7 priority support",
      "Monthly strategy calls",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "4,999",
    description: "For professional influencers",
    features: [
      "Everything in Growth",
      "Personal brand manager",
      "Custom strategy",
      "Brand partnership consulting",
      "Unlimited revisions",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, transparent <span className="bg-yellow-300 px-2">pricing</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your growth
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-lg p-8 ${
                plan.highlighted 
                  ? 'bg-black text-white ring-2 ring-yellow-300' 
                  : 'bg-zinc-50'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-600'}>
                  /month
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                    : 'bg-black text-white hover:bg-zinc-800'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 