import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

/**
 * Creates a Nodemailer transporter using Gmail SMTP.
 * Set the following environment variables in your .env.local:
 *   EMAIL_USER     – your Gmail address (e.g. you@gmail.com)
 *   EMAIL_PASS     – a Gmail App Password (NOT your regular password)
 *                    Generate one at: https://myaccount.google.com/apppasswords
 *   EMAIL_TO       – recipient address (defaults to EMAIL_USER if omitted)
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL on port 465 — avoids the STARTTLS self-signed cert issue
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      // Prevents "self-signed certificate in certificate chain" on Windows
      // caused by antivirus / corporate proxies intercepting TLS locally.
      // Always enforced in production.
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

/**
 * Sends a contact-form email.
 * Returns { success: true } on success, or { success: false, error } on failure.
 */
export async function sendContactEmail(
  data: ContactFormData
): Promise<SendEmailResult> {
  const { name, email, subject, message } = data;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return {
      success: false,
      error:
        "Email credentials are not configured. " +
        "Set EMAIL_USER and EMAIL_PASS in your .env.local file.",
    };
  }

  const transporter = createTransporter();

  const recipientAddress = process.env.EMAIL_TO ?? process.env.EMAIL_USER;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    replyTo: `"${name}" <${email}>`,
    to: recipientAddress,
    subject: `[Portfolio] ${subject} — from ${name}`,
    text: buildPlainText(data),
    html: buildHtml(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error sending email.";
    console.error("[sendContactEmail] Error:", err);
    return { success: false, error: message };
  }
}

// ─── Email body builders ───────────────────────────────────────────────────

function buildPlainText({ name, email, subject, message }: ContactFormData) {
  return [
    `New contact form submission`,
    `─────────────────────────────`,
    `Name    : ${name}`,
    `Email   : ${email}`,
    `Subject : ${subject}`,
    `─────────────────────────────`,
    message,
  ].join("\n");
}

function buildHtml({ name, email, subject, message }: ContactFormData) {
  const escaped = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const paragraphs = escaped
    .split("\n")
    .map((line) => `<p style="margin:0 0 8px">${line || "&nbsp;"}</p>`)
    .join("");

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#0a0f0e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f0e;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0"
          style="background:#0d1a18;border:1px solid rgba(0,255,209,0.15);border-radius:8px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid rgba(0,255,209,0.1);
                        background:linear-gradient(135deg,#0d1a18 0%,#061210 100%);">
              <p style="margin:0 0 4px;font-size:10px;letter-spacing:.34em;text-transform:uppercase;
                          color:#00ffd1;font-weight:700;">Portfolio Contact</p>
              <h1 style="margin:0;font-size:22px;font-weight:800;text-transform:uppercase;
                          color:#fff;letter-spacing:.04em;">New Message Received</h1>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding:28px 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${metaRow("Name", name)}
                ${metaRow("Email", email, `mailto:${email}`)}
                ${metaRow("Subject", subject)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 32px 32px;">
              <p style="margin:0 0 12px;font-size:10px;letter-spacing:.28em;text-transform:uppercase;
                          color:rgba(0,255,209,0.5);font-weight:700;">Message</p>
              <div style="background:rgba(0,255,209,0.04);border:1px solid rgba(0,255,209,0.1);
                            border-radius:4px;padding:18px 20px;font-size:14px;
                            color:rgba(210,240,235,0.85);line-height:1.75;">
                ${paragraphs}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 32px;border-top:1px solid rgba(0,255,209,0.08);
                        font-size:11px;color:rgba(180,220,215,0.3);text-align:center;">
              This email was sent via your portfolio contact form.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function metaRow(label: string, value: string, href?: string) {
  const cell = href
    ? `<a href="${href}" style="color:#00ffd1;text-decoration:none;">${value}</a>`
    : `<span style="color:rgba(210,240,235,0.85);">${value}</span>`;

  return /* html */ `
    <tr>
      <td style="padding:0 0 14px;vertical-align:top;width:90px;">
        <span style="font-size:10px;letter-spacing:.26em;text-transform:uppercase;
                      font-weight:700;color:rgba(0,255,209,0.4);">${label}</span>
      </td>
      <td style="padding:0 0 14px;font-size:14px;">${cell}</td>
    </tr>`;
}