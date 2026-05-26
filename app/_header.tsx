"use client";

import Link from "next/link";
import { AppHeaderOverlayMenu } from "@/app/_header-overlay-menu";
import { AppLogo } from "@/app/_logo";
import { navigationItems } from "@/app/_nav-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/app/_shadcn/navigation-menu";
import { cn } from "@/lib/utils";

export function AppHeader() {
  return (
    <header className=" ">
      <div className="container mx-auto flex items-center justify-between gap-5 border-b border-dashed px-5 py-2">
        <AppLogo tagline />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "text-sm")}
                >
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <AppHeaderOverlayMenu />
      </div>
    </header>
  );
}
