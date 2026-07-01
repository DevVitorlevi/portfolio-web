import { useState, useEffect, useRef } from "react";
import Ferrofluid from "@/components/ui/Ferrofluid";
import Lanyard from "@/components/ui/Lanyard";
import Me from "@/assets/card-front.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ferrofluidPaused, setFerrofluidPaused] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFerrofluidPaused(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={["#440399", "#5f07a7", "#3e0580", "#7009b4", "#6b07bd"]}
          speed={0.3}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={0.85}
          paused={ferrofluidPaused}
        />
      </div>

      <div className="absolute z-40 hidden lg:block lg:right-[-2%] lg:top-[-11%] lg:w-[50%] lg:h-[80%] pointer-events-auto">
        <Lanyard
          frontImage={Me}
          imageFit="cover"
          position={[0, -1, 30]}
          gravity={[0, -40, 0]}
          fov={9}
          transparent={true}
          lanyardWidth={2}
        />
      </div>

      <div className="relative z-30 w-full">
        <div className="flex justify-between max-lg:justify-center max-sm:p-0 lg:p-15 xl:p-40 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', monospace",
                  color: "#838181",
                  letterSpacing: "0.2em",
                }}
                className="text-xs max-lg:text-center max-lg:text-xl"
              >
                OLÁ, EU SOU
              </p>

              <h1
                className="leading-none text-9xl max-sm:text-6xl max-xl:text-8xl max-lg:text-center tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                Vitor Levi
              </h1>
            </div>

            <p
              className="max-sm:w-[90%] w-145 xl:text-xl leading-relaxed max-sm:text-xs max-lg:text-lg max-lg:text-center max-sm:m-auto"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#545454",
              }}
            >
              Desenvolvedor Full Stack com 2 anos de experiência criando
              aplicações escaláveis. Já atuei em projetos para organizações
              internacionais e aplicações governamentais, sempre focado em
              entregar soluções que geram impacto real e mensurável.
            </p>

            <div className="flex items-center gap-3 max-lg:justify-center flex-wrap">
              <button
                onClick={() => handleScroll("#projects")}
                className="cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#000000",
                  backgroundColor: "#FFFFFF",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  padding: "10px 22px",
                  borderRadius: "4px",
                  fontWeight: 600,
                }}
              >
                VER PROJETOS
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="cursor-pointer border border-white/10 transition-all duration-200 hover:border-white/30 hover:scale-105"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#9A9A9A",
                  backgroundColor: "#121212",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  padding: "10px 22px",
                  borderRadius: "4px",
                }}
              >
                ENTRAR EM CONTATO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
