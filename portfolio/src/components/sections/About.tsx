import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const infoItems = [
  { label: "CARGO", value: "Desenvolvedor Full Stack" },
  { label: "CURSO", value: "Engenharia de Software" },
  { label: "FACULDADE", value: "Universidade Federal do Ceará" },
];

export function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center py-32 mt-20 max-sm:mt-0 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20 max-lg:px-10">
        <div
          className="flex flex-col items-center gap-6 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light text-[#b6b4b4]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Quem sou <span className="text-white font-extrabold ">Eu?</span>
          </h2>
          <p
            className="max-w-lg text-[#565656] text-md max-sm:text-[0.8rem] leading-1.5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 1.5,
            }}
          >
            Um Desenvolvedor Full Stack que transforma requisitos complexos em
            aplicações escaláveis, seguras e de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.85,
              }}
              className="text-[#615e5e] text-md"
            >
              Sou <strong className="text-white font-bold">Vitor Levi</strong>{" "}
              Desenvolvedor Full Stack. Atualmente no primeiro semestre de
              Engenharia de Software na Universidade Federal do Ceará.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.85,
              }}
              className="text-[#615e5e] text-md"
            >
              Já atuei em projetos para organizações internacionais e aplicações
              governamentais, sempre focado em entregar soluções que geram
              impacto real e mensurável. Me especializo em construir aplicações
              completas com{" "}
              <strong className="text-[#CCCCCC] font-bold">TypeScript</strong>,{" "}
              <strong className="text-[#CCCCCC] font-bold">Node.js</strong>,{" "}
              <strong className="text-[#CCCCCC] font-bold">React</strong>,{" "}
              <strong className="text-[#CCCCCC] font-bold">Next.js</strong> ,{" "}
              <strong className="text-[#CCCCCC] font-bold">PostgreSQL</strong> e{" "}
              <strong className="text-[#CCCCCC] font-bold">Docker</strong>.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.85,
              }}
              className="text-[#615e5e] text-md"
            >
              Arquitetura limpa e código bem estruturado não são opcionais pra
              mim, são o padrão. Transformo requisitos complexos em produtos
              funcionais, priorizando performance, segurança e experiência do
              usuário em cada decisão técnica.
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              className="text-md italic text-[#313030]"
            >
              Sempre aprendendo, sempre construindo.
            </p>
          </div>

          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <div className="flex flex-col overflow-hidden bg-[#0f0f0f70] border border-[#1A1A1A] rounded-2xl mb-6">
              {infoItems.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-7 py-5 gap-2 transition-all hover:bg-[#2b2a2a70]"
                  style={{
                    borderBottom:
                      index < infoItems.length - 1
                        ? "1px solid #141414"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.15em",
                    }}
                    className="text-[#3C3C3C] text-xs max-sm:text-[0.6rem]"
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                    className="text-[#ccc] text-md max-sm:text-[0.8rem] font-medium"
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#292929] bg-[#111111]px-6 py-5 tracking-[0.1em] text-[#9A9A9A] no-underline transition-all duration-200 hover:border-[#5A5959] hover:bg-[#181818] hover:text-white"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
