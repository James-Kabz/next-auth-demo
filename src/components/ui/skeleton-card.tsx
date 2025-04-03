// components/ui/skeleton-card.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonCardProps {
  hasFooter?: boolean
  hasAction?: boolean
}

export function SkeletonCard({ hasFooter = false, hasAction = false }: SkeletonCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-5 w-1/3" />
        {hasAction && <Skeleton className="h-4 w-4 rounded-full" />}
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
      {hasFooter && (
        <CardFooter className="p-2">
          <Skeleton className="h-4 w-1/4" />
        </CardFooter>
      )}
    </Card>
  )
}