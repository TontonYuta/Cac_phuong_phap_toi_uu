import { chapter1 } from './lessons/chapter1';
import { chapter2 } from './lessons/chapter2';
import { chapter3 } from './lessons/chapter3';
import { chapter4 } from './lessons/chapter4';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  quiz: QuizQuestion[];
  exercises: {
    problem: string;
    solution: string;
  }[];
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const OPTIMIZATION_DATA: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4
];
