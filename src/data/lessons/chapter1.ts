import { Chapter } from '../lessons';
import { lesson1 } from './chapter1/lesson1';
import { lesson2 } from './chapter1/lesson2';

export const chapter1: Chapter = {
  id: "ch1",
  title: "Chương 1: Tổng quan về Tối ưu hóa",
  lessons: [
    lesson1,
    lesson2
  ]
};
