import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function StaffHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Staff avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold">Welcome, John Doe</h1>
          <p className="text-sm text-muted-foreground">Housekeeping Department</p>
        </div>
      </div>
    </div>
  )
}
