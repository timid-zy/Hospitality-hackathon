"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"

// Mock data for staff members
const staffMembers = [
  {
    id: 1,
    name: "Maria Rodriguez",
    department: "Housekeeping",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.9,
      timeliness: 4.7,
      communication: 4.6,
      problemSolving: 4.5,
      customerService: 4.8,
    },
    overallRating: 4.8,
    reviewCount: 124,
    topSkill: "Cleanliness",
  },
  {
    id: 2,
    name: "James Wilson",
    department: "Maintenance",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.3,
      timeliness: 4.5,
      communication: 4.2,
      problemSolving: 4.8,
      customerService: 4.4,
    },
    overallRating: 4.5,
    reviewCount: 98,
    topSkill: "Problem Solving",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    department: "Front Desk",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.5,
      timeliness: 4.6,
      communication: 4.9,
      problemSolving: 4.4,
      customerService: 4.7,
    },
    overallRating: 4.7,
    reviewCount: 112,
    topSkill: "Communication",
  },
  {
    id: 4,
    name: "David Chen",
    department: "Housekeeping",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.7,
      timeliness: 4.4,
      communication: 4.3,
      problemSolving: 4.2,
      customerService: 4.5,
    },
    overallRating: 4.6,
    reviewCount: 87,
    topSkill: "Cleanliness",
  },
  {
    id: 5,
    name: "Robert Taylor",
    department: "Maintenance",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.2,
      timeliness: 4.3,
      communication: 4.1,
      problemSolving: 4.6,
      customerService: 4.2,
    },
    overallRating: 4.3,
    reviewCount: 76,
    topSkill: "Problem Solving",
  },
  {
    id: 6,
    name: "Jennifer Lopez",
    department: "Front Desk",
    avatar: "/placeholder.svg?height=40&width=40",
    skills: {
      cleanliness: 4.6,
      timeliness: 4.8,
      communication: 4.7,
      problemSolving: 4.3,
      customerService: 4.9,
    },
    overallRating: 4.7,
    reviewCount: 105,
    topSkill: "Customer Service",
  },
]

// Department averages
const departmentAverages = {
  Housekeeping: 4.7,
  Maintenance: 4.4,
  "Front Desk": 4.7,
  "Food Service": 4.2,
}

export function StaffPerformanceOverview() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  // Filter staff by department if needed
  const filteredStaff =
    selectedDepartment === "all"
      ? staffMembers
      : staffMembers.filter((staff) => staff.department === selectedDepartment)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Staff Performance Overview</h2>
        <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="Housekeeping">Housekeeping</SelectItem>
            <SelectItem value="Maintenance">Maintenance</SelectItem>
            <SelectItem value="Front Desk">Front Desk</SelectItem>
            <SelectItem value="Food Service">Food Service</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Department Overview</TabsTrigger>
          <TabsTrigger value="individual">Individual Ratings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance Summary</CardTitle>
              <CardDescription>Overall ratings across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(departmentAverages).map(([department, rating]) => (
                  <div key={department} className="space-y-2">
                    <div className="flex items-center">
                      <div className="font-medium">{department}</div>
                      <div className="ml-auto">{rating.toFixed(1)}</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: `${(rating / 5) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredStaff.map((staff) => (
              <Card key={staff.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={staff.avatar || "/placeholder.svg"} alt={staff.name} />
                        <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{staff.name}</CardTitle>
                        <CardDescription>{staff.department}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-lg mr-1">{staff.overallRating}</span>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Top Skill: {staff.topSkill}</div>
                    <div className="space-y-2">
                      <div className="text-sm">Cleanliness</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            className={`h-4 w-4 ${rating <= Math.round(staff.skills.cleanliness) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{staff.skills.cleanliness}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">Timeliness</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            className={`h-4 w-4 ${rating <= Math.round(staff.skills.timeliness) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{staff.skills.timeliness}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">Communication</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            className={`h-4 w-4 ${rating <= Math.round(staff.skills.communication) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{staff.skills.communication}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">Problem Solving</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            className={`h-4 w-4 ${rating <= Math.round(staff.skills.problemSolving) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{staff.skills.problemSolving}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm">Customer Service</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <Star
                            key={rating}
                            className={`h-4 w-4 ${rating <= Math.round(staff.skills.customerService) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground">{staff.skills.customerService}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">Based on {staff.reviewCount} reviews</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
