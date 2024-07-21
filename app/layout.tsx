import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Mantine Dev
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bartistry",
  description: "A Portfolio Website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MantineProvider>
          {/* <div className="fixed top-0 inset-x-0 z-50 w-full max-w-[1240px] mx-auto pt-5 bg-black max-[900px]:border-b border-[rgba(255,255,255,0.15)]">
            <Navbar />
          </div> */}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
