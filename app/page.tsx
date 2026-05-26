import { CgpaCalculatorForm } from "@/app/_calculator/form";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center p-5">
      <CgpaCalculatorForm university="iiui" />
    </div>
  );
}
