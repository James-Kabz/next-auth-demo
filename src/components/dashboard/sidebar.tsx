"use client"

import { Suspense } from "react"
import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, LayoutDashboard, ShieldCheck, UserCheck, Users } from "lucide-react"
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

// Import the custom components
import { DashboardSidebarHeader } from "@/components/dashboard/sidebar-header"
import { DashboardSidebarFooter } from "@/components/dashboard/sidebar-footer"
import { useUserPermissions } from "@/hooks/use-permissions"
import { Skeleton } from "@/components/ui/skeleton"

interface Props {
  user: {
    id?: string | null
    role?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

interface RouteItem {
  title: string
  href: string
  icon: React.ElementType
  permission?: string
}

// Loading fallback component for sidebar menu items
function SidebarMenuSkeleton() {
  return (
    <>
      {Array(5).fill(null).map((_, i) => (
        <SidebarMenuItem key={i}>
          <div className="flex items-center gap-3 px-3 py-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
        </SidebarMenuItem>
      ))}
    </>
  )
}

// The main sidebar menu content component that depends on permissions data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SidebarMenuContent({ user }: Props) {
  const pathname = usePathname()
  const { permissions } = useUserPermissions()

  // Define routes with their required permissions
  const routes: RouteItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      permission: "dashboard:access",
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
      permission: "analytics:access",
    },
  ]

  const adminRoutes: RouteItem[] = [
    {
      title: "Admin",
      href: "",
      icon: UserCheck,
      permission: "admin:access",
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
      permission: "users:read",
    },
    {
      title: "Roles & Permissions",
      href: "/dashboard/permissions",
      icon: ShieldCheck,
      permission: "roles:read",
    },
  ]

  // Check if user has any admin permissions
  const hasAnyAdminPermission = adminRoutes.some(
    (route) => route.permission && permissions.includes(route.permission)
  )

  // Function to check if a route should be displayed
  const shouldShowRoute = (route: RouteItem) => {
    if (!route.permission) return true
    return permissions.includes(route.permission)
  }

  return (
    <>
      {/* Main routes */}
      {routes.map((route) =>
        shouldShowRoute(route) ? (
          <SidebarMenuItem key={route.href || route.title}>
            <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
              <Link href={route.href || "#"}>
                <route.icon className="h-5 w-5" />
                <span>{route.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) : null
      )}

      {/* Admin section header - only show if user has any admin permissions */}
      {hasAnyAdminPermission && (
        <div className="mt-6 mb-2">
          <h4 className="px-3 text-xs font-semibold text-muted-foreground">Admin</h4>
        </div>
      )}

      {/* Admin routes */}
      {adminRoutes.map((route) =>
        shouldShowRoute(route) ? (
          <SidebarMenuItem key={route.href || route.title}>
            <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
              <Link href={route.href || "#"}>
                <route.icon className="h-5 w-5" />
                <span>{route.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) : null
      )}
    </>
  )
}

export function DashboardSidebar({ user }: Props) {
  return (
    <Sidebar collapsible="icon">
      <DashboardSidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          <Suspense fallback={<SidebarMenuSkeleton />}>
            <SidebarMenuContent user={user} />
          </Suspense>
        </SidebarMenu>
      </SidebarContent>
      <DashboardSidebarFooter />
    </Sidebar>
  )
}