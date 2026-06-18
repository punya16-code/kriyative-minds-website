import nodemailer from "nodemailer";

export async function GET() {
  return Response.json({
    message: "API Working!",
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("FORM RECEIVED:", data);

    const formType =
      data.type === "Enrollment Request"
        ? "Enrollment Request"
        : "Demo Request";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject:
        formType === "Enrollment Request"
          ? "New Enrollment Request - KriyativeMinds"
          : "New Demo Request - KriyativeMinds",

      html: `
        <h2>
          ${
            formType === "Enrollment Request"
              ? "🎓 New Enrollment Request"
              : "🚀 New Demo Request"
          }
        </h2>

        <p><strong>Form Type:</strong> ${formType}</p>

        <hr />

        <p><strong>Parent Name:</strong> ${data.parentName}</p>

        <p><strong>Student Name:</strong> ${data.studentName}</p>

        <p><strong>Grade:</strong> ${data.grade}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        ${
          data.mode
            ? `<p><strong>Mode:</strong> ${data.mode}</p>`
            : ""
        }

        <p><strong>Camp:</strong> ${data.camp}</p>

        <p>
          <strong>School:</strong>
          ${data.school || "Not Provided"}
        </p>

        ${
          data.message
            ? `<p><strong>Message:</strong> ${data.message}</p>`
            : ""
        }
      `,
    });

    console.log("✅ EMAIL SENT SUCCESSFULLY");

    return Response.json({
      success: true,
      message:
        formType === "Enrollment Request"
          ? "Enrollment request submitted successfully."
          : "Demo request submitted successfully.",
    });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}