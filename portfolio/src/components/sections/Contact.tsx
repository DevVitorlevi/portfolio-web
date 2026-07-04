import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations/contactSchema";
import { sendEmail } from "@/lib/emailjs";

const contactItems = [
  {
    label: "EMAIL",
    value: "levivitor8@gmail.com",
    href: "mailto:levivitor8@gmail.com",
    icon: "https://skills.syvixor.com/api/icons?i=gmail",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/vitor-levi",
    href: "https://www.linkedin.com/in/vitor-levi/",
    icon: "https://skills.syvixor.com/api/icons?i=linkedin",
  },
  {
    label: "GITHUB",
    value: "github.com/DevVitorlevi",
    href: "https://github.com/DevVitorlevi",
    icon: "https://skills.syvixor.com/api/icons?i=github",
  },
];

export function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);
    setError(false);
    try {
      await sendEmail(data);
      setSent(true);
      reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20">
        <div
          ref={titleRef}
          className="flex flex-col items-center gap-4 text-center transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <h2
            className="leading-none tracking-tight text-7xl max-sm:text-4xl font-light text-[#b6b4b4]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Vamos{" "}
            <span className="text-white font-extrabold">Trabalhar Juntos</span>
          </h2>
          <p
            className="text-[#565656] max-w-lg text-md max-sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Minha caixa de entrada está sempre aberta.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 delay-200"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              {contactItems.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "EMAIL" ? "_blank" : undefined}
                  rel={label !== "EMAIL" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between px-5 py-4 bg-[#0C0C0C] border border-[#141414] rounded-xl hover:border-[#1F1F1F] transition-all duration-200 no-underline"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#141414] border border-[#1A1A1A] rounded-md shrink-0">
                      <img
                        src={icon}
                        alt={label}
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-[#2e2e2e] text-[9px] tracking-[0.15em]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-[#9C9C9C] text-sm"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#2e2e2e] text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#0C0C0C] border border-[#141414] rounded-2xl p-8">
            <span
              className="block text-[#3C3C3C] text-[12px] tracking-[0.2em] pb-4 mb-6 border-b border-[#141414]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              ENVIE UMA MENSAGEM
            </span>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#3C3C3C] text-[10px] tracking-[0.15em]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    NOME COMPLETO *
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Vitor Levi"
                    className={`w-full px-4 py-3 bg-[#161616] rounded-lg text-[#C4C4C4] text-sm outline-none transition-colors duration-200 placeholder:text-[#2e2e2e] ${errors.name ? "border border-red-500" : "border border-[#1F1F1F] focus:border-[#2e2e2e]"}`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                  {errors.name && (
                    <span
                      className="text-red-500 text-[11px]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-[#3C3C3C] text-[10px] tracking-[0.15em]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    EMAIL *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@exemplo.com"
                    className={`w-full px-4 py-3 bg-[#161616] rounded-lg text-[#C4C4C4] text-sm outline-none transition-colors duration-200 placeholder:text-[#2e2e2e] ${errors.email ? "border border-red-500" : "border border-[#1F1F1F] focus:border-[#2e2e2e]"}`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  />
                  {errors.email && (
                    <span
                      className="text-red-500 text-[11px]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#3C3C3C] text-[10px] tracking-[0.15em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ASSUNTO
                </label>
                <input
                  {...register("subject")}
                  placeholder="Colaboração em projeto..."
                  className="w-full px-4 py-3 bg-[#161616] border border-[#1F1F1F] focus:border-[#2e2e2e] rounded-lg text-[#C4C4C4] text-sm outline-none transition-colors duration-200 placeholder:text-[#2e2e2e]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-[#3C3C3C] text-[10px] tracking-[0.15em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  MENSAGEM *
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Me conte sobre seu projeto..."
                  rows={5}
                  className={`w-full px-4 py-3 bg-[#161616] rounded-lg text-[#C4C4C4] text-sm outline-none transition-colors duration-200 placeholder:text-[#2e2e2e] resize-none ${errors.message ? "border border-red-500" : "border border-[#1F1F1F] focus:border-[#2e2e2e]"}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
                {errors.message && (
                  <span
                    className="text-red-500 text-[11px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {errors.message.message}
                  </span>
                )}
              </div>

              {sent && (
                <p
                  className="text-green-400 text-[13px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Mensagem enviada com sucesso!
                </p>
              )}
              {error && (
                <p
                  className="text-red-500 text-[13px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Erro ao enviar. Tente novamente.
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black text-sm font-medium tracking-widest rounded-lg transition-all duration-200 hover:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span>{sending ? "Enviando..." : "Enviar Mensagem"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
