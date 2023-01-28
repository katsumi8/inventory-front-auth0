import TopCards from "@/components/Dashboard/TopCards";
import BarChart from "@/components/Dashboard/BarChart";
import RecentOrders from "@/components/Dashboard/RecentOrders";


export default function Home() {
  return (
    <>
      <TopCards />
      <div className="grid gap-4 p-4 md:grid-cols-3 grid-cols1">
        <BarChart />
        <RecentOrders />
      </div>
    </>
  );
}
