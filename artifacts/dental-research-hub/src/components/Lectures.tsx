import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookMarked, Lightbulb, Stethoscope, AlertCircle } from "lucide-react";
import { lectures } from "@/lib/data";

export function Lectures() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="lectures" className="py-24 relative bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Lecture Summaries</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>

        <div className="space-y-4">
          {lectures.map((lec, idx) => (
            <motion.div
              key={lec.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                openIndex === idx ? "border-primary/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]" : "border-white/5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-display font-extrabold text-white/20">0{lec.id}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{lec.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 border-t border-white/5 space-y-8 bg-black/20">
                      
                      <div>
                        <h4 className="text-primary font-semibold mb-2 flex items-center gap-2 uppercase tracking-wider text-sm">
                          <BookMarked className="w-4 h-4" /> Summary
                        </h4>
                        <p className="text-white/80 leading-relaxed">{lec.summary}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-secondary font-semibold mb-3 flex items-center gap-2 uppercase tracking-wider text-sm">
                            <Lightbulb className="w-4 h-4" /> Key Points
                          </h4>
                          <ul className="space-y-2">
                            {lec.keyPoints.map((point, i) => (
                              <li key={i} className="flex gap-2 text-white/70 text-sm">
                                <span className="text-secondary mt-0.5">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-blue-400 font-semibold mb-3 uppercase tracking-wider text-sm">
                            Important Terms
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {lec.terms.map((term, i) => (
                              <div key={i} className="group relative">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80 cursor-help hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors inline-block">
                                  {term.term}
                                </span>
                                {/* Simple pure CSS tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-xs text-white rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 text-center border border-white/10">
                                  {term.def}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 relative overflow-hidden">
                        <Stethoscope className="absolute -right-4 -bottom-4 w-24 h-24 text-primary/10" />
                        <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                          Clinical Dental Example
                        </h4>
                        <p className="text-white/90 text-sm relative z-10 italic">
                          "{lec.example}"
                        </p>
                      </div>

                      <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border-l-2 border-secondary">
                        <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white text-sm block mb-1">What to Remember:</span>
                          <span className="text-muted-foreground text-sm">{lec.remember}</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
