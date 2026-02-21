import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SocialDock from "@/components/SocialDock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patel Tirth | Portfolio",
  description: "B.Tech IT Student & Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-white selection:text-black`}>
        <Cursor />
        <SocialDock />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}