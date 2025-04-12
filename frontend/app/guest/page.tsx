import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
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
                  Welcome to Kuriftu Resorts
                </h1>
                <p className="mx-auto text-white max-w-[700px] text-gray-500 md:text-xl">
                  Experience luxury and comfort at our world-class resort. Enjoy exceptional hospitality and breathtaking views.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="guest/createIssues">
                  <Button className="bg-blue-800 text-white">
                    Report an Issue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="guest/feedback">
                  <Button variant="outline">Give Feedback</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 justify-center mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>About Our Hotel</CardTitle>
                  <CardDescription>Discover the Kuriftu Experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Kuriftu Resorts offers a unique blend of luxury and nature. From serene lakeside views to exquisite dining, we ensure your stay is unforgettable.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Guest Services</CardTitle>
                  <CardDescription>We're here to make your stay perfect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our dedicated team is available 24/7 to assist you with any needs. Let us know how we can enhance your experience.
                  </p>
                </CardContent>
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
