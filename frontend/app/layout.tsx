import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/header";
import Sidebar from "@/components/Layout/sidebar";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Ninja",
  description:
    "Experience a freelancing platform with no fees or hidden charges. Your hard work, your full pay. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="flex">
          <Sidebar />
          <div style={{ overflow: "auto" }} className="lg:p-4 w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
