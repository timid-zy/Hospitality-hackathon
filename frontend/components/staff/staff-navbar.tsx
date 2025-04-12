import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import image from "../../app/assets/kuriftu.jpg"

export function StaffNavbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2">
            <Link href="/staff" className="flex items-center gap-2">
              <div className="text-white p-2 rounded-md">
                <img src={image.src} alt="Company Logo" className="h-8 w-8 object-cover" />
              </div>
              <span className="font-bold text-xl">Resourius</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/staff"
              className="flex items-center gap-1 text-sm font-medium hover:text-emerald-600 transition-colors"
            >
                Home
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
            </Button>
            <Link href="/staff/profile">
              <Button variant="outline" className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Staff avatar" />
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">John Doe</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
