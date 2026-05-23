import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export const AppInternalLink = ({
  href,
  label = href,
}: {
  href: string;
  label?: string;
}) => {
  return (
    <Link
      className="group flex h-10 items-center gap-1 transition-colors duration-200 hover:text-blue-600 focus:outline-none hover:dark:text-blue-400"
      href={href}
    >
      {label}
      <LinkIcon
        className="opacity-0 transition-opacity duration-200 group-hover:text-blue-600 group-hover:opacity-100 group-hover:dark:text-blue-400"
        size={14}
      />
    </Link>
  );
};
