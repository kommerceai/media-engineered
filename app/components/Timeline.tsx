interface TimelineItem {
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Discovery Call",
    description: "We'll discuss your goals and current social media presence",
  },
  {
    title: "Strategy Development",
    description: "Our team creates a customized growth plan for your brand",
  },
  {
    title: "Implementation",
    description: "We execute the strategy with regular optimization",
  },
  {
    title: "Growth & Scaling",
    description: "Monitor results and scale successful strategies",
  },
];

export default function Timeline() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative border-l border-gray-700 pl-8 space-y-12">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 w-4 h-4 bg-yellow-300 rounded-full" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
