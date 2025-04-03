// app/loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function RootLoading() {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <Skeleton className="h-8 w-1/3" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-[200px] rounded-md" />
          <Skeleton className="h-[200px] rounded-md" />
        </div>
        <Skeleton className="h-[300px] rounded-md" />
      </div>
    </div>
  )
}