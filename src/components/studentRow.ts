// src/components/studentRow.ts

import type { Student } from '../data/student';
import { getGrade } from '../utils/gradeHelper';

export function StudentRow(student: Student): string {
  // Call the helper to get the grade label and CSS class for this score
  const grade = getGrade(student.grade);

  // Return an HTML string — the className controls the row's colour
  return `
    <div class="student-row ${grade.className}">
      <span class="student-name">${student.name}</span>
      <span class="student-score">${student.grade}%</span>
      <span class="student-grade">${grade.label}</span>
    </div>
  `;
}