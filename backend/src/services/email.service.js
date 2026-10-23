import { Resend } from "resend";
import "dotenv/config";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendContactNotification(contact) {
  if (
    (!resend || !process.env.CONTACT_RECEIVER, !process.env.RESEND_FROM_EMAIL)
  ) {
    throw new Error("Email service environment variables are missing");
  }

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [process.env.CONTACT_RECEIVER],
    replyTo: contact.email,
    subject: `Portfolio contact: ${contact.subject}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Subject: ${contact.subject}`,
      "",
      "Message:",
      contact.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend Failed: ${error.message}`);
  }

  return data;
}
