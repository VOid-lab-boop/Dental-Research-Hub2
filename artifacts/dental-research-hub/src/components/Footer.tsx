import { Microscope } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Microscope className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Research Hub
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Prepared specifically for dental students at the Hashemite University of Jordan. Based on the 6-lecture series by Dr. Lama Rafieh.
            </p>
            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60">
              Third Year | Second Semester
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('lectures')} className="hover:text-primary transition-colors">Lecture Summaries</button></li>
              <li><button onClick={() => scrollToSection('glossary')} className="hover:text-primary transition-colors">Glossary</button></li>
              <li><button onClick={() => scrollToSection('databases')} className="hover:text-primary transition-colors">Databases</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Interactive</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('timeline')} className="hover:text-primary transition-colors">Research Timeline</button></li>
              <li><button onClick={() => scrollToSection('ai-helper')} className="hover:text-primary transition-colors">AI Assistant</button></li>
              <li><button onClick={() => scrollToSection('quiz')} className="hover:text-primary transition-colors">Knowledge Quiz</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Research & Biostatistics Learning Hub. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            Designed for Educational Purposes
          </div>
        </div>
      </div>
    </footer>
  );
}
