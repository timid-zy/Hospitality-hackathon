"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Clock, Filter, MoreVertical, RefreshCw } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for routine tasks
const routineTasks = [
  {
    id: 1,
    title: "Room 101 Inspection",
    description: "Standard daily room inspection including bed making, bathroom cleaning, and amenity restocking.",
    department: "Housekeeping",
    frequency: "Daily",
    status: "completed",
    time: "8:00 AM",
    checklist: [
      { id: 1, label: "Make bed", checked: true },
      { id: 2, label: "Clean bathroom", checked: true },
      { id: 3, label: "Restock amenities", checked: true },
      { id: 4, label: "Vacuum floor", checked: true },
      { id: 5, label: "Dust surfaces", checked: true },
    ],
  },
  {
    id: 2,
    title: "Room 102 Inspection",
    description: "Standard daily room inspection including bed making, bathroom cleaning, and amenity restocking.",
    department: "Housekeeping",
    frequency: "Daily",
    status: "in-progress",
    time: "8:30 AM",
    checklist: [
      { id: 1, label: "Make bed", checked: true },
      { id: 2, label: "Clean bathroom", checked: true },
      { id: 3, label: "Restock amenities", checked: false },
      { id: 4, label: "Vacuum floor", checked: false },
      { id: 5, label: "Dust surfaces", checked: false },
    ],
  },
  {
    id: 3,
    title: "Room 103 Inspection",
    description: "Standard daily room inspection including bed making, bathroom cleaning, and amenity restocking.",
    department: "Housekeeping",
    frequency: "Daily",
    status: "pending",
    time: "9:00 AM",
    checklist: [
      { id: 1, label: "Make bed", checked: false },
      { id: 2, label: "Clean bathroom", checked: false },
      { id: 3, label: "Restock amenities", checked: false },
      { id: 4, label: "Vacuum floor", checked: false },
      { id: 5, label: "Dust surfaces", checked: false },
    ],
  },
  {
    id: 4,
    title: "Hallway Inspection",
    description: "Check hallway cleanliness, lighting, and ensure all fire safety equipment is functional.",
    department: "Housekeeping",
    frequency: "Daily",
    status: "pending",
    time: "10:00 AM",
    checklist: [
      { id: 1, label: "Check lighting", checked: false },
      { id: 2, label: "Inspect fire extinguishers", checked: false },
      { id: 3, label: "Clean floors", checked: false },
      { id: 4, label: "Empty trash bins", checked: false },
    ],
  },
  {
    id: 5,
    title: "Lobby Inspection",
    description: "Ensure lobby is clean, organized, and all amenities are properly stocked.",
    department: "Housekeeping",
    frequency: "Daily",
    status: "pending",
    time: "11:00 AM",
    checklist: [
      { id: 1, label: "Clean seating areas", checked: false },
      { id: 2, label: "Restock brochures", checked: false },
      { id: 3, label: "Check plants", checked: false },
      { id: 4, label: "Clean glass surfaces", checked: false },
      { id: 5, label: "Vacuum carpets", checked: false },
    ],
  },
]

// Helper function to get status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>
    case "in-progress":
      return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
    case "pending":
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
  }
}

export function RoutineTasks() {
  const [tasks, setTasks] = useState(routineTasks)
  const [expandedTask, setExpandedTask] = useState<number | null>(null)

  const toggleTaskExpand = (taskId: number) => {
    setExpandedTask(expandedTask === taskId ? null : taskId)
  }

  const toggleChecklistItem = (taskId: number, itemId: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          const updatedChecklist = task.checklist.map((item) => {
            if (item.id === itemId) {
              return { ...item, checked: !item.checked }
            }
            return item
          })

          // Update task status based on checklist
          const allChecked = updatedChecklist.every((item) => item.checked)
          const anyChecked = updatedChecklist.some((item) => item.checked)

          let newStatus = "pending"
          if (allChecked) {
            newStatus = "completed"
          } else if (anyChecked) {
            newStatus = "in-progress"
          }

          return { ...task, checklist: updatedChecklist, status: newStatus }
        }
        return task
      }),
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Recurring Tasks</span>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card key={task.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 rounded-full p-1 ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : task.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{task.time}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {task.frequency}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {task.department}
                      </Badge>
                      {getStatusBadge(task.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{task.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => toggleTaskExpand(task.id)}>
                    {expandedTask === task.id ? "Hide" : "View"}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
                      <DropdownMenuItem>Reassign</DropdownMenuItem>
                      <DropdownMenuItem>Flag Issue</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {expandedTask === task.id && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="text-sm font-medium mb-2">Checklist</h4>
                  <div className="space-y-2">
                    {task.checklist.map((item) => (
                      <div key={item.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`task-${task.id}-item-${item.id}`}
                          checked={item.checked}
                          onCheckedChange={() => toggleChecklistItem(task.id, item.id)}
                        />
                        <label
                          htmlFor={`task-${task.id}-item-${item.id}`}
                          className={`text-sm ${item.checked ? "line-through text-muted-foreground" : ""}`}
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>

            {expandedTask === task.id && (
              <CardFooter className="bg-muted/50 px-4 py-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-muted-foreground">
                    {task.checklist.filter((item) => item.checked).length} of {task.checklist.length} completed
                  </span>
                  <Button size="sm" variant="default">
                    Complete Task
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
