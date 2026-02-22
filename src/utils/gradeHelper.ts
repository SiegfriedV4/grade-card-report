// src/utils/gradeHelper.ts
export type GradeResult = {
  label: string;     // e.g. "A", "B", "Fail"
  className: string; // matches a CSS class in styles.css
};

export function getGrade(score: number): GradeResult {
  // Switch on a derived value — avoids a long if/else chain
  // Math.floor(score / 10) turns the score into a bracket:
  // 90-100 → 10 or 9, 80-89 → 8, 70-79 → 7, etc.
  switch (true) {
    case score >= 90: return { label: 'A', className: 'grade-a' };
    case score >= 80: return { label: 'B', className: 'grade-b' };
    case score >= 70: return { label: 'C', className: 'grade-c' };
    case score >= 60: return { label: 'D', className: 'grade-d' };
    default:          return { label: 'Fail', className: 'grade-fail' };
  }
}