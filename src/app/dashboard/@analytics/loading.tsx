// app/dashboard/analytics/loading.tsx
import { SkeletonChart } from "@/components/ui/skeleton-chart"
import { Skeleton } from "@/components/ui/skeleton"

export default function AnalyticsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <SkeletonChart />
        <SkeletonChart />
      </div>
      
      <SkeletonChart />
      
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-[150px] rounded-md" />
        <Skeleton className="h-[150px] rounded-md" />
        <Skeleton className="h-[150px] rounded-md" />
      </div>
    </div>
  )
}