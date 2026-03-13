import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Academic Background"
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Hashemite University of Jordan</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Research & Biostatistics <br className="hidden md:block" />
            <span className="text-gradient-primary">Learning Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl font-light">
            An interactive summary of 6 lectures for dental students.
          </p>
          
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-3xl leading-relaxed">
            Research is the backbone of modern dentistry. Understanding evidence-based practice empowers dental students to critically evaluate treatments, contribute to scientific progress, and deliver the highest quality patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => scrollToSection('lectures')}
              className="px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Lectures
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('ai-helper')}
              className="px-8 py-4 rounded-xl font-bold glass-card hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              Try AI Helper
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
