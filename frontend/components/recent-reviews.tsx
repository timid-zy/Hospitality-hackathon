"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function RecentReviews() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="housekeeping">Housekeeping</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="frontdesk">Front Desk</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all" className="space-y-4 mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Maria Rodriguez"
            department="Housekeeping"
            rating={5}
            date="2 days ago"
            comment="Maria was exceptional. The room was spotless and she even left a handwritten welcome note. Attention to detail was outstanding."
          />
          <ReviewCard
            name="James Wilson"
            department="Maintenance"
            rating={4}
            date="3 days ago"
            comment="Fixed our AC issue within 30 minutes of reporting it. Very professional and explained what was wrong."
          />
          <ReviewCard
            name="Sarah Johnson"
            department="Front Desk"
            rating={5}
            date="1 week ago"
            comment="Sarah made our check-in process smooth and pleasant. She was knowledgeable about local attractions."
          />
          <ReviewCard
            name="David Chen"
            department="Housekeeping"
            rating={4}
            date="1 week ago"
            comment="Room was very clean. David was thorough and respected our privacy."
          />
          <ReviewCard
            name="Robert Taylor"
            department="Maintenance"
            rating={3}
            date="2 weeks ago"
            comment="Fixed the issue with our shower, but took longer than expected to arrive."
          />
          <ReviewCard
            name="Jennifer Lopez"
            department="Front Desk"
            rating={5}
            date="2 weeks ago"
            comment="Jennifer went above and beyond to accommodate our early check-in request. Very friendly service."
          />
        </div>
      </TabsContent>
      <TabsContent value="housekeeping" className="space-y-4 mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Maria Rodriguez"
            department="Housekeeping"
            rating={5}
            date="2 days ago"
            comment="Maria was exceptional. The room was spotless and she even left a handwritten welcome note. Attention to detail was outstanding."
          />
          <ReviewCard
            name="David Chen"
            department="Housekeeping"
            rating={4}
            date="1 week ago"
            comment="Room was very clean. David was thorough and respected our privacy."
          />
          <ReviewCard
            name="Lisa Wong"
            department="Housekeeping"
            rating={5}
            date="3 weeks ago"
            comment="Lisa made sure our room was perfect every day. Fresh towels were always arranged beautifully."
          />
        </div>
      </TabsContent>
      <TabsContent value="maintenance" className="space-y-4 mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="James Wilson"
            department="Maintenance"
            rating={4}
            date="3 days ago"
            comment="Fixed our AC issue within 30 minutes of reporting it. Very professional and explained what was wrong."
          />
          <ReviewCard
            name="Robert Taylor"
            department="Maintenance"
            rating={3}
            date="2 weeks ago"
            comment="Fixed the issue with our shower, but took longer than expected to arrive."
          />
        </div>
      </TabsContent>
      <TabsContent value="frontdesk" className="space-y-4 mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Sarah Johnson"
            department="Front Desk"
            rating={5}
            date="1 week ago"
            comment="Sarah made our check-in process smooth and pleasant. She was knowledgeable about local attractions."
          />
          <ReviewCard
            name="Jennifer Lopez"
            department="Front Desk"
            rating={5}
            date="2 weeks ago"
            comment="Jennifer went above and beyond to accommodate our early check-in request. Very friendly service."
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}

interface ReviewCardProps {
  name: string
  department: string
  rating: number
  date: string
  comment: string
}

function ReviewCard({ name, department, rating, date, comment }: ReviewCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              <CardDescription>{department}</CardDescription>
            </div>
          </div>
          <Badge variant={rating >= 4 ? "default" : "outline"} className="ml-auto">
            {rating}/5
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{comment}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}
