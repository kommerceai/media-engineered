import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We help brands grow through strategic content creation and data-driven marketing solutions.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/contact">
                <Button>Get Started</Button>
              </Link>
              <Link href="/work">
                <Button variant="outline">View Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="p-6 cursor-pointer transition-all hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Content Creation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Professional content that engages and converts your target audience.
                  </p>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Includes:</h4>
                  <ul className="text-sm">
                    <li>Social Media Content</li>
                    <li>Blog Posts & Articles</li>
                    <li>Video Production</li>
                    <li>Graphic Design</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="p-6 cursor-pointer transition-all hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Strategy & Growth</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Data-driven strategies to grow your audience and increase engagement.
                  </p>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Includes:</h4>
                  <ul className="text-sm">
                    <li>Market Research</li>
                    <li>Competitor Analysis</li>
                    <li>Growth Planning</li>
                    <li>Performance Tracking</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="p-6 cursor-pointer transition-all hover:shadow-lg">
                  <h3 className="text-2xl font-bold">Community Building</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Build and nurture an engaged community around your brand.
                  </p>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Includes:</h4>
                  <ul className="text-sm">
                    <li>Community Management</li>
                    <li>Engagement Strategies</li>
                    <li>Event Planning</li>
                    <li>Brand Advocacy</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-3xl font-bold">50M+</h3>
              <p className="text-gray-500 dark:text-gray-400">Impressions Generated</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-gray-500 dark:text-gray-400">Active Creators</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-gray-500 dark:text-gray-400">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-gray-500 dark:text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Brand?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                Join our network of successful creators and start growing your audience today.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}