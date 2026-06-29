import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export interface EmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: payload.name,
      from_email: payload.email,
      subject: payload.subject ?? "Sem assunto",
      message: payload.message,
    },
    PUBLIC_KEY,
  );
}
