import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import './globals.css';
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "il gusto italiano",
  description: "restaurant comida italiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#FFEDD5]")}>
        {children}
      </body>
    </html>
  );
}
