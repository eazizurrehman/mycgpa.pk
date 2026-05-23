import { Activity } from "react";
import { SidebarTrigger } from "@/app/_shadcn/sidebar";
import { Skeleton } from "@/app/_shadcn/skeleton";
import { toTitleCase } from "@/lib";
import { cn } from "@/lib/utils";

export function AppHeaderSkeleton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-full shrink-0 items-center justify-between gap-5 px-2",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Skeleton className="size-6 rounded-md bg-secondary" />
        <div className="flex h-full items-center gap-2">
          {[1, 2, 3].map((index) => (
            <div className="flex h-full items-center gap-2" key={index}>
              <Activity mode={index !== 1 ? "visible" : "hidden"}>
                <Skeleton className="h-6 w-4 rounded bg-secondary" />
              </Activity>
              <Skeleton className="h-6 w-18 rounded bg-secondary" />
            </div>
          ))}
        </div>
      </div>
      <Activity mode={children ? "visible" : "hidden"}>
        <div className="flex h-full flex-1 flex-col justify-center">
          {children}
        </div>
      </Activity>
      <div className="flex h-full items-center gap-2">
        <Skeleton className="h-[68%] w-28 rounded-md bg-secondary" />
        <Skeleton className="h-[68%] w-28 rounded-md bg-secondary" />
      </div>
    </div>
  );
}

export function AppHeader({
  title,
  endSlot,
  titleClassName,
  sidebarTrigger = true,
  className,
  children,
}: {
  title: string | React.ReactNode;
  endSlot?: React.ReactNode;
  titleClassName?: string;
  sidebarTrigger?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <header
      className={cn(
        "flex h-12 w-full shrink-0 items-center justify-between gap-5 px-2",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Activity mode={sidebarTrigger ? "visible" : "hidden"}>
          <SidebarTrigger />
        </Activity>
        <h3 className={cn("text-nowrap font-semibold text-lg", titleClassName)}>
          {typeof title === "string" ? toTitleCase(title) : title}
        </h3>
      </div>
      <Activity mode={children ? "visible" : "hidden"}>
        <div className="flex h-full flex-1 flex-col justify-center">
          {children}
        </div>
      </Activity>
      <Activity mode={endSlot ? "visible" : "hidden"}>
        <div>{endSlot}</div>
      </Activity>
    </header>
  );
}
