import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, mobile } = await request.json();

    if (!name || !email || !subject || !message || !mobile) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      // html: `
      //   <div>
      //     <h2 class="color:blue;">New Message</h2>
      //     <p><strong>Name:</strong> ${name}</p>
      //     <p><strong>Email:</strong> ${email}</p>
      //     <p><strong>Mobile:</strong> ${mobile}</p>
      //     <p><strong>Subject:</strong> ${subject}</p>
      //     <p><strong>Message:</strong> ${message}</p>
      //   </div>
      // `,

      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; font-size: 16px;">
      <h2 style="color: #0066cc; font-size: 24px; margin-bottom: 20px;">New Message</h2>
      <p style="font-size: 18px; margin: 12px 0;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 18px; margin: 12px 0;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 18px; margin: 12px 0;"><strong>Mobile:</strong> ${mobile}</p>
      <p style="font-size: 18px; margin: 12px 0;"><strong>Subject:</strong> ${subject}</p>
      <div style="margin-top: 20px;">
        <p style="font-size: 18px; margin: 12px 0;"><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; font-size: 18px;">
          ${message}
        </div>
      </div>
    </div>
  `,
    };

    const autoReplyOptions = {
      from: `"Your Company Name" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting us - ${subject}`,
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; font-size: 16px;">
      <h2 style="color: #0066cc; font-size: 24px; margin-bottom: 20px;">Thank You for Contacting Us</h2>
      <p style="font-size: 18px; margin: 12px 0;">Dear ${name},</p>
      <p style="font-size: 18px; margin: 12px 0;">Thanks for reaching out. We'll reply shortly.</p>
      <p style="font-size: 18px; margin-top: 24px;">Best regards,<br>SRI MURUGAN PET INDUSTRIES</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
