import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowRight, Home, Plus, Search, Users } from "lucide-react"

export default function StaffPage() {
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
            <Link href="/checklists" className="text-sm font-medium transition-colors hover:text-primary">
              Checklists
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Staff Management</h1>
          <Link href="/staff/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Staff Member
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search staff members..." className="w-full bg-background pl-8" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Staff</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="housekeeping">Housekeeping</TabsTrigger>
            <TabsTrigger value="it">IT Support</TabsTrigger>
            <TabsTrigger value="fb">F&B</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Ahmed Kemal</CardTitle>
                      <CardDescription>Maintenance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>24</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.8 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.8/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/1">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Sara Tadesse</CardTitle>
                      <CardDescription>Housekeeping</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>19</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.5 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.9/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/2">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Daniel Bekele</CardTitle>
                      <CardDescription>IT Support</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>15</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>1.2 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.5/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/3">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Meron Haile</CardTitle>
                      <CardDescription>F&B</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>12</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.9 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.6/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/4">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Abebe Kebede</CardTitle>
                      <CardDescription>Maintenance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>10</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>1.1 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.3/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/5">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Tigist Alemu</CardTitle>
                      <CardDescription>Housekeeping</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>9</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.6 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.7/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/6">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Ahmed Kemal</CardTitle>
                      <CardDescription>Maintenance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>24</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.8 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.8/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/1">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Abebe Kebede</CardTitle>
                      <CardDescription>Maintenance</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>10</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>1.1 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.3/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/5">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="housekeeping" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Sara Tadesse</CardTitle>
                      <CardDescription>Housekeeping</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>19</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.5 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.9/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/2">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Tigist Alemu</CardTitle>
                      <CardDescription>Housekeeping</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>9</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.6 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.7/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/6">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="it" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Daniel Bekele</CardTitle>
                      <CardDescription>IT Support</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>15</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>1.2 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.5/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/3">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fb" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Meron Haile</CardTitle>
                      <CardDescription>F&B</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Issues Resolved:</div>
                    <div>12</div>
                    <div className="text-muted-foreground">Avg. Resolution Time:</div>
                    <div>0.9 days</div>
                    <div className="text-muted-foreground">Performance Rating:</div>
                    <div>4.6/5</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/staff/4">
                    <Button variant="ghost" size="sm">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
