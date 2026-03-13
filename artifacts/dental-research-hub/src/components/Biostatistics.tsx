import { motion } from "framer-motion";
import { Calculator, Percent, TrendingUp, ScatterChart, ShieldAlert } from "lucide-react";

export function Biostatistics() {
  const stats = [
    {
      icon: <Calculator />,
      title: "Central Tendency",
      items: [
        { name: "Mean (Average)", desc: "Sum divided by count. Ex: (3+5+4)/3 = 4" },
        { name: "Median", desc: "Middle value when sorted: 2,3,[4],5,6" },
        { name: "Mode", desc: "Most frequent value: 3,[4,4,4],5" }
      ],
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      icon: <ScatterChart />,
      title: "Data Spread",
      items: [
        { name: "Standard Deviation (SD)", desc: "How spread out data is from the mean." },
        { name: "Low SD", desc: "Values are tightly clustered together." },
        { name: "High SD", desc: "Values are widely scattered." }
      ],
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: <ShieldAlert />,
      title: "Significance",
      items: [
        { name: "P-value", desc: "Probability results occurred by random chance." },
        { name: "p < 0.05", desc: "Statistically significant (less than 5% chance it's luck)." },
        { name: "p > 0.05", desc: "Not significant (could just be chance)." }
      ],
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    },
    {
      icon: <TrendingUp />,
      title: "Relationships",
      items: [
        { name: "Correlation", desc: "When two variables change together." },
        { name: "Positive (+)", desc: "More sugar = More cavities." },
        { name: "Negative (-)", desc: "More brushing = Fewer cavities." }
      ],
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    }
  ];

  return (
    <section id="biostatistics" className="py-24 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Biostatistics Made Simple</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Demystifying the numbers behind dental research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
            >
              <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-[50px] ${stat.bg} opacity-50`} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{stat.title}</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {stat.items.map((item, i) => (
                  <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5">
                    <span className={`font-bold block mb-1 ${stat.color}`}>{item.name}</span>
                    <span className="text-white/80 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 glass-card p-6 rounded-xl border-l-4 border-primary text-center">
          <p className="text-white font-medium">
            <span className="text-primary font-bold">Golden Rule:</span> Correlation does not imply causation! Just because two things happen together doesn't mean one causes the other. Only an <span className="font-bold border-b border-primary border-dashed pb-0.5">RCT</span> can prove causation.
          </p>
        </div>
      </div>
    </section>
  );
}
