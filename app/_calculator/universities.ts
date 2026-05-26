import type { University } from "@/app/_calculator/types";

export const universities: University[] = [
  {
    key: "iiui",
    label: "International Islamic University Islamabad (IIUI)",
    mapping: [
      { grade: "A", gradePoints: 4.0 },
      { grade: "B+", gradePoints: 3.5 },
      { grade: "B", gradePoints: 3.0 },
      { grade: "C+", gradePoints: 2.5 },
      { grade: "C", gradePoints: 2.0 },
      { grade: "D+", gradePoints: 1.5 },
      { grade: "D", gradePoints: 1.0 },
      { grade: "F", gradePoints: 0.0 },
    ],
  },
  {
    key: "comsats",
    label: "COMSATS University Islamabad (CUI)",
    mapping: [
      { grade: "A", gradePoints: 4.0 },
      { grade: "A-", gradePoints: 3.66 },
      { grade: "B+", gradePoints: 3.33 },
      { grade: "B", gradePoints: 3.0 },
      { grade: "B-", gradePoints: 2.66 },
      { grade: "C+", gradePoints: 2.33 },
      { grade: "C", gradePoints: 2.0 },
      { grade: "C-", gradePoints: 1.66 },
      { grade: "D+", gradePoints: 1.33 },
      { grade: "D", gradePoints: 1.0 },
      { grade: "F", gradePoints: 0.0 },
    ],
  },
  {
    key: "qau",
    label: "Quaid-i-Azam University Islamabad (QAU)",
    mapping: [
      { grade: "A", gradePoints: 4.0 },
      { grade: "A-", gradePoints: 3.8 },
      { grade: "B+", gradePoints: 3.5 },
      { grade: "B", gradePoints: 3.0 },
      { grade: "B-", gradePoints: 2.8 },
      { grade: "C+", gradePoints: 2.5 },
      { grade: "C", gradePoints: 2.0 },
      { grade: "D", gradePoints: 1.0 },
      { grade: "F", gradePoints: 0.0 },
    ],
  },
];
