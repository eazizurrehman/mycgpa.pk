import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppAttribution } from "@/app/_attribution";
import { AppLogo } from "@/app/_logo";
import { navigationItems } from "@/app/_nav-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/_shadcn/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_shadcn/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function AppHeaderOverlayMenu() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) setIsSheetOpen(false);
  }, [isMobile]);

  return (
    <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
      <SheetTrigger asChild className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-2 border-b border-dashed py-2">
          <SheetTitle>
            <AppLogo />
          </SheetTitle>
        </SheetHeader>
        <NavigationMenu className="flex w-full min-w-full max-w-none flex-col items-start justify-start px-2">
          <div className="w-full">
            <NavigationMenuList className="w-full min-w-full max-w-none flex-col items-start justify-start self-stretch">
              {navigationItems.map((item) => (
                <NavigationMenuItem className="w-full" key={item.key}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "w-full justify-start px-3 text-sm",
                    )}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </NavigationMenu>
        <div className="mx-auto flex w-full items-center justify-center border-t border-dashed px-5 py-2">
          <AppAttribution />
        </div>
      </SheetContent>
    </Sheet>
  );
}
