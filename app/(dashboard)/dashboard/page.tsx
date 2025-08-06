import type React from "react";

import { CashFlowChart } from "@/components/dashboard/cash-flow-chart";
import { PaymentTable } from "@/components/dashboard/payment-table";
import { CreditCardWidget } from "@/components/dashboard/credit-card-widget";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { FinancialMetrics } from "@/components/dashboard/financial-metrics";

export default function DashboardPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "280px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 gap-6 p-6">
          <div className="flex-1 space-y-6">
            <FinancialMetrics />
            <CashFlowChart />
            <PaymentTable />
          </div>
          <div className="w-80">
            <CreditCardWidget />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
