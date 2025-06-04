import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
    try {
        console.log("API route called - starting email process")

        const body = await req.json()
        console.log("Form data received:", body)

        // Fix: createTransport instead of createTransporter
        const transporter = nodemailer.createTransport({
            host: "smtphz.qiye.163.com",
            port: 994,
            secure: true, // SSL
            auth: {
                user: "no-reply@pranaair.com",
                pass: "fMX&01C6/JJ6",
            },
            // Add TLS configuration for better compatibility
            tls: {
                rejectUnauthorized: false,
            },
        })

        console.log("Transporter created, verifying connection...")

        // Verify SMTP connection
        await transporter.verify()
        console.log("SMTP connection verified successfully")

        const mailOptions = {
            from: '"Prana Air" <no-reply@pranaair.com>',
            to: "abhi.kk716@gmail.com",
            subject: `New Inquiry from ${body.Fname || "Unknown User"}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4CAF50; text-align: center;">New Device Inquiry - Prana Air</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p><strong>Full Name:</strong> ${body.Fname || "Not provided"} ${body.Lname || ""}</p>
            <p><strong>Email:</strong> ${body.Email || "Not provided"}</p>
            <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
            <p><strong>Organisation:</strong> ${body.Organisation || "Not provided"}</p>
          </div>

          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Device Requirements:</h3>
            <p><strong>Device Type:</strong> ${body.inout?.join(", ") || "Not selected"}</p>
            <p><strong>Applications:</strong> ${body.app?.join(", ") || "Not selected"}</p>
            <p><strong>Pollutants:</strong> ${body.poll?.join(", ") || "Not selected"}</p>
            <p><strong>Comfort:</strong> ${body.comf?.join(", ") || "Not selected"}</p>
            <p><strong>Gases:</strong> ${body.gas?.join(", ") || "Not selected"}</p>
            <p><strong>Met:</strong> ${body.met?.join(", ") || "Not selected"}</p>
            <p><strong>Connectivity:</strong> ${body.cont?.join(", ") || "Not selected"}</p>
            <p><strong>Power Type:</strong> ${body.power?.join(", ") || "Not selected"}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Prana Air device inquiry form on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
        }

        console.log("Sending email...")
        const result = await transporter.sendMail(mailOptions)
        console.log("Email sent successfully:", result.messageId)

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
            messageId: result.messageId,
        })
    } catch (error) {
        console.error("Detailed email error:", error)

        // Return detailed error information for debugging
        return NextResponse.json(
            {
                success: false,
                message: "Email failed to send",
                error: error.message,
                code: error.code || "UNKNOWN_ERROR",
            },
            { status: 500 },
        )
    }
}
