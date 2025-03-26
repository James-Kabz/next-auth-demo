"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "@/components/dashboard/user-nav";

interface Props {
  user: {
    id?: string | null;
    role?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function DashboardHeader({ user }: Props) {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-right justify-between py-4">
        <div className="flex items-center gap-2 md:gap-4">
          <SidebarTrigger />
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="hidden font-bold md:inline-block">Auth System</span>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
