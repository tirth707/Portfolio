import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tirth Patel | Portfolio",
  description: "Full Stack Software Engineer & B.Tech IT Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}