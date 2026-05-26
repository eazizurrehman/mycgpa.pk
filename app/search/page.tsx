import { Suspense } from "react";
import Cards from "@/app/search/_cards";

export default function SearchPage() {
  return (
    <div className="h-full min-h-full space-y-5">
      <Suspense>
        <Cards />
      </Suspense>
    </div>
  );
}
