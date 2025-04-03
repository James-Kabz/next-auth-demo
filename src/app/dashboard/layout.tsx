import { Suspense } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { Analytics } from '@vercel/analytics/next';

import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { authOptions } from "@/lib/auth/auth"

// Import the loading skeleton
import DashboardLoading from "./loading"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }
  
  const user = session.user;
  
  return (
    <SidebarProvider>
      {user && <DashboardSidebar user={user} />}
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          {user && <DashboardHeader user={user} />}
          <main className="flex-1 p-2">
            <Suspense fallback={<DashboardLoading />}>
              {children}
            </Suspense>
          </main>
          <Analytics/>
        </div>
      </div>
    </SidebarProvider>
  )
}