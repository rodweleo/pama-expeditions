import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "../components/ui/main-header";
import MainFooter from "../components/ui/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pama Expeditions",
  description: "Pama Expeditions is a Tour & Travel company based in Kenya. We deal with stays, excursions, safari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex-grow bg-[#FAF3E0] ${inter.className}`}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
