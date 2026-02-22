// src/data/student.ts

export type Student = {
  name: string;
  score: number; // 0 - 100
};

export const students: Student[] = [
  { name: 'Alice Moodley',   score: 92 },
  { name: 'Brian Nkosi',     score: 74 },
  { name: 'Carla Swanepoel', score: 55 },
  { name: 'David Dlamini',   score: 38 },
  { name: 'Emma Botha',      score: 81 },
  { name: 'Farai Moyo',      score: 61 },
  { name: 'Grace Pillay',    score: 49 },
  { name: 'Hassan Adams',    score: 97 },
];