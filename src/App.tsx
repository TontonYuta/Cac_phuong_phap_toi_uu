/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OPTIMIZATION_DATA, Lesson } from './data/lessons';
import MarkdownRenderer from './components/MarkdownRenderer';
import QuizSection from './components/QuizSection';
import ExerciseSection from './components/ExerciseSection';
import { 
  BookOpen, 
  ChevronRight, 
  Menu, 
  X, 
  GraduationCap, 
  Calculator, 
  FileText, 
  BrainCircuit,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState<string>(OPTIMIZATION_DATA[0].lessons[0].id);
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'exercises'>('theory');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile

  let activeLesson = OPTIMIZATION_DATA[0].lessons[0];
  let activeChapter = OPTIMIZATION_DATA[0];
  
  for (const chapter of OPTIMIZATION_DATA) {
    const lesson = chapter.lessons.find(l => l.id === activeLessonId);
    if (lesson) {
      activeLesson = lesson;
      activeChapter = chapter;
      break;
    }
  }

  const handleLessonClick = (id: string) => {
    setActiveLessonId(id);
    setActiveTab('theory');
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex font-sans text-zinc-200">
      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 sm:w-80 bg-zinc-950 border-r border-zinc-800 transition-transform duration-300 transform lg:translate-x-0 lg:static lg:inset-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-black shadow-lg shadow-yellow-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-yellow-400 leading-tight">HUST Optimization</h1>
                <p className="text-xs text-zinc-400 font-medium">Mastering Math</p>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {OPTIMIZATION_DATA.map((chapter) => (
              <div key={chapter.id} className="space-y-2">
                <div className="px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                  {chapter.title}
                </div>
                <div className="space-y-1">
                  {chapter.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                        activeLessonId === lesson.id 
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" 
                          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 border border-transparent"
                      )}
                    >
                      <div className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center transition-colors shrink-0",
                        activeLessonId === lesson.id ? "bg-yellow-500 text-black" : "bg-zinc-900 text-zinc-500 group-hover:bg-zinc-800"
                      )}>
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="flex-1 text-left line-clamp-2 text-sm">{lesson.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-zinc-800">
            <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800">
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Tiến độ học tập</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-zinc-300">25% Hoàn thành</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-1/4 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-black/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-4 sm:px-6 flex-shrink-0 z-30">
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-zinc-400 hover:bg-zinc-900 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium text-zinc-400 truncate max-w-[100px] sm:max-w-[150px]">{activeChapter.title}</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium text-zinc-200 truncate max-w-[120px] sm:max-w-[200px]">{activeLesson.title}</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-[10px] font-bold text-zinc-400">
              <BrainCircuit className="w-3.5 h-3.5 text-yellow-400" />
              HUST-OPTIM-2024
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10">
            {/* Tabs */}
            <div className="flex p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl mb-6 sm:mb-8 w-full sm:w-fit overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('theory')}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap",
                  activeTab === 'theory' ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                <FileText className="w-4 h-4" />
                Lý thuyết
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap",
                  activeTab === 'quiz' ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                <Calculator className="w-4 h-4" />
                Trắc nghiệm
              </button>
              <button
                onClick={() => setActiveTab('exercises')}
                className={cn(
                  "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap",
                  activeTab === 'exercises' ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                <BrainCircuit className="w-4 h-4" />
                Bài tập
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={`${activeLessonId}-${activeTab}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'theory' && (
                <div className="bg-zinc-950/50 p-6 sm:p-8 lg:p-12 rounded-3xl shadow-xl border border-zinc-800 overflow-x-auto">
                  <MarkdownRenderer content={activeLesson.content} />
                </div>
              )}

              {activeTab === 'quiz' && (
                <div className="max-w-2xl mx-auto">
                  <QuizSection questions={activeLesson.quiz} />
                </div>
              )}

              {activeTab === 'exercises' && (
                <ExerciseSection exercises={activeLesson.exercises} />
              )}
            </motion.div>

            {/* Footer Navigation */}
            <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 text-center sm:text-left">
                Đang học: <span className="font-bold text-zinc-300">{activeLesson.title}</span>
              </div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest">
                © 2024 HUST Optimization Master
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
