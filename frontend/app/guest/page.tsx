import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, ClipboardList, Settings } from "lucide-react"
import heroBackground from "../assets/hero_background.jpg"
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          style={{
            backgroundImage: `url(${heroBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">
                  Digitized Resort Inspection & Management
                </h1>
                <p className="mx-auto text-white max-w-[700px] text-gray-500 md:text-xl">
                  Simplify and standardize inspections across Kuriftu's resorts with our digital tool.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/inspections/new">
                  <Button className="bg-blue-800 text-white">
                    Start New Inspection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline">View Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 justify-center mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <ClipboardList className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Digital Checklists</CardTitle>
                    <CardDescription>Mobile-friendly inspection tools</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create standardized checklists for housekeeping, maintenance, F&B, and more. Access them from any
                    device.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/checklists">
                    <Button variant="ghost" size="sm">
                      View Checklists
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Issue Tracking</CardTitle>
                    <CardDescription>Report and resolve problems</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Report issues with photos, assign tasks to departments, and track resolution status in real-time.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/issues">
                    <Button variant="ghost" size="sm">
                      View Issues
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Settings className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>Insights and performance tracking</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitor recurring issues, track staff performance, and identify trends to improve operations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm">
                      View Dashboard
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Kuriftu Resorts. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
