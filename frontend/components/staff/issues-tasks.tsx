"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Clock, Droplet, Filter, Lightbulb, MoreVertical, ShoppingBag, Utensils } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for issues tasks
const issuesTasks = [
  {
    id: 1,
    title: "Plumbing Issue - Room 205",
    description: "Guest reported leaking faucet in bathroom sink.",
    category: "plumbing",
    priority: "high",
    status: "pending",
    reportedBy: "Guest: Emma Johnson",
    reportedAt: "Today, 8:15 AM",
    assignedAt: "Today, 9:30 AM",
    roomNumber: "205",
    notes: [],
  },
  {
    id: 2,
    title: "Missing Supplies - Room 310",
    description: "Guest reported missing towels and toiletries.",
    category: "supplies",
    priority: "medium",
    status: "in-progress",
    reportedBy: "Guest: Michael Smith",
    reportedAt: "Today, 9:45 AM",
    assignedAt: "Today, 10:30 AM",
    roomNumber: "310",
    notes: [
      {
        id: 1,
        text: "Checked inventory, towels are available but toiletries need to be restocked.",
        timestamp: "Today, 11:15 AM",
      },
    ],
  },
  {
    id: 3,
    title: "Electrical Problem - Room 412",
    description: "Guest reported that the bedside lamp is not working.",
    category: "electrical",
    priority: "high",
    status: "pending",
    reportedBy: "Guest: Sarah Williams",
    reportedAt: "Today, 10:30 AM",
    assignedAt: "Today, 2:00 PM",
    roomNumber: "412",
    notes: [],
  },
  {
    id: 4,
    title: "Room Service Request - Room 520",
    description: "Guest requested late checkout and additional room service.",
    category: "room-service",
    priority: "low",
    status: "pending",
    reportedBy: "Guest: David Brown",
    reportedAt: "Today, 11:45 AM",
    assignedAt: "Today, 3:00 PM",
    roomNumber: "520",
    notes: [],
  },
  {
    id: 5,
    title: "Additional Cleaning - Room 215",
    description: "Guest requested additional cleaning service due to spill on carpet.",
    category: "cleaning",
    priority: "medium",
    status: "pending",
    reportedBy: "Guest: Jennifer Davis",
    reportedAt: "Today, 1:30 PM",
    assignedAt: "Today, 4:00 PM",
    roomNumber: "215",
    notes: [],
  },
]

// Helper function to get category icon
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
      return <AlertTriangle className="h-4 w-4" />
  }
}

// Helper function to get priority badge
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">High Priority</Badge>
    case "medium":
      return <Badge variant="default">Medium Priority</Badge>
    case "low":
      return <Badge variant="outline">Low Priority</Badge>
    default:
      return <Badge variant="outline">Low Priority</Badge>
  }
}

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

export function IssuesTasks() {
  const [issues, setIssues] = useState(issuesTasks)
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null)
  const [noteText, setNoteText] = useState("")

  const toggleIssueExpand = (issueId: number) => {
    setExpandedIssue(expandedIssue === issueId ? null : issueId)
    setNoteText("")
  }

  const addNote = (issueId: number) => {
    if (noteText.trim() === "") return

    setIssues(
      issues.map((issue) => {
        if (issue.id === issueId) {
          const newNote = {
            id: issue.notes.length + 1,
            text: noteText,
            timestamp: "Just now",
          }

          return {
            ...issue,
            notes: [...issue.notes, newNote],
            status: "in-progress",
          }
        }
        return issue
      }),
    )

    setNoteText("")
  }

  const markAsComplete = (issueId: number) => {
    setIssues(
      issues.map((issue) => {
        if (issue.id === issueId) {
          return {
            ...issue,
            status: "completed",
          }
        }
        return issue
      }),
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Guest Reported Issues</span>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        {issues.map((issue) => (
          <Card
            key={issue.id}
            className={`overflow-hidden border-l-4 ${
              issue.priority === "high"
                ? "border-l-red-500"
                : issue.priority === "medium"
                  ? "border-l-orange-500"
                  : "border-l-blue-500"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 rounded-full p-1 ${
                      issue.category === "plumbing"
                        ? "bg-blue-100 text-blue-800"
                        : issue.category === "electrical"
                          ? "bg-yellow-100 text-yellow-800"
                          : issue.category === "supplies"
                            ? "bg-purple-100 text-purple-800"
                            : issue.category === "room-service"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {getCategoryIcon(issue.category)}
                  </div>
                  <div>
                    <h3 className="font-medium">{issue.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Assigned: {issue.assignedAt}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Room {issue.roomNumber}
                      </Badge>
                      {getPriorityBadge(issue.priority)}
                      {getStatusBadge(issue.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{issue.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={() => toggleIssueExpand(issue.id)}>
                    {expandedIssue === issue.id ? "Hide" : "View"}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => markAsComplete(issue.id)}>Mark as Complete</DropdownMenuItem>
                      <DropdownMenuItem>Reassign</DropdownMenuItem>
                      <DropdownMenuItem>Escalate</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {expandedIssue === issue.id && (
                <div className="mt-4 border-t pt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Issue Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Reported by:</span> {issue.reportedBy}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Reported at:</span> {issue.reportedAt}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Category:</span>{" "}
                          {issue.category.charAt(0).toUpperCase() + issue.category.slice(1)}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Room:</span> {issue.roomNumber}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Notes & Updates</h4>
                      {issue.notes.length > 0 ? (
                        <div className="space-y-2">
                          {issue.notes.map((note) => (
                            <div key={note.id} className="bg-muted/50 p-2 rounded-md">
                              <p className="text-sm">{note.text}</p>
                              <p className="text-xs text-muted-foreground mt-1">{note.timestamp}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">No notes yet. Add a note below.</p>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Add Note</h4>
                      <Textarea
                        placeholder="Add a note about this issue..."
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            {expandedIssue === issue.id && (
              <CardFooter className="bg-muted/50 px-4 py-2">
                <div className="flex items-center justify-between w-full">
                  <Button size="sm" variant="outline" onClick={() => toggleIssueExpand(issue.id)}>
                    Close
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addNote(issue.id)}
                      disabled={noteText.trim() === ""}
                    >
                      Add Note
                    </Button>
                    <Button size="sm" variant="default" onClick={() => markAsComplete(issue.id)}>
                      Mark as Complete
                    </Button>
                  </div>
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
