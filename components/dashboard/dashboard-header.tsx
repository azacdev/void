"use client";

import { IconSearch, IconBell, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-white text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search Anything..."
            className="pl-10 w-80 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <IconBell className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white"
        >
          <IconMail className="h-5 w-5" />
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-orange-500 text-white">
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
