


import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Set up transporter
   const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });


    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender info
      to: 'tusharsuthar081@gmail.com', // Your receiving email
      subject: `New Contact Form Submission from ${name} (${email})`,
      html: `
        <h3>New Message from Website Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
