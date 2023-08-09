"use client";
import TopCards from "@/features/Dashboard/TopCards";
import BarChart from "@/features/Dashboard/BarChart";
import RecentOrdersOnSidebar from "@/features/Dashboard/RecentOrders/components/SidebarOnDashBoard";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { logout } = useAuth0();
  return (
    <>
      <TopCards />
      <div className="grid gap-4 p-4 md:grid-cols-3 grid-cols1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Button
        </button>
        <BarChart />
        <RecentOrdersOnSidebar />
      </div>
    </>
  );
}
