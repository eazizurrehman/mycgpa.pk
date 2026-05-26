import Link from "next/link";
import { Suspense } from "react";
import { AppAttribution } from "@/app/_attribution";
import { CurrentYear } from "@/app/_components/current-year";
import { footerMenu } from "@/app/_footer-menu";
import { AppLogo } from "@/app/_logo";

export function AppFooter() {
  return (
    <footer className="border-t border-dashed">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-5 py-2 md:flex-row md:gap-5">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <AppLogo className="w-28" />
          <div className="flex items-center gap-2">
            <p className="relative min-w-fit text-center text-muted-foreground text-sm">
              &#xa9;{" "}
              <Suspense>
                <CurrentYear />
              </Suspense>
              . All rights reserved.
            </p>
            <AppAttribution />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {footerMenu.map((item) => (
            <Link
              className="min-w-fit text-muted-foreground text-sm"
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
