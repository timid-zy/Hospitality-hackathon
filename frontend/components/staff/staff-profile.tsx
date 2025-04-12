"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { StaffHeader } from "@/components/staff/staff-header"
import { Award, Calendar, CheckCircle2, Clock, FileText, Star, ThumbsUp, TrendingUp, Users } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartLegend, ChartTitle } from "@/components/staff/staff-chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line, Tooltip } from "recharts"

// Mock data for performance metrics
const performanceData = [
  { month: "Jan", tasks: 45, issues: 12, avg: 40 },
  { month: "Feb", tasks: 52, issues: 15, avg: 40 },
  { month: "Mar", tasks: 48, issues: 10, avg: 40 },
  { month: "Apr", tasks: 61, issues: 8, avg: 40 },
  { month: "May", tasks: 55, issues: 14, avg: 40 },
  { month: "Jun", tasks: 67, issues: 9, avg: 40 },
]

// Mock data for feedback ratings
const feedbackData = [
  { category: "Cleanliness", rating: 4.8, total: 5 },
  { category: "Timeliness", rating: 4.5, total: 5 },
  { category: "Attention to Detail", rating: 4.7, total: 5 },
  { category: "Guest Interaction", rating: 4.9, total: 5 },
  { category: "Problem Solving", rating: 4.6, total: 5 },
]

// Mock data for recent feedback
const recentFeedback = [
  {
    id: 1,
    guest: "Emma Johnson",
    room: "205",
    date: "May 15, 2023",
    rating: 5,
    comment:
      "John was extremely helpful with the plumbing issue in our bathroom. He fixed it quickly and was very professional.",
  },
  {
    id: 2,
    guest: "Michael Smith",
    room: "310",
    date: "May 12, 2023",
    rating: 4,
    comment: "Very responsive to our request for additional towels and toiletries. Could have been a bit quicker.",
  },
  {
    id: 3,
    guest: "Sarah Williams",
    room: "412",
    date: "May 10, 2023",
    rating: 5,
    comment: "Fixed the electrical issue in our room promptly. Great service!",
  },
]

export default function StaffProfile() {
  return (
    <div className="container mx-auto px-4 py-6">
      <StaffHeader />

      <div className="mt-6 grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Staff avatar" />
                <AvatarFallback className="text-2xl">JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Housekeeping Department</p>

                <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Staff ID: HK-1234</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Joined: Jan 15, 2022</span>
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    <span>Senior Staff</span>
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-muted-foreground">Task Completion</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-xs text-muted-foreground">Guest Rating</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">278</div>
                    <div className="text-xs text-muted-foreground">Tasks Completed</div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">53</div>
                    <div className="text-xs text-muted-foreground">Issues Resolved</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="history">Task History</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer>
                    <ChartTitle>Monthly Task Completion</ChartTitle>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<ChartTooltip />} />
                        <ChartLegend />
                        <Bar dataKey="tasks" name="Routine Tasks" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="issues" name="Issues Resolved" fill="#f97316" radius={[4, 4, 0, 0]} />
                        <Line dataKey="avg" name="Department Average" stroke="#6b7280" strokeWidth={2} dot={false} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-green-100 text-green-800 p-2 rounded-full">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Task Efficiency</div>
                            <div className="text-2xl font-bold">92%</div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600">+5% from last month</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Response Time</div>
                            <div className="text-2xl font-bold">15 min</div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600">-3 min from last month</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-100 text-purple-800 p-2 rounded-full">
                            <ThumbsUp className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Guest Satisfaction</div>
                            <div className="text-2xl font-bold">96%</div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600">+2% from last month</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Skills & Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">Room Inspection</div>
                      <div className="text-sm text-muted-foreground">Expert</div>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">Maintenance</div>
                      <div className="text-sm text-muted-foreground">Advanced</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">Guest Relations</div>
                      <div className="text-sm text-muted-foreground">Expert</div>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">Problem Solving</div>
                      <div className="text-sm text-muted-foreground">Advanced</div>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Hospitality Management</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">First Aid Certified</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Customer Service Excellence
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Safety Procedures</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Guest Feedback Ratings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer>
                    <ChartTitle>Rating by Category</ChartTitle>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={feedbackData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 5]} />
                        <YAxis dataKey="category" type="category" width={150} />
                        <Tooltip content={<ChartTooltip />} />
                        <ChartLegend />
                        <Bar dataKey="rating" name="Your Rating" fill="#4f46e5" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Guest Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <Card key={feedback.id} className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium">
                              Room {feedback.room} - {feedback.guest}
                            </div>
                            <div className="text-sm text-muted-foreground">{feedback.date}</div>
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < feedback.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm mt-2">{feedback.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  View All Feedback
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Task History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">May 2023</h3>
                    <Badge variant="outline">67 Tasks Completed</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                      <div className="bg-green-100 text-green-800 p-2 rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Room 205 Inspection</div>
                        <div className="text-sm text-muted-foreground">Completed on May 15, 2023</div>
                      </div>
                      <Badge>Routine</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Plumbing Issue - Room 205</div>
                        <div className="text-sm text-muted-foreground">Resolved on May 15, 2023</div>
                      </div>
                      <Badge variant="secondary">Issue</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                      <div className="bg-green-100 text-green-800 p-2 rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Room 310 Inspection</div>
                        <div className="text-sm text-muted-foreground">Completed on May 12, 2023</div>
                      </div>
                      <Badge>Routine</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Missing Supplies - Room 310</div>
                        <div className="text-sm text-muted-foreground">Resolved on May 12, 2023</div>
                      </div>
                      <Badge variant="secondary">Issue</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                      <div className="bg-green-100 text-green-800 p-2 rounded-full">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Room 412 Inspection</div>
                        <div className="text-sm text-muted-foreground">Completed on May 10, 2023</div>
                      </div>
                      <Badge>Routine</Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View More History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
