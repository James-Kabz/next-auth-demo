"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, LayoutDashboard, ShieldCheck, UserCheck, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar"

// Import the custom components
import { DashboardSidebarHeader } from "@/components/dashboard/sidebar-header"
import { DashboardSidebarFooter } from "@/components/dashboard/sidebar-footer"

interface Props {
  user: {
    id?: string | null
    role?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function DashboardSidebar({ user }: Props) {
  const pathname = usePathname()
  // const { state } = useSidebar()
  // const isCollapsed = state === "collapsed"

  const isAdmin = user?.role === "admin"

  const routes = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
  ]

  const adminRoutes = [
    {
      title: "Admin ",
      href: "",
      icon: UserCheck,
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Roles & Permissions",
      href: "/dashboard/permissions",
      icon: ShieldCheck,
    },
  ]

  return (
    <Sidebar collapsible="icon">
      <DashboardSidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
                <Link href={route.href}>
                  <route.icon className="h-5 w-5" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {isAdmin && (
            <div className="mt-28">
              {adminRoutes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
                    <Link href={route.href}>
                      <route.icon className="h-5 w-5" />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </div>
          )}
        </SidebarMenu>
      </SidebarContent>
      <DashboardSidebarFooter />
    </Sidebar>
  )
}

