import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { AppButton } from "@/app/_components/button";
import type { buttonVariants } from "@/app/_shadcn/button";
import { LoadingSwap } from "@/app/_shadcn/loading-swap";
import { cn } from "@/lib/utils";

export function AppSwapButton({
  isLoading,
  className,
  swapClassName,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading: boolean;
    swapClassName?: string;
  }) {
  return (
    <AppButton
      className={cn(
        "group *:w-full",
        isLoading && "disabled:opacity-100",
        className,
      )}
      disabled={isLoading}
      size="sm"
      {...props}
    >
      <LoadingSwap
        className={cn(
          "inline-flex w-full min-w-full flex-1 items-center justify-center gap-1",
          swapClassName,
        )}
        isLoading={isLoading}
      >
        {children}
      </LoadingSwap>
    </AppButton>
  );
}
