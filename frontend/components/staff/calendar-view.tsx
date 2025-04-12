"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, Clock, Droplet, Lightbulb, ShoppingBag, Utensils } from "lucide-react"

// Mock data for calendar view
const timeSlots = [
  {
    time: "8:00 AM",
    tasks: [{ id: 1, type: "routine", title: "Room 101 Inspection", status: "completed", category: "housekeeping" }],
  },
  {
    time: "8:30 AM",
    tasks: [{ id: 2, type: "routine", title: "Room 102 Inspection", status: "in-progress", category: "housekeeping" }],
  },
  {
    time: "9:00 AM",
    tasks: [{ id: 3, type: "routine", title: "Room 103 Inspection", status: "pending", category: "housekeeping" }],
  },
  {
    time: "9:30 AM",
    tasks: [
      {
        id: 4,
        type: "issue",
        title: "Plumbing Issue - Room 205",
        status: "pending",
        category: "plumbing",
        priority: "high",
      },
    ],
  },
  {
    time: "10:00 AM",
    tasks: [{ id: 5, type: "routine", title: "Hallway Inspection", status: "pending", category: "housekeeping" }],
  },
  {
    time: "10:30 AM",
    tasks: [
      {
        id: 6,
        type: "issue",
        title: "Missing Supplies - Room 310",
        status: "pending",
        category: "supplies",
        priority: "medium",
      },
    ],
  },
  {
    time: "11:00 AM",
    tasks: [{ id: 7, type: "routine", title: "Lobby Inspection", status: "pending", category: "housekeeping" }],
  },
  { time: "11:30 AM", tasks: [] }, // Lunch break starts
  { time: "12:00 PM", tasks: [] }, // Lunch break
  { time: "12:30 PM", tasks: [] }, // Lunch break
  { time: "1:00 PM", tasks: [] }, // Lunch break
  { time: "1:30 PM", tasks: [] }, // Lunch break
  {
    time: "2:00 PM",
    tasks: [
      {
        id: 8,
        type: "issue",
        title: "Electrical Problem - Room 412",
        status: "pending",
        category: "electrical",
        priority: "high",
      },
    ],
  },
  {
    time: "2:30 PM",
    tasks: [{ id: 9, type: "routine", title: "Room 104 Inspection", status: "pending", category: "housekeeping" }],
  },
  {
    time: "3:00 PM",
    tasks: [
      {
        id: 10,
        type: "issue",
        title: "Room Service Request - Room 520",
        status: "pending",
        category: "room-service",
        priority: "low",
      },
    ],
  },
  {
    time: "3:30 PM",
    tasks: [{ id: 11, type: "routine", title: "Room 105 Inspection", status: "pending", category: "housekeeping" }],
  },
  {
    time: "4:00 PM",
    tasks: [
      {
        id: 12,
        type: "issue",
        title: "Additional Cleaning - Room 215",
        status: "pending",
        category: "cleaning",
        priority: "medium",
      },
    ],
  },
]

// Helper function to get icon based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "plumbing":
      return <Droplet className="h-4 w-4" />
    case "electrical":
      return <Lightbulb className="h-4 w-4" />
    case "supplies":
      return <ShoppingBag className="h-4 w-4" />
    case "room-service":
      return <Utensils className="h-4 w-4" />
    default:
      return <CheckCircle2 className="h-4 w-4" />
  }
}

// Helper function to get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "in-progress":
      return "bg-blue-100 text-blue-800"
    case "pending":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Helper function to get priority badge
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return (
        <Badge variant="destructive" className="ml-2">
          High
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="default" className="ml-2">
          Medium
        </Badge>
      )
    case "low":
      return (
        <Badge variant="outline" className="ml-2">
          Low
        </Badge>
      )
    default:
      return null
  }
}

export function CalendarView() {
  const [currentDate] = useState(new Date())

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{formattedDate}</h3>
      </div>

      <div className="space-y-2">
        {timeSlots.map((slot, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-20 pt-2 text-sm text-muted-foreground">{slot.time}</div>

            <div className="flex-1">
              {slot.tasks.length > 0 ? (
                <div className="space-y-2">
                  {slot.tasks.map((task) => (
                    <Card
                      key={task.id}
                      className={`border-l-4 ${task.type === "issue" ? "border-l-orange-500" : "border-l-blue-500"}`}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2">
                            <div className={`mt-0.5 rounded-full p-1 ${getStatusColor(task.status)}`}>
                              {getCategoryIcon(task.category)}
                            </div>
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">{task.title}</span>
                                {/* change something here */}
                                {task.type === "issue" && "priority" in task && task.priority && getPriorityBadge(task.priority)}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{slot.time}</span>
                                {task.type === "issue" && (
                                  <span className="flex items-center gap-1 ml-2">
                                    <AlertTriangle className="h-3 w-3 text-orange-500" />
                                    Reported Issue
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="h-12 border border-dashed rounded-md flex items-center justify-center text-sm text-muted-foreground">
                  {index >= 4 && index <= 8 ? "Lunch Break" : "No tasks scheduled"}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
