import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { Eye, EyeOff, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExerciseSectionProps {
  exercises: {
    problem: string;
    solution: string;
  }[];
}

const ExerciseSection: React.FC<ExerciseSectionProps> = ({ exercises }) => {
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});

  const toggleSolution = (idx: number) => {
    setVisibleSolutions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {exercises.map((ex, idx) => (
        <div key={idx} className="bg-zinc-950/50 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-zinc-800 bg-zinc-900/30 flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400 font-bold text-sm">
              {idx + 1}
            </div>
            <h3 className="font-semibold text-white text-sm sm:text-base">Bài tập tự luận</h3>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="mb-6 overflow-x-auto">
              <MarkdownRenderer content={ex.problem} />
            </div>

            <button
              onClick={() => toggleSolution(idx)}
              className="flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors mb-4"
            >
              {visibleSolutions[idx] ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Ẩn lời giải
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Hiện lời giải
                </>
              )}
            </button>

            <AnimatePresence>
              {visibleSolutions[idx] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 sm:p-6 bg-emerald-500/5 rounded-xl border border-emerald-500/20"
                >
                  <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <HelpCircle className="w-4 h-4" />
                    Lời giải chi tiết
                  </div>
                  <div className="overflow-x-auto">
                    <MarkdownRenderer content={ex.solution} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseSection;
