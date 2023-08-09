"use client";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <main className="min-h-screen bg-gray-100">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
