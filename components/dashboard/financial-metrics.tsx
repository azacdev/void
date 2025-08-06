"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconSettings, IconDownload, IconPlus } from "@tabler/icons-react";

export function FinancialMetrics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
          >
            <IconSettings className="h-4 w-4 mr-2" />
            Manage Balance
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
          >
            <IconDownload className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <IconPlus className="h-4 w-4 mr-2" />
            New Payment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <div className="flex items-center gap-2">
                <p className="text-white text-2xl font-bold">$19,270.56</p>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                  +8%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Total Saving</p>
              <div className="flex items-center gap-2">
                <p className="text-white text-2xl font-bold">$19,270.56</p>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                  +8%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Monthly Expense</p>
              <div className="flex items-center gap-2">
                <p className="text-white text-2xl font-bold">$19,270.56</p>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                  +8%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
