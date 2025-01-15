import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CaseStudies from "./components/CaseStudies";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Work />
      <CaseStudies />
      <Services />
      <Contact />
    </main>
  );
}