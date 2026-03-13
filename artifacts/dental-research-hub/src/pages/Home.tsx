import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Lectures } from "@/components/Lectures";
import { Glossary } from "@/components/Glossary";
import { Timeline } from "@/components/Timeline";
import { Databases } from "@/components/Databases";
import { Biostatistics } from "@/components/Biostatistics";
import { AIHelper } from "@/components/AIHelper";
import { Quiz } from "@/components/Quiz";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Overview />
        <Lectures />
        <Glossary />
        <Timeline />
        <Databases />
        <Biostatistics />
        <AIHelper />
        <Quiz />
      </main>

      <Footer />
    </div>
  );
}
