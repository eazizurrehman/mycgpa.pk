"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false },
);

import { useForm } from "@tanstack/react-form-nextjs";
import { Trash2, X } from "lucide-react";
import { useId } from "react";
import {
  calculateCgpa,
  getAllUniversitiesList,
  getGradesForUniversity,
} from "@/app/_calculator/helper";
import { cgpaCalculatorFormSchema } from "@/app/_calculator/schema";
import { TranscriptDocument } from "@/app/_calculator/transcript";
import { AppButton } from "@/app/_components/button";
import { AppCombobox } from "@/app/_modules/form/combobox";
import { AppFieldGroup } from "@/app/_modules/form/field-group";
import { AppInput } from "@/app/_modules/form/input";
import { AppMultiField } from "@/app/_modules/form/multi-field";
import { Card, CardContent, CardFooter } from "@/app/_shadcn/card";
import { Field } from "@/app/_shadcn/field";

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

  const allUniversities = getAllUniversitiesList();

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
                <AppCombobox field={field} options={allUniversities} />
              )}
            </form.Field>
          </AppFieldGroup>
          <form.Subscribe
            selector={({ values }) => [values.university] as const}
          >
            {(state) => {
              const [university] = state;
              const uniGrades = getGradesForUniversity(university);

              return (
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
                          className="flex gap-2"
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
                                options={uniGrades}
                                placeholder="Grade"
                              />
                            )}
                          </form.Field>
                          <AppButton
                            aria-label="Remove course"
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
              );
            }}
          </form.Subscribe>
          <form.Subscribe
            selector={({ values }) =>
              [values.university, values.courses] as const
            }
          >
            {(state) => {
              const [university, courses] = state;

              const { credits, gradePoints } = calculateCgpa(
                university,
                courses,
              );

              const gpa = credits > 0 ? gradePoints / credits : 0;

              return (
                <div className="flex items-center justify-center gap-5">
                  <div className="flex size-22 flex-col items-center justify-center rounded-full border-4 p-5">
                    <p className="font-bold">Credits</p>
                    <p className="font-bold">{credits.toFixed(2)}</p>
                  </div>
                  <div className="flex size-22 flex-col items-center justify-center rounded-full border-4 p-5">
                    <p className="font-bold">Points</p>
                    <p className="font-bold">{gradePoints.toFixed(2)}</p>
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
          <form.Subscribe
            selector={({ values }) =>
              [values.university, values.courses] as const
            }
          >
            {(state) => {
              const [university, courses] = state;
              const universityName =
                typeof university === "string" ? university : "";
              const { credits, gradePoints } = calculateCgpa(
                universityName,
                courses,
              );
              const gpa = credits > 0 ? gradePoints / credits : 0;

              return (
                <AppButton asChild>
                  <PDFDownloadLink
                    document={
                      <TranscriptDocument
                        courses={courses}
                        summary={{ credits, gradePoints, gpa }}
                        university={universityName}
                      />
                    }
                    fileName={`Transcript - ${universityName.toUpperCase() || "University"} - ${new Date().toLocaleString()}.pdf`}
                  >
                    Download transcript
                  </PDFDownloadLink>
                </AppButton>
              );
            }}
          </form.Subscribe>
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
