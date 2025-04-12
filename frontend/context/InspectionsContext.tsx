"use client"

import React, { createContext, useContext, useState } from "react"

interface Inspection {
  id: number
  room: string
  title: string
  description: string
  createdOn: string
  status: string
  assignedTo: string
  statusColor: string
  icon: React.ComponentType
  image: string | null
}

interface InspectionsContextType {
  inspections: Inspection[]
  addInspection: (inspection: Inspection) => void
}

const InspectionsContext = createContext<InspectionsContextType | undefined>(undefined)

export const InspectionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [inspections, setInspections] = useState<Inspection[]>([
    {
      id: 1,
      room: "Room 205",
      title: "Plumbing Inspection",
      description: "Guest reported leaking faucet in bathroom. Requires plumbing inspection and repair.",
      createdOn: "April 10, 2025",
      status: "Pending",
      assignedTo: "Maintenance",
      statusColor: "text-yellow-600",
      icon: require("lucide-react").Clock,
      image: "https://via.placeholder.com/150?text=Plumbing+Issue",
    },
    {
      id: 2,
      room: "Room 118",
      title: "Electronics Inspection",
      description: "TV not working properly. IT team replaced HDMI cable and reset the system.",
      createdOn: "April 9, 2025",
      status: "Completed",
      assignedTo: "IT Support",
      statusColor: "text-green-600",
      icon: require("lucide-react").CheckCircle,
      image: "https://via.placeholder.com/150?text=Electronics+Issue",
    },
    {
      id: 3,
      room: "Room 302",
      title: "Housekeeping Inspection",
      description: "Missing towels and toiletries. Housekeeping team restocked all items.",
      createdOn: "April 9, 2025",
      status: "Completed",
      assignedTo: "Housekeeping",
      statusColor: "text-green-600",
      icon: require("lucide-react").CheckCircle,
      image: "https://via.placeholder.com/150?text=Housekeeping+Issue",
    },
    {
      id: 4,
      room: "Room 412",
      title: "HVAC Inspection",
      description: "AC not cooling properly. Maintenance team checking refrigerant levels and filters.",
      createdOn: "April 8, 2025",
      status: "In Progress",
      assignedTo: "Maintenance",
      statusColor: "text-blue-600",
      icon: require("lucide-react").Clock,
      image: "https://via.placeholder.com/150?text=HVAC+Issue",
    },
  ])

  const addInspection = (inspection: Inspection) => {
    setInspections((prev) => [...prev, inspection])
  }

  return (
    <InspectionsContext.Provider value={{ inspections, addInspection }}>
      {children}
    </InspectionsContext.Provider>
  )
}

export const useInspections = () => {
  const context = useContext(InspectionsContext)
  if (!context) {
    throw new Error("useInspections must be used within an InspectionsProvider")
  }
  return context
}