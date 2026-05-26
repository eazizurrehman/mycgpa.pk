import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CgpaCalculatorForm } from "@/app/_calculator/form";
import { getUniversity } from "@/app/_calculator/utils";
import { CALCULATOR_ALLOWED_URLS } from "@/app/[university]/[calculator]/_allowed-urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ university: string; calculator: string }>;
}): Promise<Metadata> {
  const { university, calculator } = await params;

  const matched = getUniversity(university);
  const allowed = new Set(CALCULATOR_ALLOWED_URLS);

  if (!matched || !allowed.has(calculator)) return notFound();

  const calculatorTitle = calculator.includes("cgpa")
    ? "CGPA Calculator"
    : calculator.includes("sgpa")
      ? "SGPA Calculator"
      : "GPA Calculator";

  return {
    title: `${calculatorTitle} | ${matched.label}`,
    description: `Calculate your results with our ${calculatorTitle} for ${matched.label}.`,
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ university: string; calculator: string }>;
}) {
  const { university, calculator } = await params;

  const matched = getUniversity(university);
  const allowed = new Set(CALCULATOR_ALLOWED_URLS);

  if (!matched || !allowed.has(calculator)) return notFound();

  return (
    <div className="flex w-full items-center justify-center">
      <CgpaCalculatorForm university={university} />
    </div>
  );
}
