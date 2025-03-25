"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

interface Activity {
  id: number
  user: {
    name: string
    email: string
    initials: string
  }
  action: string
  timestamp: string
}

const sampleActivities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      email: "john@example.com",
      initials: "JD",
    },
    action: "signed in",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      initials: "JS",
    },
    action: "updated their profile",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    user: {
      name: "Bob Johnson",
      email: "bob@example.com",
      initials: "BJ",
    },
    action: "changed their password",
    timestamp: "3 hours ago",
  },
  {
    id: 4,
    user: {
      name: "Alice Williams",
      email: "alice@example.com",
      initials: "AW",
    },
    action: "signed up",
    timestamp: "5 hours ago",
  },
  {
    id: 5,
    user: {
      name: "Charlie Brown",
      email: "charlie@example.com",
      initials: "CB",
    },
    action: "signed in",
    timestamp: "1 day ago",
  },
]

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    setActivities(sampleActivities)
  }, [])

  return (
    <div className="space-y-6">
      {activities.length === 0 ? (
        <div className="text-center py-4 text-muted-foreground">Loading activities...</div>
      ) : (
        activities.map((activity) => (
          <div className="flex items-center" key={activity.id}>
            <Avatar className="h-9 w-9 border border-border">
              <AvatarFallback>{activity.user.initials}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{activity.user.name}</p>
              <p className="text-sm text-muted-foreground">{activity.action}</p>
            </div>
            <div className="ml-auto text-sm text-muted-foreground">{activity.timestamp}</div>
          </div>
        ))
      )}
    </div>
  )
}

