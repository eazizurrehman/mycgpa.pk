export type Course = {
  id: string;
  name: string;
  credits: string;
  grade: string;
};

export type UniversityGradeMapping = {
  grade: string;
  gradePoints: number;
};

type UniversityBase = {
  key: string;
  mapping: UniversityGradeMapping[];
};

export type UniversityWithLabel = UniversityBase & {
  label: string;
  labels?: never;
};

export type UniversityWithLabels = UniversityBase & {
  labels: string[];
  label?: never;
};

export type University = UniversityWithLabel | UniversityWithLabels;
