import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === "true",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: "abhi.kk716@gmail.com",
      subject: `New Inquiry from ${body.fullName}`,
      html: `
        <p><strong>Full Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Organization:</strong> ${body.organization}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <p><strong>Submitted From:</strong> ${body.page}</p>
      `,
    });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ message: "Email failed to send" }, { status: 500 });
  }
}
