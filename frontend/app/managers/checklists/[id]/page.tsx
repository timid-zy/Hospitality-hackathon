"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";
import { Separator } from "../../../../components/ui/separator";
import { ArrowLeft, Home, Printer, Share } from "lucide-react";

export default function ChecklistDetailPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Mock data - in a real app, this would come from an API
  const checklist = {
    id: 1,
    title: "Daily Room Inspection",
    department: "Housekeeping",
    description:
      "Standard checklist for daily room inspections including bed making, bathroom cleaning, and amenity restocking.",
    items: [
      {
        id: "1",
        text: "Bed made properly with clean linens",
        category: "Bedroom",
      },
      {
        id: "2",
        text: "Pillows fluffed and properly arranged",
        category: "Bedroom",
      },
      { id: "3", text: "Floors vacuumed/swept", category: "General" },
      { id: "4", text: "Surfaces dusted", category: "General" },
      {
        id: "5",
        text: "Bathroom sink, toilet, and shower cleaned",
        category: "Bathroom",
      },
      {
        id: "6",
        text: "Fresh towels placed in bathroom",
        category: "Bathroom",
      },
      {
        id: "7",
        text: "Bathroom amenities restocked (soap, shampoo, etc.)",
        category: "Bathroom",
      },
      { id: "8", text: "Trash bins emptied", category: "General" },
      { id: "9", text: "Windows and mirrors cleaned", category: "General" },
      {
        id: "10",
        text: "TV and remote control working",
        category: "Electronics",
      },
      {
        id: "11",
        text: "Air conditioning/heating functioning properly",
        category: "Climate",
      },
      { id: "12", text: "Lights and lamps working", category: "Electronics" },
      { id: "13", text: "Minibar restocked", category: "Amenities" },
      {
        id: "14",
        text: "Coffee/tea supplies replenished",
        category: "Amenities",
      },
      {
        id: "15",
        text: "Room inspected for damages or maintenance issues",
        category: "Inspection",
      },
    ],
  };

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getProgress = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / checklist.items.length) * 100);
  };

  // Group items by category
  const itemsByCategory: Record<string, typeof checklist.items> = {};
  checklist.items.forEach((item) => {
    if (!itemsByCategory[item.category]) {
      itemsByCategory[item.category] = [];
    }
    itemsByCategory[item.category].push(item);
  });

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/managers/checklists">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Checklists
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{checklist.title}</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Checklist Items</CardTitle>
                <CardDescription>{checklist.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(itemsByCategory).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {category}
                    </h3>
                    <Separator />
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start space-x-2"
                        >
                          <Checkbox
                            id={`item-${item.id}`}
                            checked={!!checkedItems[item.id]}
                            onCheckedChange={() => toggleItem(item.id)}
                          />
                          <Label
                            htmlFor={`item-${item.id}`}
                            className={`text-sm ${
                              checkedItems[item.id]
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {item.text}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Checklist Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{getProgress()}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${getProgress()}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Details</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Department:</div>
                    <div>{checklist.department}</div>
                    <div className="text-muted-foreground">Total Items:</div>
                    <div>{checklist.items.length}</div>
                    <div className="text-muted-foreground">Completed:</div>
                    <div>
                      {Object.values(checkedItems).filter(Boolean).length}
                    </div>
                    <div className="text-muted-foreground">Remaining:</div>
                    <div>
                      {checklist.items.length -
                        Object.values(checkedItems).filter(Boolean).length}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full">Complete Checklist</Button>
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1">
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Cleaning supplies
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Vacuum cleaner
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Fresh linens and towels
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Bathroom amenities
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Minibar items
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Resource Constraints</CardTitle>
                <CardDescription>
                  Items flagged as missing or unavailable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span>Bathroom cleaning solution (out of stock)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Request
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>Premium towels (low stock)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Request
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Note: Tasks requiring these resources will be marked as
                  blocked until resources are available.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
