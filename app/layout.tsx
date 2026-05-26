import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AppFooter } from "@/app/_footer";
import { AppHeader } from "@/app/_header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My CGPA Calculator",
  description: "Calculate your CGPA with ease using our My CGPA Calculator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        "dark",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      lang="en"
    >
      <body className="flex flex-col">
        <main>
          <div className="mx-auto flex min-h-dvh flex-col">
            <AppHeader />
            <div className="container mx-auto flex-1 px-5">{children}</div>
            <AppFooter />
          </div>
        </main>
      </body>
    </html>
  );
}
