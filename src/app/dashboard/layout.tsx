"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { UserNav } from "@/components/dashboard/user-nav"
import { Loader2 } from "lucide-react"
import { SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login")
    },
  })

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <SidebarInset className="flex-1 flex min-w-full flex-col">
        <header className="flex items-center justify-between h-16 px-4 sm:px-6 border-b">
          <div className="font-semibold">Dashboard</div>
          <UserNav user={session?.user} />
        </header>
        <main className="flex-1 overflow-auto p-5">{children}</main>
      </SidebarInset>

    </div>
  )
}

