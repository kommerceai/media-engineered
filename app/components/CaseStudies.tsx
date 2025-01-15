"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Metric = {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  subtext?: string;
};

type CaseStudy = {
  title: string;
  description: string;
  industry: string;
  metrics: Metric[];
  duration: string;
  tags: string[];
  challenges?: string[];
  strategies?: string[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Scaling Skool Launch Program",
    description:
      "Helped Christian Crenshaw, founder of CommunityLaunch.com and partner at SocialMize, scale his Skool Launch program through optimized advertising and community engagement.",
    industry: "Education & Community",
    metrics: [
      {
        label: "Revenue Generated",
        value: "97",
        suffix: "K+",
        subtext: "in one reporting period",
      },
      {
        label: "Premium Members",
        value: "143",
        suffix: "",
        subtext: "$997/month mastermind",
      },
      {
        label: "Community Growth",
        value: "4.9",
        suffix: "K+",
        subtext: "active members",
      },
      {
        label: "Ad Cost Reduction",
        value: "500",
        prefix: "-$",
        suffix: "",
        subtext: "wasted spend eliminated",
      },
      {
        label: "Click-Through Rate",
        value: "3.11",
        suffix: "%",
        subtext: "campaign average",
      },
      {
        label: "Cost per Click",
        value: "0.29",
        prefix: "$",
        subtext: "optimized campaigns",
      },
    ],
    duration: "Since February 2024",
    tags: [
      "Community Building",
      "Facebook Ads",
      "Instagram Ads",
      "Funnel Optimization",
    ],
    challenges: [
      "Establishing strong market presence",
      "Optimizing campaign performance",
      "Scaling monthly recurring revenue",
    ],
    strategies: [
      "Targeted social media advertising",
      "Community engagement optimization",
      "Data-driven campaign adjustments",
      "Sales funnel optimization",
    ],
  },
  {
    title: "E-commerce Revenue Growth",
    description:
      "Helped an online retailer increase their revenue through targeted social media campaigns and content optimization.",
    industry: "E-commerce",
    metrics: [
      {
        label: "Revenue Increase",
        value: "156",
        suffix: "%",
        subtext: "year-over-year growth",
      },
      {
        label: "Social Engagement",
        value: "3.2",
        suffix: "x",
        subtext: "increase in interactions",
      },
      {
        label: "Conversion Rate",
        value: "4.8",
        suffix: "%",
        subtext: "from social traffic",
      },
    ],
    duration: "6 months",
    tags: ["Social Media", "Content Marketing", "SEO"],
  },
  {
    title: "B2B Lead Generation",
    description:
      "Developed a comprehensive lead generation strategy for a B2B software company.",
    industry: "Technology",
    metrics: [
      {
        label: "Qualified Leads",
        value: "250",
        suffix: "+",
        subtext: "sales-ready leads",
      },
      {
        label: "Cost per Lead",
        value: "42",
        prefix: "-",
        suffix: "%",
        subtext: "reduction in CAC",
      },
      {
        label: "Sales Pipeline",
        value: "2.1",
        suffix: "M",
        subtext: "potential revenue",
      },
    ],
    duration: "8 months",
    tags: ["Lead Generation", "Content Marketing", "Marketing Automation"],
  },
];

const allTags = Array.from(new Set(caseStudies.flatMap((study) => study.tags)));
const allIndustries = Array.from(
  new Set(caseStudies.map((study) => study.industry))
);

export default function CaseStudies() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => study.tags.includes(tag));
    const matchesIndustry =
      !selectedIndustry || study.industry === selectedIndustry;
    return matchesTags && matchesIndustry;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section id="case-studies" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Filter by Industry</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedIndustry === "" ? "default" : "outline"}
                onClick={() => setSelectedIndustry("")}
                className="text-sm"
              >
                All
              </Button>
              {allIndustries.map((industry) => (
                <Button
                  key={industry}
                  variant={
                    selectedIndustry === industry ? "default" : "outline"
                  }
                  onClick={() => setSelectedIndustry(industry)}
                  className="text-sm"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Filter by Service</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  onClick={() => toggleTag(tag)}
                  className="text-sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {study.industry} • {study.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {study.description}
                </p>

                {study.challenges && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Challenges</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {study.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold">
                        {metric.prefix}
                        {metric.value}
                        {metric.suffix}
                      </p>
                      {metric.subtext && (
                        <p className="text-xs text-muted-foreground">
                          {metric.subtext}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {study.strategies && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Strategies</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {study.strategies.map((strategy, idx) => (
                        <li key={idx}>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
