import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
const inter = Inter({ subsets: ["latin"] });
import { WebVitals } from "./_components/web-vitals";

export const metadata: Metadata = {
  title: "InspireScape",
  description: "Where the Best write ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          <WebVitals />
          {children}
        </>
      </body>
    </html>
  );
}
