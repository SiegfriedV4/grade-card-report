// src/main.ts
// This is the only file that touches the DOM.

import { students } from './data/student';
import { StudentRow } from './components/studentRow';

// querySelector finds the element in index.html with id="app"
// The ! at the end tells TypeScript "I'm sure this element exists"
const app = document.querySelector<HTMLDivElement>('#app')!;

// Build the full HTML string:
// .map() turns each student into an HTML row string
// .join('') stitches all the rows together into one string
const rows: string = students.map(StudentRow).join('');

// Set the page content — heading + the rows
app.innerHTML = `
  <div class="container">
    <h1>📋 Grade Report</h1>
    <p class="subtitle">${students.length} students</p>

    <div class="legend">
      <span class="grade-a">A  ≥ 90</span>
      <span class="grade-b">B  ≥ 80</span>
      <span class="grade-c">C  ≥ 70</span>
      <span class="grade-d">D  ≥ 60</span>
      <span class="grade-fail">Fail  &lt; 60</span>
    </div>

    <div class="student-list">
      ${rows}
    </div>
  </div>
`;