import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "@/app/_shadcn/button";

export function AppButton({
  size = "sm",
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button size={size} {...props}>
      {children}
    </Button>
  );
}
