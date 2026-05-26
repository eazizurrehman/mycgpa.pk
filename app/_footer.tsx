import Link from "next/link";
import { CurrentYear } from "@/app/_components/current-year";
import { footerMenu } from "@/app/_footer-menu";
import { Separator } from "@/app/_shadcn/separator";

export function AppFooter() {
  return (
    <footer className=" ">
      <div className="container mx-auto flex items-center justify-between gap-5 px-5 py-2">
        <Link href="/">mycgpa.pk</Link>
        <div className="flex gap-2">
          <p className="text-center text-muted-foreground text-sm">
            &#xa9;
            <CurrentYear />{" "}
            <Link className="underline-offset-4 hover:underline" href="/">
              mycgpa.pk
            </Link>
          </p>
          <Separator orientation="vertical" />
          <a
            className="text-center text-muted-foreground text-sm underline-offset-4 hover:underline"
            href="https://azizurrehman.com"
          >
            azizurrehman.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          {footerMenu.map((item) => (
            <Link
              className="underline-offset-4 hover:underline"
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
