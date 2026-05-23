import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/_shadcn/breadcrumb";
import { cn } from "@/lib/utils";

type TBreadcrumb = {
  id?: string;
  label?: string;
  href?: string;
  isSeparator?: boolean;
  className?: string;
};

export function AppBreadcrumb({ items }: { items: TBreadcrumb[] }) {
  const breadcrumbs = items.flatMap((item, index) => {
    if (index < items.length - 1) {
      const separatorId = `sep-${index}`;
      return [item, { id: separatorId, isSeparator: true }];
    }

    return [item];
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item) => {
          if (item.isSeparator) return <BreadcrumbSeparator key={item.id} />;

          return (
            <BreadcrumbItem
              className="flex items-center gap-1"
              key={item.label}
            >
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link
                    className={cn("text-[16px]", item.className)}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className={cn("text-[16px]", item.className)}>
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
