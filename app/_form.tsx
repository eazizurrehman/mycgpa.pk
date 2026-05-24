"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import { Trash2, X } from "lucide-react";
import { useId } from "react";
import { AppButton } from "@/app/_components/button";
import { AppCombobox } from "@/app/_modules/form/combobox";
import { AppFieldGroup } from "@/app/_modules/form/field-group";
import { AppInput } from "@/app/_modules/form/input";
import { AppMultiField } from "@/app/_modules/form/multi-field";
import { cgpaCalculatorFormSchema } from "@/app/_schema";
import { Card, CardContent, CardFooter } from "@/app/_shadcn/card";
import { Field } from "@/app/_shadcn/field";

const GRADE_TO_POINTS: Record<string, number> = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
};

type Course = {
  id: string;
  name: string;
  credits: string;
  grade: string;
};

const calculate = (courses: Course[]) => {
  return courses.reduce(
    (acc, course) => {
      const credits = Number(course.credits);
      const gradePoints = GRADE_TO_POINTS[course.grade];

      if (!Number.isFinite(credits) || !Number.isFinite(gradePoints)) {
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

export function CgpaCalculatorForm() {
  const formId = useId();
  const createCourse = () => ({
    id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
    name: "",
    credits: "",
    grade: "",
  });

  const form = useForm({
    defaultValues: {
      university: "",
      courses: [createCourse()],
    },
    validators: {
      onChange: cgpaCalculatorFormSchema,
    },
    onSubmit: () => {},
  });

  return (
    <Card className="w-full sm:max-w-2xl">
      <CardContent>
        <form
          className="space-y-2"
          id={formId}
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <AppFieldGroup>
            <form.Field name="university">
              {(field) => (
                <AppCombobox
                  field={field}
                  options={[
                    {
                      label:
                        "International Islamic University, Islamabad (IIUI)",
                      value: "iiui",
                    },
                  ]}
                />
              )}
            </form.Field>
          </AppFieldGroup>
          <form.Field mode="array" name="courses">
            {(field) => (
              <AppMultiField
                addLabel="Add course"
                field={field}
                label="Semester-wise Courses"
                maxItems={10}
                pushValue={() => field.pushValue(createCourse())}
              >
                {field.state.value.map((course, index) => (
                  <AppFieldGroup
                    className="flex items-center gap-2"
                    key={course.id}
                    orientation="horizontal"
                  >
                    <p>{index + 1}.</p>
                    <form.Field name={`courses[${index}].name`}>
                      {(field) => (
                        <AppInput
                          field={field}
                          hasLabel={false}
                          placeholder="Name"
                        />
                      )}
                    </form.Field>
                    <form.Field name={`courses[${index}].credits`}>
                      {(field) => (
                        <AppCombobox
                          field={field}
                          hasLabel={false}
                          label="Credits"
                          options={["1", "2", "3", "4", "5", "6"]}
                          placeholder="Credits"
                        />
                      )}
                    </form.Field>
                    <form.Field name={`courses[${index}].grade`}>
                      {(field) => (
                        <AppCombobox
                          field={field}
                          hasLabel={false}
                          label="Grade"
                          options={["A", "B+", "B", "C+", "C", "D+", "D", "F"]}
                          placeholder="Grade"
                        />
                      )}
                    </form.Field>
                    <AppButton
                      aria-label="Remove course"
                      className="self-end"
                      disabled={field.state.value.length === 1}
                      onClick={(e) => {
                        e.preventDefault();
                        field.removeValue(index);
                      }}
                      size="icon-sm"
                      type="button"
                      variant="ghost"
                    >
                      <Trash2 className="text-muted-foreground" />
                    </AppButton>
                  </AppFieldGroup>
                ))}
              </AppMultiField>
            )}
          </form.Field>
          <form.Subscribe selector={({ values }) => [values.courses] as const}>
            {(state) => {
              const [courses] = state;

              const { credits, gradePoints } = calculate(courses);

              const gpa = credits > 0 ? gradePoints / credits : 0;

              return (
                <div className="flex items-center justify-center gap-5">
                  <div className="flex size-22 flex-col items-center justify-center rounded-full border-4 p-5">
                    <p className="font-bold">Credits</p>
                    <p className="font-bold">{credits}</p>
                  </div>
                  <div className="flex size-22 flex-col items-center justify-center rounded-full border-4 p-5">
                    <p className="font-bold">Points</p>
                    <p className="font-bold">{gradePoints}</p>
                  </div>
                  <div className="flex size-22 flex-col items-center justify-center rounded-full border-4 p-5">
                    <p className="font-bold">GPA</p>
                    <p className="font-bold">{gpa.toFixed(2)}</p>
                  </div>
                </div>
              );
            }}
          </form.Subscribe>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <Field orientation="horizontal">
          <AppButton
            onClick={(e) => {
              e.preventDefault();
              form.reset();
            }}
            size="sm"
            type="button"
            variant="secondary"
          >
            <X />
            Reset
          </AppButton>
        </Field>
      </CardFooter>
    </Card>
  );
}
