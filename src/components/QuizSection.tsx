import React, { useState } from 'react';
import { QuizQuestion } from '../data/lessons';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface QuizSectionProps {
  questions: QuizQuestion[];
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-950/50 p-6 sm:p-8 rounded-2xl shadow-xl border border-zinc-800 text-center"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2">Kết quả Quiz</h3>
        <p className="text-zinc-400 mb-6">
          Bạn đã trả lời đúng <span className="font-bold text-yellow-400">{score}</span> trên tổng số <span className="font-bold">{questions.length}</span> câu hỏi.
        </p>
        <button
          onClick={resetQuiz}
          className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-black rounded-xl font-medium hover:bg-yellow-400 transition-colors"
        >
          Làm lại Quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
          Câu hỏi {currentQuestionIdx + 1} / {questions.length}
        </span>
        <div className="h-1.5 w-24 sm:w-32 bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-yellow-500 transition-all duration-300" 
            style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-zinc-950/50 p-5 sm:p-6 rounded-2xl border border-zinc-800 shadow-xl">
        <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-6 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isCorrect = idx === currentQuestion.correctAnswer;
            const isSelected = idx === selectedOption;
            
            let variantClass = "border-zinc-800 hover:border-yellow-500/50 hover:bg-yellow-500/5";
            if (isSubmitted) {
              if (isCorrect) variantClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
              else if (isSelected) variantClass = "border-rose-500/50 bg-rose-500/10 text-rose-400";
              else variantClass = "border-zinc-800/50 opacity-40";
            } else if (isSelected) {
              variantClass = "border-yellow-500 bg-yellow-500/10 text-yellow-300";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isSubmitted}
                className={cn(
                  "w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 text-sm sm:text-base",
                  variantClass
                )}
              >
                <span>{option}</span>
                {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-zinc-200 mb-1 uppercase tracking-wider">Giải thích:</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="w-full sm:w-auto px-6 py-2.5 bg-yellow-500 text-black rounded-xl font-medium hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Kiểm tra
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-2.5 bg-zinc-100 text-zinc-900 rounded-xl font-medium hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              {currentQuestionIdx < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
