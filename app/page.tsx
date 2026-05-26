"use client";

import { MapPinMinusInside, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { universities } from "@/app/_calculator/universities";
import { AppButton } from "@/app/_components/button";
import { Card, CardContent } from "@/app/_shadcn/card";
import { Input } from "@/app/_shadcn/input";

function getCleanUrlLabel(value: string) {
  try {
    return new URL(value).host;
  } catch {
    return value.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredUniversities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const base = normalizedQuery
      ? universities.filter((item) =>
          [item.key, item.label, ...(item.otherKeys ?? [])]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery),
        )
      : universities;

    return [...base].sort((a, b) => a.label.localeCompare(b.label));
  }, [query]);

  return (
    <div className="h-full min-h-full space-y-5">
      <Input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for university..."
        value={query}
      />
      <div className="grid grid-cols-2 gap-5">
        {filteredUniversities.map((item) => (
          <Card key={item.key}>
            <CardContent className="flex gap-2">
              <div className="flex size-28 shrink-0 items-center justify-center bg-white p-1">
                <Image
                  alt={item.label}
                  className="size-full"
                  height={100}
                  src={item.logo}
                  width={100}
                />
              </div>
              <div className="flex w-full flex-col justify-between gap-1">
                <h3 className="font-semibold">{item.label}</h3>
                <p className="flex items-center gap-2">
                  <MapPinMinusInside width={16} />
                  {item.location}
                </p>
                <a
                  className="group flex h-6 items-center gap-2"
                  href={item.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  {getCleanUrlLabel(item.website)}
                  <SquareArrowOutUpRight
                    className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
                    width={14}
                  />
                </a>
                <div className="flex w-full gap-2">
                  <AppButton asChild className="flex-1">
                    <Link href={`/${item.key}/cgpa-calculator`}>
                      CGPA Calculator
                    </Link>
                  </AppButton>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
