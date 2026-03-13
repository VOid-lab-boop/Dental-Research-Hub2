import { motion } from "framer-motion";
import { Database, ExternalLink, CheckCircle2 } from "lucide-react";
import { databases } from "@/lib/data";

export function Databases() {
  return (
    <section id="databases" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Scientific Databases</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where to find the highest quality evidence for dental research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {databases.map((db, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/10 hover:border-blue-500/50"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-24 h-24 text-blue-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{db.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-white/80 font-medium mb-6 h-12">{db.desc}</p>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Used For</span>
                    <span className="text-white/90">{db.usedFor}</span>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider font-semibold mb-1">Sources</span>
                    <span className="text-white/90">{db.sources}</span>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div className="bg-blue-500/10 p-3 rounded-lg flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-blue-400 block text-xs uppercase tracking-wider font-bold mb-1">Best For Dentistry</span>
                      <span className="text-white font-medium">{db.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
