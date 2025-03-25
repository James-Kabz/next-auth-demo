import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "signed in",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "updated their profile",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    user: {
      name: "Bob Johnson",
      email: "bob@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "changed their password",
    timestamp: "3 hours ago",
  },
  {
    id: 4,
    user: {
      name: "Alice Williams",
      email: "alice@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "signed up",
    timestamp: "5 hours ago",
  },
  {
    id: 5,
    user: {
      name: "Charlie Brown",
      email: "charlie@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "signed in",
    timestamp: "1 day ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div className="flex items-center" key={activity.id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.timestamp}</div>
        </div>
      ))}
    </div>
  )
}

