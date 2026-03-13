import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RefreshCcw, Award } from "lucide-react";
import { quizQuestions } from "@/lib/data";

export function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    setIsAnswered(true);
    
    if (idx === quizQuestions[currentQ].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelected(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const q = quizQuestions[currentQ];

  return (
    <section id="quiz" className="py-24 relative bg-black/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Test Your Knowledge</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>

        <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden min-h-[450px] flex flex-col">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="quiz-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex justify-between items-center mb-8 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  <span>Question {currentQ + 1} of {quizQuestions.length}</span>
                  <span>Score: {score}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                  {q.question}
                </h3>

                <div className="space-y-3 flex-1">
                  {q.options.map((opt, idx) => {
                    const isSelected = selected === idx;
                    const isCorrect = idx === q.correctAnswer;
                    
                    let bgClass = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20";
                    if (isAnswered) {
                      if (isCorrect) bgClass = "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                      else if (isSelected && !isCorrect) bgClass = "bg-red-500/20 border-red-500/50 text-red-100";
                      else bgClass = "bg-white/5 border-white/10 opacity-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center ${bgClass}`}
                      >
                        <span className="font-medium">{opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-xl border ${selected === q.correctAnswer ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                  >
                    <p className="text-white/90 text-sm"><span className="font-bold block mb-1">Explanation:</span> {q.explanation}</p>
                  </motion.div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={nextQuestion}
                    disabled={!isAnswered}
                    className="px-6 py-3 bg-white text-black font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                  >
                    {currentQ === quizQuestions.length - 1 ? 'Show Results' : 'Next Question'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">Quiz Complete!</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  You scored <span className="text-primary font-bold text-2xl">{score}</span> out of {quizQuestions.length}
                </p>
                
                {score === quizQuestions.length ? (
                  <p className="text-emerald-400 font-medium mb-8">Perfect score! You are ready to publish.</p>
                ) : score >= quizQuestions.length / 2 ? (
                  <p className="text-blue-400 font-medium mb-8">Good job! Review the glossary for a perfect score next time.</p>
                ) : (
                  <p className="text-red-400 font-medium mb-8">Keep studying! The lecture summaries are here to help.</p>
                )}

                <button
                  onClick={restartQuiz}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5" /> Retake Quiz
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
