import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Send emails
    await sendContactEmails({
      name: name.trim(),
      email: email.trim(),
      phone: body.phone?.trim() || "",
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully. We will contact you shortly!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Failed to send message. Please try again or contact us directly.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
