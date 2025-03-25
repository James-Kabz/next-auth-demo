"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, LayoutDashboard, LogOut, Settings, ShieldCheck, Users } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const isAdmin = session?.user?.role === "admin"

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  const adminItems = [
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Permissions",
      href: "/dashboard/permissions",
      icon: ShieldCheck,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
            <span className="text-sm font-bold text-primary-foreground">A</span>
          </div>
          <div className="font-semibold">Auth Template</div>
        </div>
        <SidebarTrigger className="ml-auto md:hidden" />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {isAdmin && (
          <>
            <SidebarSeparator />
            <div className="px-4 py-2">
              <h4 className="text-xs font-semibold text-muted-foreground">Admin</h4>
            </div>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <div className="p-2">
          <Button variant="outline" className="w-full justify-start" onClick={() => signOut({ callbackUrl: "/" })}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

