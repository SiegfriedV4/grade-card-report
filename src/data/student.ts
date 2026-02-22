// src/data/student.ts

export type Student = {
  id: number;
  name: string;
  grade: number;
};

export const students: Student[] = [
  { id: 1, name: 'Alice Moodley',   grade: 92 },
  { id: 2, name: 'Brian Nkosi',     grade: 74 },
  { id: 3, name: 'Carla Swanepoel', grade: 55 },
  { id: 4, name: 'David Dlamini',   grade: 38 },
  { id: 5, name: 'Emma Botha',      grade: 81 },
  { id: 6, name: 'Farai Moyo',      grade: 61 },
  { id: 7, name: 'Grace Pillay',    grade: 49 },
  { id: 8, name: 'Hassan Adams',    grade: 97 },
];