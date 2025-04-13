import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InspectionsProvider } from "../context/InspectionsContext";
import Link from "next/link";
import image from "./assets/kuriftu.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resourius",
  description: "A Hotel Management System with Resource Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <InspectionsProvider>
          {/* Shared Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
            <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src={image.src}
                  alt="Kuriftu Logo"
                  className="h-8 w-8 rounded-full"
                />
                {/* <Home className="h-8 w-8 text-primary" /> */}
                {/* <span className="text-lg font-semibold">Resourius</span> */}
                <span className="text-lg font-semibold">Resourius</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/managers/issues"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Issues
                </Link>
                <Link
                  href="/managers/dashboard"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/managers/checklists"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Checklists
                </Link>
                <Link
                  href="/managers/staff"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Manager
                </Link>
                <Link
                  href="/staff"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Staff
                </Link>
              </nav>
            </div>
          </header>

          {/* Page Content */}
          <main className="min-h-screen flex flex-col pt-16">{children}</main>
        </InspectionsProvider>
      </body>
    </html>
  );
}
