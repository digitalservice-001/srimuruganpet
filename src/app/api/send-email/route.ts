// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"
// import { convert } from "html-to-text"

// export async function POST(request: Request) {
//   try {
//     const { name, email, subject, message, mobile } = await request.json()

//     if (!name || !email || !subject || !message || !mobile) {
//       return NextResponse.json({ error: "All fields are required." }, { status: 400 })
//     }

//     // HTML content with improved styling
//     const htmlContent = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
//         <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Form Message</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Mobile:</strong> ${mobile}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
//         <p style="margin-top: 20px; font-size: 12px; color: #777;">This message was sent from your website contact form.</p>
//       </div>
//     `

//     const textContent = convert(htmlContent) // fallback plain text

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS, // App Password from Gmail
//       },
//     })

//     // Send to website owner
//     const mailOptions = {
//       from: `"Website Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER, // Send to website owner
//       subject: `New Contact Form: ${subject}`,
//       text: textContent,
//       html: htmlContent,
//       replyTo: email, // allows direct reply to the sender
//     }

//     // Send confirmation to the user
//     const userConfirmation = {
//       from: `"My Profile" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `Thank you for contacting us - ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
//           <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Thank You for Contacting Us</h2>
//           <p>Dear ${name},</p>
//           <p>We have received your message and will get back to you as soon as possible.</p>
//           <p>Here's a summary of your inquiry:</p>
//           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin: 15px 0;">
//             <p><strong>Subject:</strong> ${subject}</p>
//             <p><strong>Message:</strong></p>
//             <div style="white-space: pre-wrap;">${message}</div>
//           </div>
//           <p>If you need immediate assistance, please contact us via WhatsApp at +91 98765 43210.</p>
//           <p>Best regards,</p>
//           <p>The My Profile Team</p>
//         </div>
//       `,
//     }

//     await transporter.verify() // check connection before sending
//     const info = await transporter.sendMail(mailOptions)
//     await transporter.sendMail(userConfirmation)

//     return NextResponse.json({ success: true, messageId: info.messageId })
//   } catch (error) {
//     console.error("Email error:", error)
//     return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
//   }
// }


// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"

// export async function POST(request: Request) {
//   try {
//     const { name, email, subject, message, mobile } = await request.json()

//     // Validate required fields
//     if (!name || !email || !subject || !message || !mobile) {
//       return NextResponse.json(
//         { error: "All fields are required." },
//         { status: 400 }
//       )
//     }

//     // Create email transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_APP_PASSWORD, // Use app-specific password
//       },
//     })

//     // Email to website owner
//     const mailOptions = {
//       from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO || process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `New Contact Form: ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Mobile:</strong> ${mobile}</p>
//           <p><strong>Subject:</strong> ${subject}</p>
//           <p><strong>Message:</strong></p>
//           <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
//             ${message}
//           </div>
//         </div>
//       `,
//     }

//     // Auto-reply to user
//     const autoReplyOptions = {
//       from: `"Your Company Name" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `Thank you for contacting us - ${subject}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px;">
//           <h2>Thank You for Contacting Us</h2>
//           <p>Dear ${name},</p>
//           <p>We have received your message and will get back to you shortly.</p>
//           <p>Best regards,<br/>Your Company Name</p>
//         </div>
//       `,
//     }

//     // Send emails
//     await transporter.verify()
//     await transporter.sendMail(mailOptions)
//     await transporter.sendMail(autoReplyOptions)

//     return NextResponse.json({ 
//       success: true, 
//       message: "Email sent successfully" 
//     })

//   } catch (error) {
//     console.error("Email error:", error)
//     return NextResponse.json(
//       { error: "Failed to send message." },
//       { status: 500 }
//     )
//   }
// }


import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, mobile } = await request.json()

    if (!name || !email || !subject || !message || !mobile) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div>
          <h2>New Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    }

    const autoReplyOptions = {
      from: `"Your Company Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting us - ${subject}`,
      html: `
        <div>
          <p>Dear ${name},</p>
          <p>Thanks for reaching out. We'll reply shortly.</p>
          <p>– Your Company</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })

  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}
