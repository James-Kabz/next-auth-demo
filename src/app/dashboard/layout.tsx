"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { UserNav } from "@/components/dashboard/user-nav"
import { Loader2 } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect("/auth/login")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1">
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 border-b bg-background">
          <div className="font-semibold">Dashboard</div>
          <UserNav user={session?.user} />
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

