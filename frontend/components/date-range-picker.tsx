"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format, addDays } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DateRange {
  from: Date
  to: Date
}

export function CalendarDateRangePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 30),
  })

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 2 + i)

  const handleFromMonthChange = (value: string) => {
    const newFrom = new Date(date.from)
    newFrom.setMonth(Number.parseInt(value))
    setDate({ ...date, from: newFrom })
  }

  const handleFromYearChange = (value: string) => {
    const newFrom = new Date(date.from)
    newFrom.setFullYear(Number.parseInt(value))
    setDate({ ...date, from: newFrom })
  }

  const handleToMonthChange = (value: string) => {
    const newTo = new Date(date.to)
    newTo.setMonth(Number.parseInt(value))
    setDate({ ...date, to: newTo })
  }

  const handleToYearChange = (value: string) => {
    const newTo = new Date(date.to)
    newTo.setFullYear(Number.parseInt(value))
    setDate({ ...date, to: newTo })
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn("w-[260px] justify-start text-left font-normal")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="end">
          <div className="grid gap-4">
            <div>
              <div className="mb-2 font-medium">Start Date</div>
              <div className="flex gap-2">
                <Select value={date.from.getMonth().toString()} onValueChange={handleFromMonthChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={date.from.getFullYear().toString()} onValueChange={handleFromYearChange}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <div className="mb-2 font-medium">End Date</div>
              <div className="flex gap-2">
                <Select value={date.to.getMonth().toString()} onValueChange={handleToMonthChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={month} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={date.to.getFullYear().toString()} onValueChange={handleToYearChange}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                size="sm"
                onClick={() => {
                  // Set to current month and previous month
                  const now = new Date()
                  const prevMonth = new Date()
                  prevMonth.setMonth(prevMonth.getMonth() - 1)
                  setDate({
                    from: prevMonth,
                    to: now,
                  })
                }}
              >
                Last 30 Days
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
