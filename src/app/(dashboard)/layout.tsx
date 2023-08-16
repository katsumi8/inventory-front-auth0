import Header from "@/features/Dashboard/Common/Header";
import Sidebar from "@/features/Dashboard/Common/Sidebar";

export default function RootLayoutForDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <main className="mx-2 min-h-screen bg-gray-100">
        <Header />
        {children}
      </main>
    </Sidebar>
  );
}
