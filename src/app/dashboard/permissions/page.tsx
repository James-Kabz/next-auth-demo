import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RolesTable } from "@/components/dashboard/roles-table"
import { PermissionsTable } from "@/components/dashboard/permissions-table"

export default function PermissionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Permissions</h1>
        <p className="text-muted-foreground">Manage roles and permissions for your application.</p>
      </div>

      <Tabs defaultValue="roles" className="space-y-4">
        <TabsList>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>
        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Roles</CardTitle>
              <CardDescription>Manage user roles and their associated permissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <RolesTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
              <CardDescription>View and manage individual permissions in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <PermissionsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

