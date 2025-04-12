"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {
  ArrowLeft,
  Calendar,
  Home,
  Mail,
  Phone,
  Star,
  PenToolIcon as Tool,
  User,
} from "lucide-react";

export default function StaffDetailPage() {
  const [timeRange, setTimeRange] = useState("30d");

  // Mock data - in a real app, this would come from an API
  const staff = {
    id: 1,
    name: "Ahmed Kemal",
    department: "Maintenance",
    email: "ahmed.kemal@kuriftu.com",
    phone: "+251 91 234 5678",
    joinDate: "January 15, 2023",
    performance: {
      rating: 4.8,
      issuesResolved: 24,
      avgResolutionTime: 0.8,
      completedOnTime: "92%",
    },
    recentIssues: [
      {
        id: "1",
        title: "Leaking faucet in Room 205",
        status: "Completed",
        date: "April 10, 2025",
        time: "0.5 days",
      },
      {
        id: "2",
        title: "Broken AC in Room 412",
        status: "In Progress",
        date: "April 8, 2025",
        time: "2 days",
      },
      {
        id: "3",
        title: "Light fixture replacement in Room 118",
        status: "Completed",
        date: "April 5, 2025",
        time: "0.7 days",
      },
      {
        id: "4",
        title: "Toilet clog in Room 302",
        status: "Completed",
        date: "April 3, 2025",
        time: "0.3 days",
      },
      {
        id: "5",
        title: "Door lock malfunction in Room 127",
        status: "Completed",
        date: "March 30, 2025",
        time: "1.2 days",
      },
    ],
    skills: ["Plumbing", "Electrical", "HVAC", "Carpentry", "Basic Repairs"],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span className="text-lg font-semibold">
              Resourius
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/inspections"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Inspections
            </Link>
            <Link
              href="/checklists"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Checklists
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/staff">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Staff
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{staff.name}</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Staff Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Tool className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{staff.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{staff.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{staff.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined: {staff.joinDate}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {staff.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${
                          star <= Math.floor(staff.performance.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  {staff.performance.rating} out of 5
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">
                      {staff.performance.issuesResolved}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Issues Resolved
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">
                      {staff.performance.avgResolutionTime} days
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Avg. Resolution Time
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">
                      {staff.performance.completedOnTime}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Completed On Time
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">Top 10%</div>
                    <div className="text-xs text-muted-foreground">
                      Department Ranking
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Issues</CardTitle>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staff.recentIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="font-medium">{issue.title}</div>
                        <div className="text-sm text-muted-foreground">
                          Reported on {issue.date}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`text-xs px-2 py-1 rounded-full ${
                            issue.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : issue.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {issue.status}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {issue.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Issues
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>
                  Issue resolution time over the past 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end gap-2">
                  {/* Mock chart bars */}
                  {[
                    0.9, 1.2, 0.7, 0.5, 0.8, 1.0, 0.6, 0.4, 0.7, 0.9, 0.5, 0.3,
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className="w-full bg-primary rounded-t"
                        style={{ height: `${(value / 1.5) * 100}%` }}
                      />
                      <div className="text-xs text-muted-foreground">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>
                  Tools and supplies needed for pending tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-red-600">
                          !
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">
                          HVAC Refrigerant (R-410A)
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Required for Room 412 AC repair
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Request
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-amber-600">
                          !
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">Pipe Wrench Set</div>
                        <div className="text-sm text-muted-foreground">
                          Currently in use by another team
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Request
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-green-600">
                          ✓
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">Plumbing Repair Kit</div>
                        <div className="text-sm text-muted-foreground">
                          Available in maintenance storage
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Reserve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="assigned">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="assigned">Assigned Tasks</TabsTrigger>
                <TabsTrigger value="completed">Completed Tasks</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              <TabsContent value="assigned" className="space-y-4 mt-4">
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium">Broken AC in Room 412</div>
                      <div className="text-sm text-muted-foreground">
                        Assigned on April 8, 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        In Progress
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground py-8">
                  No other tasks currently assigned
                </div>
              </TabsContent>
              <TabsContent value="completed" className="space-y-4 mt-4">
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium">
                        Leaking faucet in Room 205
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Completed on April 10, 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Completed
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium">
                        Light fixture replacement in Room 118
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Completed on April 5, 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Completed
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <div className="font-medium">Toilet clog in Room 302</div>
                      <div className="text-sm text-muted-foreground">
                        Completed on April 3, 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Completed
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="feedback" className="space-y-4 mt-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 5
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm font-medium">
                      Room 205 - Leaking faucet
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Ahmed was very professional and fixed the issue quickly. He
                    explained what caused the problem and gave tips to prevent
                    it in the future."
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    April 10, 2025
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 4
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm font-medium">
                      Room 118 - Light fixture replacement
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Good service, fixed the light quickly. Would have been
                    perfect if he had cleaned up a bit better afterward."
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    April 5, 2025
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= 5
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm font-medium">
                      Room 302 - Toilet clog
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Ahmed responded very quickly and resolved the issue
                    immediately. Very satisfied with the service."
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    April 3, 2025
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
