import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="bg-gray-100 min-h-screen">
          <Sidebar>
            <main className="bg-gray-100 min-h-screen">
              <Header />
              {children}
            </main>
          </Sidebar>
        </main>
      </body>
    </html>
  );
}
