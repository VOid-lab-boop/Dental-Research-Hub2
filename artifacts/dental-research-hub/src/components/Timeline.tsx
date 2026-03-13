import { motion } from "framer-motion";
import { Lightbulb, HelpCircle, BookOpen, GitBranch, Users, ClipboardList, BarChart, Search, FileText } from "lucide-react";

export function Timeline() {
  const steps = [
    { icon: <Lightbulb />, title: "Identify a Problem", desc: "Notice an issue in clinical practice." },
    { icon: <HelpCircle />, title: "Ask a Question", desc: "Formulate a specific, focused research question." },
    { icon: <BookOpen />, title: "Review Literature", desc: "Check what is already known about the topic." },
    { icon: <GitBranch />, title: "Choose Study Design", desc: "Select RCT, Cohort, Cross-sectional, etc." },
    { icon: <Users />, title: "Select Sample", desc: "Determine who will participate (and get IRB)." },
    { icon: <ClipboardList />, title: "Collect Data", desc: "Gather measurements, surveys, or clinical records." },
    { icon: <BarChart />, title: "Analyze Data", desc: "Run statistical tests to find p-values." },
    { icon: <Search />, title: "Interpret Findings", desc: "Understand what the numbers mean clinically." },
    { icon: <FileText />, title: "Write & Present", desc: "Share results via journal article or conference." }
  ];

  return (
    <section id="timeline" className="py-24 relative bg-black/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Research Process</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)] mb-6" />
          <p className="text-muted-foreground">A systematic 9-step journey from idea to publication.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className={`relative flex items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-card border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="text-primary w-5 h-5">{step.icon}</div>
                  </div>

                  {/* Content Box */}
                  <div className="ml-20 md:ml-0 md:w-1/2 flex flex-col justify-center px-4 md:px-12">
                    <div className={`glass-card p-6 rounded-2xl glass-card-hover ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-secondary font-bold text-sm uppercase tracking-wider mb-2 block">Step {idx + 1}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
