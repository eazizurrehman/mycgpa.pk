import { ArrowUpRight } from "lucide-react";

export const AppExternalLink = ({
  href,
  label = href,
}: {
  href: string;
  label?: string;
}) => {
  return (
    <a
      className="group flex h-10 items-center gap-1 transition-colors duration-200 hover:text-blue-600 focus:outline-none hover:dark:text-blue-400"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
      <ArrowUpRight
        className="opacity-0 transition-opacity duration-200 group-hover:text-blue-600 group-hover:opacity-100 group-hover:dark:text-blue-400"
        size={14}
      />
    </a>
  );
};
