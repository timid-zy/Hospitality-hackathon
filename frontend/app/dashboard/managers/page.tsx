"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { ArrowUpRight, CheckCircle, Clock, Home, PenToolIcon as Tool, Users } from "lucide-react"

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("7d")

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
            <Link href="/inspections" className="text-sm font-medium transition-colors hover:text-primary">
              Inspections
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
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+14% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98</div>
              <p className="text-xs text-muted-foreground">77% resolution rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29</div>
              <p className="text-xs text-muted-foreground">23% of total issues</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8 days</div>
              <p className="text-xs text-muted-foreground">-0.3 days from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="issues" className="mb-6">
          <TabsList>
            <TabsTrigger value="issues">Recurring Issues</TabsTrigger>
            <TabsTrigger value="departments">Department Performance</TabsTrigger>
            <TabsTrigger value="rooms">Room Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="issues" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Recurring Issues</CardTitle>
                <CardDescription>Most common issues reported across all resorts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-full max-w-md">
                      <div className="text-sm font-medium">Plumbing Issues</div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[68%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-medium">68%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full max-w-md">
                      <div className="text-sm font-medium">Electrical Problems</div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[45%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-medium">45%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full max-w-md">
                      <div className="text-sm font-medium">Housekeeping Concerns</div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[37%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-medium">37%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full max-w-md">
                      <div className="text-sm font-medium">Amenity Replacements</div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[28%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-medium">28%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full max-w-md">
                      <div className="text-sm font-medium">HVAC Problems</div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[16%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="ml-auto font-medium">16%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>AI-Detected Patterns</CardTitle>
                <CardDescription>Potential underlying issues detected by AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="font-medium">Room 203 - Potential Structural Issue</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      AI has detected a pattern of recurring plumbing issues in this room. Analysis suggests a potential
                      underlying structural problem with the water pipes in the wall. Recommend a comprehensive
                      inspection.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">High Priority</div>
                      <div className="text-xs text-muted-foreground">Detected from 8 related issues</div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="font-medium">Rooms 305-312 - HVAC System Failure</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pattern analysis shows increasing frequency of AC-related complaints in the north wing. Data
                      suggests a potential central HVAC system failure affecting multiple rooms.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">High Priority</div>
                      <div className="text-xs text-muted-foreground">Detected from 12 related issues</div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="font-medium">Housekeeping Schedule Optimization</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Analysis of guest complaints shows a pattern of housekeeping-related issues during peak check-in
                      hours (2-4 PM). Recommend adjusting housekeeping schedules to prioritize rooms with imminent
                      check-ins.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Recommendation</div>
                      <div className="text-xs text-muted-foreground">Based on 30-day analysis</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="departments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Average resolution time by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <Tool className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm font-medium">Maintenance</div>
                    </div>
                    <div className="ml-auto">1.2 days</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <div className="text-sm font-medium">Housekeeping</div>
                    </div>
                    <div className="ml-auto">0.8 days</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                        <path d="M12 8v8" />
                        <path d="M8 12h8" />
                      </svg>
                      <div className="text-sm font-medium">IT Support</div>
                    </div>
                    <div className="ml-auto">2.1 days</div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2" />
                        <path d="M12 2v20" />
                      </svg>
                      <div className="text-sm font-medium">F&B</div>
                    </div>
                    <div className="ml-auto">1.5 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rooms" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Room Issue Analysis</CardTitle>
                <CardDescription>Rooms with the most reported issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Room 203</div>
                    <div className="ml-auto">12 issues</div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Room 118</div>
                    <div className="ml-auto">9 issues</div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Room 305</div>
                    <div className="ml-auto">8 issues</div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Room 412</div>
                    <div className="ml-auto">7 issues</div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm font-medium">Room 127</div>
                    <div className="ml-auto">6 issues</div>
                    <Button variant="ghost" size="sm" className="ml-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Issues</CardTitle>
              <CardDescription>Latest reported issues across all resorts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Leaking faucet in Room 205</div>
                    <div className="text-sm text-muted-foreground">Reported 2 hours ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pending</div>
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">TV not working in Room 118</div>
                    <div className="text-sm text-muted-foreground">Reported 5 hours ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Resolved</div>
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Missing towels in Room 302</div>
                    <div className="text-sm text-muted-foreground">Reported 8 hours ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Resolved</div>
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">AC not cooling in Room 412</div>
                    <div className="text-sm text-muted-foreground">Reported 1 day ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">In Progress</div>
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Staff Performance</CardTitle>
              <CardDescription>Top performing staff members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Ahmed Kemal</div>
                      <div className="text-sm text-muted-foreground">Maintenance</div>
                    </div>
                  </div>
                  <div className="ml-auto text-sm">
                    <div className="font-medium">24 issues resolved</div>
                    <div className="text-muted-foreground">Avg. 0.8 days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Sara Tadesse</div>
                      <div className="text-sm text-muted-foreground">Housekeeping</div>
                    </div>
                  </div>
                  <div className="ml-auto text-sm">
                    <div className="font-medium">19 issues resolved</div>
                    <div className="text-muted-foreground">Avg. 0.5 days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Daniel Bekele</div>
                      <div className="text-sm text-muted-foreground">IT Support</div>
                    </div>
                  </div>
                  <div className="ml-auto text-sm">
                    <div className="font-medium">15 issues resolved</div>
                    <div className="text-muted-foreground">Avg. 1.2 days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Meron Haile</div>
                      <div className="text-sm text-muted-foreground">F&B</div>
                    </div>
                  </div>
                  <div className="ml-auto text-sm">
                    <div className="font-medium">12 issues resolved</div>
                    <div className="text-muted-foreground">Avg. 0.9 days</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
