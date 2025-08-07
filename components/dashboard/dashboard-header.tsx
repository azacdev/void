"use client";

import { ClockIcon, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center bg-card rounded-full p-2">
          <ClockIcon className="size-4" />
        </button>

        <button className="flex items-center justify-center bg-card rounded-full p-2">
          <Mail className="size-4" />
        </button>

        <Avatar className="size-7">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-orange-500">A</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
