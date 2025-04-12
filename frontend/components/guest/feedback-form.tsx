"use client"

import { useRouter } from "next/navigation" // Import useRouter for navigation
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CheckCircle2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    stayDate: z.date({
        required_error: "Please select your stay date.",
    }),
    roomID: z.string({
        required_error: "Please select your room ID.",
    }),
    stayDuration: z.string({
        required_error: "Please select your stay duration.",
    }),
    cleanliness: z.string(),
    comfort: z.string(),
    service: z.string(),
    foodQuality: z.string(),
    valueForMoney: z.string(),
    amenities: z.string(),
    overallExperience: z.string(),
    likedMost: z.string().optional(),
    improvements: z.string().optional(),
    returnStay: z.string(),
    recommend: z.string(),
    additionalComments: z.string().optional(),
})

export default function FeedbackForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const router = useRouter() // Initialize useRouter

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            cleanliness: "5",
            comfort: "5",
            service: "5",
            foodQuality: "5",
            valueForMoney: "5",
            amenities: "5",
            overallExperience: "5",
            likedMost: "",
            improvements: "",
            returnStay: "yes",
            recommend: "yes",
            additionalComments: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setIsSubmitted(true)
    }

    const renderRatingField = (name: string, label: string) => (
        <FormField
            control={form.control}
            name={name as any}
            render={({ field }) => (
                <FormItem className="space-y-1">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <FormItem key={rating} className="flex flex-col items-center space-y-0.5">
                                    <FormControl>
                                        <RadioGroupItem value={rating.toString()} id={`${name}-${rating}`} className="sr-only" />
                                    </FormControl>
                                    <FormLabel
                                        htmlFor={`${name}-${rating}`}
                                        className={cn(
                                            "cursor-pointer rounded-full p-1 hover:bg-muted",
                                            field.value === rating.toString() && "text-primary",
                                        )}
                                    >
                                        <Star
                                            className={cn(
                                                "h-6 w-6",
                                                field.value >= rating.toString() ? "fill-primary text-primary" : "fill-muted text-muted",
                                            )}
                                        />
                                    </FormLabel>
                                    <span className="text-xs">{rating}</span>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )

    if (isSubmitted) {
        return (
            <Card className="w-full max-w-3xl mx-auto">
                <CardContent className="pt-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Thank You for Your Feedback!</h2>
                    <p className="text-muted-foreground mb-6">
                        Your feedback is valuable to us and helps us improve our services at Kuriftu Hotel.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Submit Another Response</Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader className="text-center">
                <Button variant="link" onClick={() => router.push("/guest")} className="mb-4">
                    Back
                </Button>
                <CardTitle className="text-2xl">Kuriftu Hotel Guest Feedback</CardTitle>
                <CardDescription>
                    We value your feedback! Please share your experience to help us serve you better.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-3">
                            
                            <FormField
                                control={form.control}
                                name="roomID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Room ID</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select room ID" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="101">Room 101</SelectItem>
                                                <SelectItem value="102">Room 102</SelectItem>
                                                <SelectItem value="103">Room 103</SelectItem>
                                                <SelectItem value="104">Room 104</SelectItem>
                                                <SelectItem value="105">Room 105</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="stayDuration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Stay Duration</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select duration" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="1">1 night</SelectItem>
                                                <SelectItem value="2-3">2-3 nights</SelectItem>
                                                <SelectItem value="4-7">4-7 nights</SelectItem>
                                                <SelectItem value="8+">8+ nights</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Please rate your experience:</h3>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {renderRatingField("cleanliness", "Cleanliness")}
                                {renderRatingField("comfort", "Comfort")}
                                {renderRatingField("service", "Service")}
                                {renderRatingField("foodQuality", "Food & Beverage Quality")}
                                {renderRatingField("valueForMoney", "Value for Money")}
                                {renderRatingField("amenities", "Amenities")}
                            </div>
                            <div className="pt-2">{renderRatingField("overallExperience", "Overall Experience")}</div>
                        </div>

                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="likedMost"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What did you like most about your stay?</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Please share what you enjoyed most during your stay"
                                                className="min-h-[80px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="improvements"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What could we improve?</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Please share any suggestions for improvement"
                                                className="min-h-[80px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="returnStay"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Would you stay with us again?</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="yes" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Yes</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="maybe" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Maybe</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="no" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">No</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="recommend"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Would you recommend Kuriftu Hotel to others?</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="yes" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Yes</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="maybe" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Maybe</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="no" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">No</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="additionalComments"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Comments</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Any other feedback you'd like to share with us"
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit Feedback
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
                <p className="text-sm text-muted-foreground">Thank you for taking the time to provide your feedback.</p>
            </CardFooter>
        </Card>
    )
}
