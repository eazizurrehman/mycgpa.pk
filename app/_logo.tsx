import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const AppLogo = ({
  tagline = false,
  className,
}: {
  tagline?: boolean;
  className?: string;
}) => {
  return (
    <Link className={cn("shrink-0 font-bold text-lg", className)} href="/">
      {tagline ? (
        <Image
          alt="logo"
          height={58.5}
          src="/logo-with-tagline.svg"
          width={150}
        />
      ) : (
        <Image alt="logo" height={58.5} src="/logo-only.svg" width={150} />
      )}
    </Link>
  );
};
