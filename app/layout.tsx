import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bonsai Management — Property Management for Single-Family Homes",
  description:
    "Bonsai Management is a residential property management company specializing in single-family rental homes in Columbus, Georgia. Growing steadily, one home at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
