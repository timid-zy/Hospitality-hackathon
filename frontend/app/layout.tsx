"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InspectionsProvider } from "../context/InspectionsContext";
import Link from "next/link";
import image from './assets/kuriftu.jpg'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Resourius",
//   description: "A Hotel Management System with Resource Management",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <InspectionsProvider>
          {children}
        </InspectionsProvider>
      </body>
    </html>
  );
}
