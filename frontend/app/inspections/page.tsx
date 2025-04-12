"use client" // Mark this as a client component

import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { ArrowRight, Home, Plus, Search } from "lucide-react"
import { useInspections } from "../../context/InspectionsContext"
import React from "react"
import image from '../assets/kuriftu.jpg'

export default function InspectionsPage() {
  const { inspections } = useInspections() // Use inspections from context

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src={image.src} alt="Kuriftu Logo" className="h-8 w-8 rounded-full" />
            {/* <Home className="h-8 w-8 text-primary" /> */}
            {/* <span className="text-lg font-semibold">Kuriftu Resort Management</span> */}
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
          </TabsList>
          {["all", "pending", "in-progress", "completed"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4 mt-6">
              {inspections
                .filter((inspection) => tab === "all" || inspection.status.toLowerCase() === tab)
                .reverse()
                .map((inspection) => (
                  <Card key={inspection.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{`${inspection.room} - ${inspection.title}`}</CardTitle>
                      <CardDescription>Created on {inspection.createdOn}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className={`flex items-center gap-2 text-sm ${inspection.statusColor} mb-2`}>
                        {inspection.icon && React.createElement(inspection.icon as React.ElementType, { className: "h-4 w-4" })}
                        <span>{inspection.status}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{inspection.description}</p>
                      {/* {inspection.image && (
                        <div className="mt-4">
                          <img src={inspection.image} alt="Inspection" className="w-32 h-32 object-cover rounded-md" />
                        </div>
                      )} */}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-muted-foreground">Assigned to: {inspection.assignedTo}</div>
                      <Link href={`/inspections/${inspection.id}`}>
                        <Button variant="ghost" size="sm">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}
