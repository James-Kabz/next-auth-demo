// app/dashboard/loading.tsx
import { SkeletonCard } from "@/components/ui/skeleton-card"
import { SkeletonChart } from "@/components/ui/skeleton-chart"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Skeleton for welcome card */}
      <div>
        <Skeleton className="h-10 w-1/3 mb-2" />
        <Skeleton className="h-4 w-1/4 mb-4" />
        <Skeleton className="h-4 w-full max-w-md" />
      </div>

      {/* Skeleton for dashboard cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard hasFooter={true} hasAction={true} />
        <SkeletonCard hasFooter={true} hasAction={true} />
        <SkeletonCard hasFooter={true} hasAction={true} />
      </div>

      {/* Skeleton for charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <SkeletonChart />
        </div>
        <div className="col-span-3">
          <SkeletonChart />
        </div>
      </div>
    </div>
  )
}