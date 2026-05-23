"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import { Check, Trash2, X } from "lucide-react";
import { useState } from "react";
import z from "zod";
import { AppButton } from "@/app/_components/button";
import { AppFieldGroup } from "@/app/_modules/form/field-group";
import { AppInput } from "@/app/_modules/form/input";
import { AppSubmitButton } from "@/app/_modules/form/submit-button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_shadcn/dialog";
import { Field } from "@/app/_shadcn/field";
import { cn } from "@/lib/utils";

export function ConfirmDeletion({
  className,
  confirmationText = "delete all",
  title,
  description,
  trigger,
  onConfirm,
}: {
  className?: string;
  confirmationText?: string;
  title?: React.ReactNode;
  description?: string | React.ReactNode;
  trigger?: string | React.ReactNode;
  onConfirm: () => void | Promise<void>;
}) {
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    confirmation: z
      .string()
      .min(1, "Confirmation is required")
      .refine(
        (value) => value.toLowerCase() === confirmationText.toLowerCase(),
        `You must enter "${confirmationText}" to confirm`,
      ),
  });

  const form = useForm({
    defaultValues: {
      confirmation: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async () => {
      await onConfirm();
      setOpen(false);
    },
  });

  return (
    <Dialog
      onOpenChange={() => {
        form.reset();
        setOpen((prev) => !prev);
      }}
      open={open}
    >
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <AppButton variant="destructive">
            <Trash2 />
            Delete All
          </AppButton>
        )}
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-sm", className)}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {title ? (
              title
            ) : (
              <>
                <Trash2 />
                Slow Down! Delete All?
              </>
            )}
          </DialogTitle>
        </DialogHeader>
        <form
          className="space-y-2"
          id="confirm-danger-action-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {description ? (
            description
          ) : (
            <p className="mb-5 opacity-60">
              This will permanently remove all items and its associated data.
              This action is risky and cannot be undone.
            </p>
          )}
          <AppFieldGroup>
            <form.Field name="confirmation">
              {(field) => (
                <AppInput
                  className="font-semibold text-destructive placeholder:font-normal"
                  field={field}
                  label={
                    <>
                      Enter
                      <span className="select-none rounded bg-secondary px-1 py-0.5 font-semibold text-destructive">
                        {confirmationText}
                      </span>
                      to confirm
                    </>
                  }
                  placeholder="Enter confirmation text"
                />
              )}
            </form.Field>
          </AppFieldGroup>
        </form>
        <DialogFooter className="flex sm:justify-start">
          <Field orientation="horizontal">
            <AppSubmitButton form={form} formId="confirm-danger-action-form">
              <Check /> Submit
            </AppSubmitButton>
            <AppButton onClick={() => form.reset()} variant="outline">
              <X />
              Reset
            </AppButton>
          </Field>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
