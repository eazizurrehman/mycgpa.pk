import * as z from "zod";

export const cgpaCalculatorFormSchema = z.object({
  university: z.enum(["iiui"], { error: "University is required" }),
  courses: z
    .array(
      z.object({
        id: z.string().min(1),
        name: z.string().max(30, "Name must be at most 30 characters"),
        credits: z.enum(["1", "2", "3", "4", "5", "6"], {
          error: "Credits is required",
        }),
        grade: z.enum(["A", "B+", "B", "C+", "C", "D+", "D", "F"], {
          error: "Grade is required",
        }),
      }),
    )
    .min(1, { error: "Add at least one course" }),
});

export type TCgpaCalculatorFormSchema = z.infer<
  typeof cgpaCalculatorFormSchema
>;
