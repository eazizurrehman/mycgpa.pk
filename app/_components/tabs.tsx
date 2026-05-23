import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/app/_shadcn/tabs";

interface Tab {
  value: string;
  label: string;
  url: string;
  icon: React.ElementType;
}

export function AppTabs({ tabs, activeTab }: { tabs: Tab[]; activeTab: Tab }) {
  return (
    <Tabs className="h-full" value={activeTab.value}>
      <TabsList className="min-h-full" variant="line">
        {tabs.map((tab) => (
          <TabsTrigger className="h-full p-0" key={tab.value} value={tab.value}>
            <Link className="flex h-full items-center gap-2 p-2" href={tab.url}>
              <tab.icon />
              {tab.label}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
