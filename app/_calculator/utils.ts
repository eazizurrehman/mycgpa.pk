import type {
  Course,
  University,
  UniversityWithLabel,
  UniversityWithLabels,
} from "@/app/_calculator/types";
import { universities } from "@/app/_calculator/universities";

const hasLabels = (u: University): u is UniversityWithLabels => "labels" in u;
const hasLabel = (u: University): u is UniversityWithLabel => "label" in u;

const resolveUniversity = (value: string) => {
  return universities.find((u) => {
    if (u.key === value) return true;
    if (hasLabel(u) && u.label === value) return true;

    return hasLabels(u) && u.labels.includes(value);
  });
};

export const calculateCgpa = (university: string, courses: Course[]) => {
  const universityData = resolveUniversity(university);

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
      if (hasLabels(u) && u.labels.length > 0) {
        return [u.key, ...u.labels];
      }

      return [u.key, u.label];
    })
    .filter((value): value is string => typeof value === "string");
};

export const getAllUniversitiesList = () => {
  return universities.flatMap((u) => {
    if (hasLabels(u) && u.labels.length > 0)
      return u.labels.map((label) => ({ value: label, label }));

    return hasLabel(u) ? [{ value: u.label, label: u.label }] : [];
  });
};

export const getGradesForUniversity = (university: string) => {
  const universityData = resolveUniversity(university);

  if (!universityData) return [];

  return universityData.mapping.map((m) => m.grade);
};
