"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/staff"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/staff" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Staff Directory
      </Link>
      <Link
        href="/teams"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/teams" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Teams
      </Link>
      <Link
        href="/reviews"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/reviews" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Reviews
      </Link>
      <Link
        href="/settings"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/settings" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Settings
      </Link>
    </nav>
  )
}
