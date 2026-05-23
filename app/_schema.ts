import * as z from "zod";

export const cgpaCalculatorFormSchema = z.object({
  university: z.enum(["iiui"]),
});

export type TCgpaCalculatorFormSchema = z.infer<
  typeof cgpaCalculatorFormSchema
>;
