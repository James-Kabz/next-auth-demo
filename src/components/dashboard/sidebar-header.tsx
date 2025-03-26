"use client"

import { Home } from "lucide-react"
import { SidebarHeader } from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function DashboardSidebarHeader() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <SidebarHeader>
      <div className={cn("flex  items-center", isCollapsed && "")}>
        <Home className="h-5 w-5 flex-shrink-0" />
        {!isCollapsed && <span className="font-bold text-lg">Auth System</span>}
      </div>
    </SidebarHeader>
  )
}

