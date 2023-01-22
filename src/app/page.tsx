import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";


export default function Home() {
  return (
    <>
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </>
  );
}
