import type { University } from "@/app/_calculator/types";

export const universities = [
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
    labels: [
      "COMSATS University Islamabad (CUI), Islamabad Campus",
      "COMSATS University Islamabad (CUI), Lahore Campus",
      "COMSATS University Islamabad (CUI), Abbottabad Campus",
      "COMSATS University Islamabad (CUI), Wah Campus",
      "COMSATS University Islamabad (CUI), Attock Campus",
      "COMSATS University Islamabad (CUI), Sahiwal Campus",
      "COMSATS University Islamabad (CUI), Vehari Campus",
      "COMSATS University Islamabad (CUI), Virtual Campus",
    ],
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
] satisfies University[];
