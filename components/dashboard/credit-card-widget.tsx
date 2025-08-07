"use client";

import {
  IconPlus,
  IconArrowUp,
  IconArrowsExchange,
  IconDownload,
  IconHistory,
  IconBrandNetflix,
  IconSearch,
} from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function CreditCardWidget() {
  return (
    <div className="space-y-6">
      {/* Credit/Debit Toggle and Add Card */}
      <div className="relative">
        <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input placeholder="Search Anything..." className="pl-10 w-80" />
      </div>
      <div className="flex items-center justify-between">
        <ToggleGroup
          type="single"
          defaultValue="credit"
          className=" p-1 rounded-lg"
        >
          <ToggleGroupItem value="credit" className="text-white ">
            <div className="w-2 h-2  rounded-full mr-2" />
            Credit
          </ToggleGroupItem>
          <ToggleGroupItem value="debit" className="text-gray-400">
            Debit
          </ToggleGroupItem>
        </ToggleGroup>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          <IconPlus className="h-4 w-4 mr-2" />
          Add Card
        </Button>
      </div>

      {/* Credit Card */}
      <Card className=" text-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-6 bg-gray-600 rounded"></div>
            </div>
            <div className="text-right">
              <p className="text-gray-300">**** **** 6541</p>
              <p className="text-sm text-gray-400">12/27</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="w-10 h-8 bg-gray-600 rounded mb-4"></div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-400">Card Holder Name</p>
              <p className="text-white font-semibold">Anjuman Sharear</p>
            </div>
            <div className="text-2xl font-bold text-white">VISA</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-white font-semibold mb-3">Quick Action</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 justify-start"
          >
            <IconPlus className="h-4 w-4 mr-2" />
            Top up
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 justify-start"
          >
            <IconArrowsExchange className="h-4 w-4 mr-2" />
            Transfers
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 justify-start col-span-1"
          >
            <IconDownload className="h-4 w-4 mr-2" />
            Request
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 justify-start"
          >
            <IconHistory className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>

      {/* Daily Limit */}
      <div>
        <h3 className="text-white font-semibold mb-2">Daily Limit</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-white text-xl font-bold">$1200 used</span>
          </div>
          <p className="text-gray-400 text-sm">from $2,000 limit</p>
        </div>
      </div>

      {/* Smart Spending Limits */}
      <div>
        <h3 className="text-white font-semibold mb-4">Smart Spending Limits</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-white text-sm">Shopping (27%)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
            <span className="text-white text-sm">Dinning Out (18%)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <span className="text-white text-sm">Subscriptions (35%)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-white text-sm">Other (20%)</span>
          </div>
        </div>
      </div>

      {/* Bill & Payment */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Bill & Payment</h3>
          <Button size="sm" className="">
            <IconPlus className="h-4 w-4" />
          </Button>
        </div>

        <Card className="">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <IconBrandNetflix className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Netflix Subscription</p>
                <p className="text-gray-400 text-sm">Jul 24, 2025</p>
              </div>
              <IconArrowUp className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-white font-semibold">$25.30</span>
              <Badge
                variant="outline"
                className="bg-gray-700 text-gray-300 border-gray-600"
              >
                Scheduled
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Button
          variant="ghost"
          className="w-full mt-2 text-gray-400 hover:text-white"
        >
          View All
        </Button>
      </div>
    </div>
  );
}
