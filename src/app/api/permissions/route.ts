import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../lib/auth/auth"
import { checkPermission } from "@/lib/auth/permissions"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const hasViewPermission = await checkPermission("roles:read")

    if (!hasViewPermission) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    const permissions = await prisma.permission.findMany({
      include: {
        _count: {
          select: {
            roles: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    })

    return NextResponse.json({ permissions })
  } catch (error) {
    console.error("Error fetching permissions:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

