import { CheckCircle, Lock, Shield, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A complete authentication system with role-based permissions, Google authentication, and more.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Secure Authentication</h3>
            <p className="text-center text-muted-foreground">
              Email/password and Google authentication with Next-Auth.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Role-Based Permissions</h3>
            <p className="text-center text-muted-foreground">
              Control access with customizable user roles and permissions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">User Management</h3>
            <p className="text-center text-muted-foreground">Complete user management with Prisma ORM and MySQL.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Ready to Use</h3>
            <p className="text-center text-muted-foreground">Pre-built components and layouts using shadcn/ui.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

