import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Next.js Authentication Template</h1>
        <p className="max-w-[600px] text-muted-foreground">
          A complete authentication solution with Next-Auth, Prisma, and shadcn/ui components.
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>Sign in with email/password or Google OAuth</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Complete authentication flow with Next-Auth, including email/password and social logins.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/auth/login">
                Try Authentication <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Role-based dashboard with permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Access the protected dashboard with different views based on user roles and permissions.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard">
                View Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

