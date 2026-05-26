import { notFound, redirect } from "next/navigation";
import { getUniversity } from "@/app/_calculator/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ university: string }>;
}) {
  const { university } = await params;

  const matched = getUniversity(university);

  if (!matched) return notFound();

  return redirect(`/${university}/cgpa-calculator`);
}
