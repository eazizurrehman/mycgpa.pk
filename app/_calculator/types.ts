export type Course = {
  id: string;
  name: string;
  credits: string;
  grade: string;
};

export type TranscriptSummary = {
  credits: number;
  gradePoints: number;
  gpa: number;
};

export type TranscriptDocumentProps = {
  university: string;
  courses: Course[];
  summary: TranscriptSummary;
};

export type UniversityGradeMapping = {
  grade: string;
  gradePoints: number;
};

export type University = {
  key: string;
  otherKeys?: string[];
  label: string;
  mapping: UniversityGradeMapping[];
};
