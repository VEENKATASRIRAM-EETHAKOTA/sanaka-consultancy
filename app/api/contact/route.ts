import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

/**
 * POST /api/contact
 * Handles contact form submissions and sends email notification
 */
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json()
    const { name, email, message } = body

    // Validate that all required fields are present
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Validate field lengths
    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 })
    }

    // This is the email service that will send your emails
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail's SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (e.g., youremail@gmail.com)
        pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password (NOT your regular password)
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your Gmail)
      to: process.env.EMAIL_USER, // Recipient address (your email where you want to receive messages)
      subject: `New Contact Form Submission from ${name}`, // Email subject line
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `, // Plain text version of the email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // HTML version of the email (looks better in email clients)
    }

    await transporter.sendMail(mailOptions)

    console.log("Contact form submission received and email sent:", { name, email })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    // Handle any unexpected errors
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
