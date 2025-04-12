import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowRight, CheckCircle, Home, Plus, Search } from "lucide-react"

export default function ChecklistsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span className="text-lg font-semibold">Kuriftu Resort Management</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/inspections" className="text-sm font-medium transition-colors hover:text-primary">
              Inspections
            </Link>
            <Link href="/staff" className="text-sm font-medium transition-colors hover:text-primary">
              Staff
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Checklists</h1>
          <Link href="/checklists/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Checklist
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search checklists..." className="w-full bg-background pl-8" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Checklists</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Daily Room Inspection</CardTitle>
                <CardDescription>Housekeeping Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Standard checklist for daily room inspections including bed making, bathroom cleaning, and amenity
                  restocking.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">15 items</div>
                <Link href="/checklists/1">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Weekly Maintenance Check</CardTitle>
                <CardDescription>Maintenance Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive checklist for weekly maintenance inspections of all rooms and common areas.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">22 items</div>
                <Link href="/checklists/2">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly HVAC Inspection</CardTitle>
                <CardDescription>Maintenance Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detailed checklist for monthly inspection of all HVAC systems throughout the resort.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">18 items</div>
                <Link href="/checklists/3">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pre-Arrival Room Check</CardTitle>
                <CardDescription>Front Desk Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final inspection checklist to be completed before guest arrival to ensure room readiness.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">12 items</div>
                <Link href="/checklists/4">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Daily Room Inspection</CardTitle>
                <CardDescription>Housekeeping Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Standard checklist for daily room inspections including bed making, bathroom cleaning, and amenity
                  restocking.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">15 items</div>
                <Link href="/checklists/1">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Weekly Maintenance Check</CardTitle>
                <CardDescription>Maintenance Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive checklist for weekly maintenance inspections of all rooms and common areas.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">22 items</div>
                <Link href="/checklists/2">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly HVAC Inspection</CardTitle>
                <CardDescription>Maintenance Department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detailed checklist for monthly inspection of all HVAC systems throughout the resort.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">18 items</div>
                <Link href="/checklists/3">
                  <Button variant="ghost" size="sm">
                    View Checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
