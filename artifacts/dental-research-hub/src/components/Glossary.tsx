import { useState } from "react";
import { Search, Book } from "lucide-react";
import { glossary } from "@/lib/data";

export function Glossary() {
  const [search, setSearch] = useState("");

  const filteredTerms = glossary.filter(g => 
    g.term.toLowerCase().includes(search.toLowerCase()) || 
    g.def.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="glossary" className="py-24 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Glossary of Terms</h2>
            <div className="w-20 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search terms or definitions..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl glass-card border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-2xl">
            <Book className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">No terms found</h3>
            <p className="text-muted-foreground">Try adjusting your search keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors group"
              >
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.term}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.def}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
