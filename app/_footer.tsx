import Link from "next/link";
import { Suspense } from "react";
import { CurrentYear } from "@/app/_components/current-year";
import { footerMenu } from "@/app/_footer-menu";
import { AppLogo } from "@/app/_logo";
import { Separator } from "@/app/_shadcn/separator";

export function AppFooter() {
  return (
    <footer className=" ">
      <div className="container mx-auto flex items-center justify-between gap-5 px-5 py-2">
        <div className="flex items-center gap-2">
          <AppLogo className="w-28" />
          <Separator orientation="vertical" />
          <p className="relative text-center text-muted-foreground text-sm">
            &#xa9;{" "}
            <Suspense>
              <CurrentYear />
            </Suspense>
            . All rights reserved.
          </p>
          <Separator orientation="vertical" />
          <p className="text-muted-foreground text-sm">
            By{" "}
            <a
              className="text-center underline-offset-4 hover:underline"
              href="https://azizurrehman.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              azizurrehman.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-5">
          {footerMenu.map((item) => (
            <Link
              className="text-muted-foreground text-sm"
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
