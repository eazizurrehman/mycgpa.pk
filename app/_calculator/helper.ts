import type { Course } from "@/app/_calculator/types";
import { universities } from "@/app/_calculator/universities";

export const calculateCgpa = (university: string, courses: Course[]) => {
  const universityData = universities.find((u) => u.key === university);

  if (!universityData) return { credits: 0, gradePoints: 0 };

  return courses.reduce(
    (acc, course) => {
      const credits = Number(course.credits);
      const gradePoints = universityData.mapping.find(
        (m) => m.grade === course.grade,
      )?.points;

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

export const getGradesForUniversity = (university: string) => {
  const universityData = universities.find((u) => u.key === university);

  if (!universityData) return [];

  return universityData.mapping.map((m) => m.grade);
};
