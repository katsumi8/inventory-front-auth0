"use client";
import TopCards from "@/features/Dashboard/TopCards";
import BarChart from "@/features/Dashboard/BarChart";
import RecentOrdersOnSidebar from "@/features/Dashboard/RecentOrders/components/SidebarOnDashBoard";

export default function Home() {
  return (
    <>
      <TopCards />
      <div className="grid-cols1 grid gap-4 p-4 md:grid-cols-3">
        <BarChart />
        <RecentOrdersOnSidebar />
      </div>
    </>
  );
}
