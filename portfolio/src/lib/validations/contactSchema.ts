import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  subject: z.string().max(150, "Limite Atingido").optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
