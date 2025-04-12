import type React from "react"
import { StaffNavbar } from "@/components/staff/staff-navbar"

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <StaffNavbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
