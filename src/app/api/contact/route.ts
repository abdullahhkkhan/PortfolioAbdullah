import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactFormData } from "../../../lib/Sendemail";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactFormData>;

    const { name, email, subject, message } = body;

    // ── Basic server-side validation ──────────────────────────────────────
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "General Inquiry",
      message: message.trim(),
    });

    if (!result.success) {
      console.error("[/api/contact] sendContactEmail failed:", result.error);
      return NextResponse.json(
        { error: result.error ?? "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}