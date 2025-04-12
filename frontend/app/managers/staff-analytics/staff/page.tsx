import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TeamSwitcher } from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"

export default function StaffPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Staff Directory</h2>
          <div className="flex items-center space-x-2">
            <Button>Add Staff Member</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>All Staff Members</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="housekeeping">Housekeeping</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="frontdesk">Front Desk</SelectItem>
                      <SelectItem value="food">Food Service</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Search staff..." className="w-[200px]" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="rounded-lg border shadow-sm">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Department</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Rating</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Reviews</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="[&_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Rodriguez" />
                                <AvatarFallback>MR</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">Maria Rodriguez</div>
                                <div className="text-sm text-muted-foreground">maria.r@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">Housekeeping</td>
                          <td className="p-4 align-middle">4.9</td>
                          <td className="p-4 align-middle">124</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-500">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Wilson" />
                                <AvatarFallback>JW</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">James Wilson</div>
                                <div className="text-sm text-muted-foreground">james.w@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">Maintenance</td>
                          <td className="p-4 align-middle">4.5</td>
                          <td className="p-4 align-middle">98</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-500">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                                <AvatarFallback>SJ</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">Sarah Johnson</div>
                                <div className="text-sm text-muted-foreground">sarah.j@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">Front Desk</td>
                          <td className="p-4 align-middle">4.7</td>
                          <td className="p-4 align-middle">112</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-500">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David Chen" />
                                <AvatarFallback>DC</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">David Chen</div>
                                <div className="text-sm text-muted-foreground">david.c@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">Housekeeping</td>
                          <td className="p-4 align-middle">4.6</td>
                          <td className="p-4 align-middle">87</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-500">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Robert Taylor" />
                                <AvatarFallback>RT</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">Robert Taylor</div>
                                <div className="text-sm text-muted-foreground">robert.t@example.com</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">Maintenance</td>
                          <td className="p-4 align-middle">4.3</td>
                          <td className="p-4 align-middle">76</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-500">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
