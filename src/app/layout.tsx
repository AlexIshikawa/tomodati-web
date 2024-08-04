import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WithNavbar } from "@/components/withNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomodati Fitness Center",
  description: "Lugar para você treinar e se superar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WithNavbar />
        {children}
      </body>
    </html>
  );
}
