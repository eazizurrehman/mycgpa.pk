import type { Course } from "@/app/_calculator/types";
import { universities } from "@/app/_calculator/universities";

export const getUniversity = (value: string) => {
  return universities.find((u) => {
    if (u.key === value) return true;
    if (new Set(u.otherKeys).has(value)) return true;
    if (u.label === value) return true;

    return false;
  });
};

export const calculateCgpa = (university: string, courses: Course[]) => {
  const universityData = getUniversity(university);

  if (!universityData) return { credits: 0, gradePoints: 0 };

  return courses.reduce(
    (acc, course) => {
      const credits = Number(course.credits);
      const gradePoints = universityData.mapping.find(
        (m) => m.grade === course.grade,
      )?.gradePoints;

      if (
        !Number.isFinite(credits) ||
        typeof gradePoints !== "number" ||
        !Number.isFinite(gradePoints)
      ) {
        return acc;
      }

      acc.credits += credits;
      acc.gradePoints += credits * gradePoints;

      return acc;
    },
    {
      credits: 0,
      gradePoints: 0,
    },
  );
};

export const getAllUniversitiesKeys = () => {
  return universities
    .flatMap((u) => {
      return [u.key, u.label, ...(u.otherKeys ?? [])];
    })
    .filter((value): value is string => typeof value === "string");
};

export const getAllUniversitiesList = () => {
  return universities.map((u) => ({ value: u.label, label: u.label }));
};

export const getGradesForUniversity = (university: string) => {
  const universityData = getUniversity(university);

  if (!universityData) return [];

  return universityData.mapping.map((m) => m.grade);
};
