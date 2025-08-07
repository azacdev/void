"use client";

import { IconSearch, IconDownload } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const paymentData = [
  {
    id: "PAY-12345XYZ",
    user: {
      name: "Savannah Nguyen",
      avatar: "/placeholder-user.jpg",
    },
    amount: "$1,164.99 USD",
    period: "Jun 10 - Jun 15",
    status: "Received",
  },
  {
    id: "TXN-98765A9",
    user: {
      name: "Jordan Lee",
      avatar: "/placeholder-user.jpg",
    },
    amount: "$1,072.98 USD",
    period: "Jun 16 - Jun 17",
    status: "Failed",
  },
  {
    id: "INV-56789LMN",
    user: {
      name: "Alexis Kim",
      avatar: "/placeholder-user.jpg",
    },
    amount: "$977.88 USD",
    period: "Jun 20 - Jun 29",
    status: "Processed",
  },
];

export function PaymentTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search Anything..."
            className="pl-10 w-80  text-white placeholder:text-gray-400"
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className=" text-white">
            <IconDownload className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" className=" text-white">
            <IconDownload className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="w-12">
                <Checkbox className="border-gray-600" />
              </TableHead>
              <TableHead className="text-gray-300">Payment ID</TableHead>
              <TableHead className="text-gray-300">User</TableHead>
              <TableHead className="text-gray-300">Total Amount</TableHead>
              <TableHead className="text-gray-300">Payment Period</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentData.map((payment) => (
              <TableRow
                key={payment.id}
                className="border-gray-700 hover:bg-gray-700/50"
              >
                <TableCell>
                  <Checkbox className="border-gray-600" />
                </TableCell>
                <TableCell className="text-white font-mono">
                  {payment.id}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={payment.user.avatar || "/placeholder.svg"}
                      />
                      <AvatarFallback className="bg-orange-500 text-white">
                        {payment.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-white">{payment.user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-white font-semibold">
                  {payment.amount}
                </TableCell>
                <TableCell className="text-gray-300">
                  {payment.period}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      payment.status === "Received"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : payment.status === "Failed"
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    }
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
