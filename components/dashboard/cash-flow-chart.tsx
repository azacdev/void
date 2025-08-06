"use client";

import * as React from "react";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { month: "Jan", value: 8 },
  { month: "Feb", value: 12 },
  { month: "Mar", value: 6 },
  { month: "Apr", value: 15 },
  { month: "May", value: 10 },
  { month: "Jun", value: 8 },
  { month: "Jul", value: 16 },
  { month: "Aug", value: 4 },
  { month: "Sep", value: 12 },
  { month: "Oct", value: 14 },
  { month: "Nov", value: 9 },
  { month: "Dec", value: 11 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
};

export function CashFlowChart() {
  const [activeTab, setActiveTab] = React.useState("income");

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white text-lg">Cash Flow</CardTitle>
            <p className="text-white text-2xl font-bold mt-1">$19,270.56</p>
          </div>
          <Select defaultValue="weekly">
            <SelectTrigger className="w-32 bg-gray-700 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 border-gray-600">
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            variant={activeTab === "income" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("income")}
            className={
              activeTab === "income"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Income
          </Button>
          <Button
            variant={activeTab === "expense" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("expense")}
            className={
              activeTab === "expense"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Expense
          </Button>
          <Button
            variant={activeTab === "saving" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("saving")}
            className={
              activeTab === "saving"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }
          >
            Saving
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="value"
                fill="url(#gradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
