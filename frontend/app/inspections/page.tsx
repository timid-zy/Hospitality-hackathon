import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowRight, CheckCircle, Clock, Home, Plus, Search } from "lucide-react"

export default function InspectionsPage() {
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
            <Link href="/checklists" className="text-sm font-medium transition-colors hover:text-primary">
              Checklists
            </Link>
            <Link href="/staff" className="text-sm font-medium transition-colors hover:text-primary">
              Staff
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Inspections</h1>
          <Link href="">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Inspection
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search inspections..." className="w-full bg-background pl-8" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Inspections</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 205 - Plumbing Inspection</CardTitle>
                <CardDescription>Created on April 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-yellow-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Pending</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guest reported leaking faucet in bathroom. Requires plumbing inspection and repair.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Maintenance</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 118 - Electronics Inspection</CardTitle>
                <CardDescription>Created on April 9, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  TV not working properly. IT team replaced HDMI cable and reset the system.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: IT Support</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 302 - Housekeeping Inspection</CardTitle>
                <CardDescription>Created on April 9, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Missing towels and toiletries. Housekeeping team restocked all items.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Housekeeping</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 412 - HVAC Inspection</CardTitle>
                <CardDescription>Created on April 8, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>In Progress</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  AC not cooling properly. Maintenance team checking refrigerant levels and filters.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Maintenance</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pending" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 205 - Plumbing Inspection</CardTitle>
                <CardDescription>Created on April 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-yellow-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Pending</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guest reported leaking faucet in bathroom. Requires plumbing inspection and repair.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Maintenance</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="in-progress" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 412 - HVAC Inspection</CardTitle>
                <CardDescription>Created on April 8, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>In Progress</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  AC not cooling properly. Maintenance team checking refrigerant levels and filters.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Maintenance</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 118 - Electronics Inspection</CardTitle>
                <CardDescription>Created on April 9, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  TV not working properly. IT team replaced HDMI cable and reset the system.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: IT Support</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 302 - Housekeeping Inspection</CardTitle>
                <CardDescription>Created on April 9, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Missing towels and toiletries. Housekeeping team restocked all items.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Assigned to: Housekeeping</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="my-tasks" className="space-y-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 205 - Plumbing Inspection</CardTitle>
                <CardDescription>Created on April 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-yellow-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Pending</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guest reported leaking faucet in bathroom. Requires plumbing inspection and repair.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Priority: High</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Room 412 - HVAC Inspection</CardTitle>
                <CardDescription>Created on April 8, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>In Progress</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  AC not cooling properly. Maintenance team checking refrigerant levels and filters.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Priority: Medium</div>
                <Link href="">
                  <Button variant="ghost" size="sm">
                    View Details
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
