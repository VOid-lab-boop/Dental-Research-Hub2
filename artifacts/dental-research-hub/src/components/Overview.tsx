import { motion } from "framer-motion";
import { BookOpen, Brain, FlaskConical, LayoutGrid } from "lucide-react";
import { lectures } from "@/lib/data";

export function Overview() {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Evidence-Based Practice",
      desc: "Apply the latest and strongest scientific evidence directly to your patient care decisions."
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-secondary" />,
      title: "Critical Thinking",
      desc: "Learn to read, evaluate, and extract true value from complex academic journals."
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-400" />,
      title: "Scientific Contribution",
      desc: "Move from being just a consumer of knowledge to becoming a creator of new discoveries."
    }
  ];

  return (
    <section id="overview" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Research Matters</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dentistry is constantly evolving. Mastering research methodology is not just about passing an exam—it's about becoming a competent, adaptable clinician.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl glass-card-hover group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-muted-foreground">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="text-primary" />
              Course Map: 6 Lectures
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lectures.map((lec, idx) => (
                <div key={lec.id} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold font-display border border-primary/30">
                    {lec.id}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/90 leading-tight mb-1">{lec.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{lec.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
