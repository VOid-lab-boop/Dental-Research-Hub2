import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIHelper() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Research Assistant. I'm here to help you understand research methodology, biostatistics, and scientific databases. What would you like to learn about today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('pubmed')) return "PubMed is a free database maintained by the US National Library of Medicine containing millions of biomedical literature citations. It's one of the most important tools for dental research, especially for finding clinical studies, systematic reviews, and evidence-based guidelines.";
    if (lower.includes('hypothesis')) return "A hypothesis is a testable prediction about the relationship between variables. In research, you start with a hypothesis and then design a study to test it. For example: 'Patients using electric toothbrushes will have significantly less plaque than those using manual toothbrushes.' The null hypothesis (H0) always predicts no difference.";
    if (lower.includes('rct') || lower.includes('randomized') || lower.includes('trial')) return "A Randomized Controlled Trial (RCT) is the gold standard of clinical research. Participants are randomly assigned to either the experimental group (receives the treatment) or the control group (receives placebo or standard care). Randomization prevents bias and allows us to establish true cause-and-effect relationships.";
    if (lower.includes('p-value') || lower.includes('p value') || lower.includes('significance')) return "The p-value tells you the probability that your results occurred by random chance. If p < 0.05, we say the result is statistically significant — meaning there's less than a 5% chance it's just luck. If p > 0.05, the result is not statistically significant.";
    if (lower.includes('qualitative') || lower.includes('quantitative')) return "Quantitative research uses numbers and statistics to answer 'how many?' or 'how much?' questions. Qualitative research explores 'why?' and 'how?' using interviews and observations. Mixed methods combines both for a fuller picture.";
    if (lower.includes('cohort')) return "A cohort study follows a group of people over time to see how exposures affect outcomes. For example, following 500 dental students for 5 years to see if those who snack frequently develop more cavities. It's great for understanding causation but takes a long time.";
    if (lower.includes('case control') || lower.includes('case-control')) return "A case-control study looks backward (retrospectively). You start with people who HAVE the disease (cases) and compare them to people who DON'T (controls), then look back at their risk factors. Example: Compare smoking history of patients with oral cancer vs. patients without.";
    if (lower.includes('cross sectional') || lower.includes('cross-sectional')) return "A cross-sectional study is like a snapshot — it collects data at one point in time. Example: Survey all dental students today about their brushing habits. It's quick and cheap but can't prove cause and effect.";
    if (lower.includes('mean') || lower.includes('median') || lower.includes('mode') || lower.includes('average')) return "These are measures of central tendency: Mean = Average (add all values, divide by count). Median = Middle value when sorted. Mode = Most frequent value.";
    if (lower.includes('standard deviation') || lower.includes('sd')) return "Standard deviation measures how spread out your data is from the mean. Low SD means values are clustered close together. High SD means values are widely spread.";
    if (lower.includes('scopus')) return "Scopus is Elsevier's large abstract and citation database covering peer-reviewed literature across all disciplines. It's excellent for tracking citations, finding who referenced a paper, and conducting comprehensive literature searches.";
    if (lower.includes('cochrane')) return "The Cochrane Library is the gold standard for evidence-based medicine. It specializes in systematic reviews and meta-analyses — the highest level of evidence. Always check Cochrane first when looking for evidence on a clinical dental question.";
    if (lower.includes('bias')) return "Bias is any systematic error that distorts research results. Common types: Selection bias (sample not representative), Observer bias (researcher's expectations influence results), Recall bias. Good study design minimizes bias through randomization and blinding.";
    
    return "That's a great question! I can help you understand lecture content, research definitions, database differences, and biostatistics basics. Try asking about: PubMed, Scopus, Cochrane, hypothesis, p-value, RCT, cohort study, cross-sectional study, standard deviation, or the research process steps.";
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput("");
    
    // Simulate delay for bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getBotResponse(text) }]);
    }, 600);
  };

  const quickQuestions = [
    "What is PubMed?", "Explain p-value", "What is an RCT?", "Cohort vs Case-Control"
  ];

  return (
    <section id="ai-helper" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> AI Simulated
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ask the Research Assistant</h2>
          <p className="text-muted-foreground">Get instant explanations for complex topics.</p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col h-[600px] shadow-2xl">
          {/* Chat Header */}
          <div className="bg-black/40 p-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-white">Research Assistant</h3>
              <div className="flex items-center gap-2 text-xs text-primary">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Online
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={idx} 
                className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-secondary text-white' : 'bg-primary/20 text-primary border border-primary/30'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-secondary text-white rounded-tr-sm' 
                    : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-6 py-2 flex gap-2 overflow-x-auto hide-scrollbar">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white/70 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/40 border-t border-white/10">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2 relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about research, p-values, study designs..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="bg-primary hover:bg-emerald-400 text-primary-foreground px-4 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
