"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import { X } from "lucide-react";
import { AppButton } from "@/app/_components/button";
import { AppCombobox } from "@/app/_modules/form/combobox";
import { AppFieldGroup } from "@/app/_modules/form/field-group";
import { cgpaCalculatorFormSchema } from "@/app/_schema";
import { Card, CardContent, CardFooter } from "@/app/_shadcn/card";
import { Field } from "@/app/_shadcn/field";

export function CgpaCalculatorForm() {
  const form = useForm({
    defaultValues: {
      university: "",
    },
    validators: {
      onChange: cgpaCalculatorFormSchema,
    },
    onSubmit: ({ value }) => {},
  });

  return (
    <Card className="w-full sm:max-w-sm">
      <CardContent>
        <form
          className="space-y-2"
          id="county-form"
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
