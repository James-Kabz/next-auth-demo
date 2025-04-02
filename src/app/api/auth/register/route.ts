import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import { sendEmail } from "@/lib/email/email"
import { getEmailVerificationTemplate } from "@/lib/email/email-template"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Name, email, and password are required" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex")

    // Check if token already exists (extremely unlikely but good practice)
    const tokenExists = await prisma.user.findFirst({
      where: { verificationToken },
    })

    if (tokenExists) {
      // Generate a new token if collision occurs
      return NextResponse.json({ message: "Please try again" }, { status: 500 })
    }

    // Get default guest role
    const guestRole = await prisma.role.findUnique({
      where: { name: "guest" },
    })

    if (!guestRole) {
      return NextResponse.json({ message: "Default role not found" }, { status: 500 })
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        verificationToken,
        roleId: guestRole.id,
      },
    })

    // Create verification URL
    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${verificationToken}`

    // Get email template
    const { subject, html, text } = getEmailVerificationTemplate(user.name || "", verificationUrl)

    // Send verification email
    await sendEmail({
      to: user.email || "",
      subject,
      html,
      text,
    })

    return NextResponse.json(
      {
        message: "User registered successfully. Please check your email to verify your account.",
        // Only for development purposes, remove in production
        ...(process.env.NODE_ENV === "development" && { verificationUrl }),
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

