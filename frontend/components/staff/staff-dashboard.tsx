"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { CalendarView } from "@/components/staff/calendar-view"
import { RoutineTasks } from "@/components/staff/routine-tasks"
import { IssuesTasks } from "@/components/staff/issues-tasks"
import { StaffHeader } from "@/components/staff/staff-header"

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="container mx-auto px-4 py-6">
      <StaffHeader />

      <div className="mt-6">
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="routine">Routine</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
              <CalendarView />
            </Card>
          </TabsContent>

          <TabsContent value="routine" className="space-y-4">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Routine Tasks</h2>
              <RoutineTasks />
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="space-y-4">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Assigned Issues</h2>
              <IssuesTasks />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
