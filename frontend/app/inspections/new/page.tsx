"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { Home, Upload } from "lucide-react"
import { toast } from "sonner"

export default function NewInspectionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    roomNumber: "",
    issueDetails: "",
    files: [] as File[],
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        files: Array.from(e.target.files),
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false)
      toast(
        "Issue reported successfully. Our team will review your issue and assign it to the appropriate department."
      )

      // Reset form
      setFormData({
        roomNumber: "",
        issueDetails: "",
        files: [],
      })
    }, 1500)
  }

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
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/inspections" className="text-sm font-medium transition-colors hover:text-primary">
              Inspections
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Report an Issue</h1>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Report Room Issue</CardTitle>
            <CardDescription>
              Please provide details about the issue you're experiencing. Our team will review and address it promptly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="room-number">Room Number</Label>
                <Input
                  id="room-number"
                  placeholder="e.g. 205"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue-details">Issue Details</Label>
                <Textarea
                  id="issue-details"
                  placeholder="Please describe the issue in detail (e.g., leaking faucet in bathroom, AC not cooling, etc.)"
                  rows={4}
                  value={formData.issueDetails}
                  onChange={(e) => setFormData({ ...formData, issueDetails: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Our AI system will analyze your description to assign your issue to the appropriate department.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Upload Photos (Optional)</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop files here or click to browse</p>
                  <p className="text-xs text-muted-foreground">Supports JPG, PNG, HEIC up to 10MB</p>
                  <Input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    type="button"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    Select Files
                  </Button>
                  {formData.files.length > 0 && (
                    <div className="mt-2 text-sm">{formData.files.length} file(s) selected</div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Issue Report"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
