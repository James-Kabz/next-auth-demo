"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Home, LayoutDashboard, LogOut, Settings, ShieldCheck, Users } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

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
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r border-border" collapsible="icon">
        {/* Sidebar Header */}
        <SidebarHeader className="flex items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border border-border">
              <span className="text-sm font-bold text-foreground">A</span>
            </div>
            <div className="font-semibold">Auth Template</div>
          </div>
          <SidebarTrigger className="ml-auto md:flex" />
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent className="px-2 overflow-y-auto">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className={pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"}
                  tooltip={item.title}
                >
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          {/* Admin Section */}
          {isAdmin && (
            <>
              <div className="mt-6 mb-2">
                <h4 className="px-3 text-xs font-semibold text-muted-foreground">Admin</h4>
              </div>
              <SidebarMenu>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      className={pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-accent/50"}
                      tooltip={item.title}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
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

        {/* Sidebar Footer */}
        <SidebarFooter>
          <SidebarSeparator />
          <div className="p-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => signOut({ callbackUrl: "/" })}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
