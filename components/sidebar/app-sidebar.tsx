"use client";

import { useState } from "react";
import type * as React from "react";
import {
  IconHome,
  IconWallet,
  IconTransfer,
  IconHistory,
  IconCreditCard,
  IconArrowsExchange,
  IconPlug,
  IconRobot,
  IconSettings,
  IconHelp,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigationData = {
  main: [
    { title: "Dashboard", icon: IconHome, isActive: true },
    { title: "My Wallet", icon: IconWallet },
    { title: "Transfer", icon: IconTransfer },
    { title: "Transactions", icon: IconHistory },
    { title: "Payment", icon: IconCreditCard },
    { title: "Exchange", icon: IconArrowsExchange },
  ],
  features: [
    { title: "Integration", icon: IconPlug },
    { title: "Automation", icon: IconRobot },
  ],
  tools: [
    { title: "Settings", icon: IconSettings },
    { title: "Help center", icon: IconHelp },
  ],
};

interface TreeSectionProps {
  title: string;
  items: Array<{
    title: string;
    icon: React.ComponentType<any>;
    isActive?: boolean;
  }>;
  defaultOpen?: boolean;
}

function TreeSection({ title, items, defaultOpen = true }: TreeSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="w-full flex items-center justify-between py-2 cursor-pointer">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          {isOpen ? (
            <IconChevronDown className="h-4 w-4 text-gray-400" />
          ) : (
            <IconChevronRight className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="relative">
          {/* Main continuous vertical line */}
          <div
            className="absolute left-0 top-0 w-px bg-gray-700"
            style={{
              height: `${items.length * 44 - 22}px`,
            }}
          />

          <SidebarMenu className="space-y-1">
            {items.map((item, index) => (
              <SidebarMenuItem
                key={item.title}
                className="relative"
                style={{ height: "44px" }}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  {index === items.length - 1 ? (
                    <div
                      className="w-3 h-6"
                      style={{
                        borderLeft: "1px solid rgb(55 65 81)",
                        borderBottom: "1px solid rgb(55 65 81)",
                        borderBottomLeftRadius: "6px",
                        marginTop: "-12px",
                      }}
                    />
                  ) : (
                    <>
                      <div
                        className="w-3 h-3"
                        style={{
                          borderLeft: "1px solid rgb(55 65 81)",
                          borderBottom: "1px solid rgb(55 65 81)",
                          borderBottomLeftRadius: "6px",
                          marginTop: "-6px",
                        }}
                      />

                      <div
                        className="absolute left-0 top-3 w-px bg-gray-700"
                        style={{ height: "41px" }}
                      />
                    </>
                  )}
                </div>

                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  className={`ml-5 mt-2 transition-colors hover:border-t-2 border-orange-500 ${
                    item.isActive ? "text-orange-400 border-t-2" : ""
                  } w-[calc(100%-1.25rem)]`}
                >
                  <a
                    href="#"
                    className="flex items-center gap-3 py-2 px-3 rounded-md"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <div className="max-w-[90%] max-h-[95%] h-full w-full mx-auto rounded-lg bg-[hsl(240,5.0847%,11.5686%)]">
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm" />
            </div>
            <SidebarTrigger className="-ml-1 text-gray-400 hover:text-white" />
          </div>
        </SidebarHeader>

        <ScrollArea className="h-full p-0 pr-4 pb-10">
          <SidebarContent className="pl-4 py-4 space-y-6">
            <TreeSection title="MAIN" items={navigationData.main} />
            <TreeSection title="FEATURES" items={navigationData.features} />
            <TreeSection title="TOOLS" items={navigationData.tools} />
          </SidebarContent>
        </ScrollArea>
      </div>
    </Sidebar>
  );
}
