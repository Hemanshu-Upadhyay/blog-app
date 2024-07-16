import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
const inter = Inter({ subsets: ["latin"] });
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "InspireScape",
  description: "Where the Best write ",
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
