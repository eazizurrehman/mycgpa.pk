import * as z from "zod";
import {
  getAllUniversitiesKeys,
  getGradesForUniversity,
} from "@/app/_calculator/helper";

export const cgpaCalculatorFormSchema = z
  .object({
    university: z.enum(getAllUniversitiesKeys(), {
      error: "University is required",
    }),
    courses: z
      .array(
        z.object({
          id: z.string().min(1),
          name: z.string().max(30, "Name must be at most 30 characters"),
          credits: z.enum(["1", "2", "3", "4", "5", "6"], {
            error: "Credits is required",
          }),
          grade: z.string().min(1, "Grade is required"),
        }),
      )
      .min(1, { error: "Add at least one course" }),
  })
  .superRefine((data, ctx) => {
    const allowed = getGradesForUniversity(data.university);
    data.courses.forEach((course, index) => {
      if (!allowed.includes(course.grade)) {
        ctx.addIssue({
          code: "custom",
          message: `Invalid grade for selected university. Expected one of: ${allowed.join(", ")}`,
          path: ["courses", index, "grade"],
        });
      }
    });
  });

export type TCgpaCalculatorFormSchema = z.infer<
  typeof cgpaCalculatorFormSchema
>;
