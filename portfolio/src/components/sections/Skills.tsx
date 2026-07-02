import React from "react";
import { Code2, Settings2, Wrench, BookOpen } from "lucide-react";
import GlareHover from "@/components/ui/GlareHover";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { skills } from "@/constants/skills";
import { SkillCategory } from "@/types";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 size={18} />,
  backend: <Settings2 size={18} />,
  tools: <Wrench size={18} />,
  methodologies: <BookOpen size={18} />,
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Ferramentas",
  methodologies: "Metodologias",
};

function CategoryCard({
  category,
  isVisible,
  blockIndex,
}: {
  category: SkillCategory;
  isVisible: boolean;
  blockIndex: number;
}) {
  const label = categoryLabels[category.category] ?? category.label;
  const icon = categoryIcons[category.category];
  const isMethodologies = category.category === "methodologies";

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${blockIndex * 120}ms, transform 0.6s ease ${blockIndex * 120}ms`,
      }}
    >
      <GlareHover
        width="100%"
        height="100%"
        borderRadius="14px"
        borderColor="#1A1A1A"
        glareColor="#ffffff"
        glareOpacity={0.05}
        glareSize={350}
        transitionDuration={700}
      >
        <div
          className="flex flex-col gap-4 w-full h-full"
          style={{ padding: "1.5rem" }}
        >
          <div className="flex items-center justify-between border-b border-b-[#2c2b2b] pb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-[#141414] border border-[#1F1F1F] rounded-lg text-[#565656]">
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "-0.01em",
                }}
                className="text-[#ccc] text-md font-semibold"
              >
                {label}
              </h3>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.1em",
              }}
              className="text-[#1F1F1F] text-[11px]"
            >
              {String(blockIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {!isMethodologies && (
            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-[#2c2c2c48] flex flex-col items-center justify-center border border-[#2c2b2b] rounded-xl p-2 gap-2 transition-transform duration-200 hover:scale-110 cursor-default"
                  style={{ width: "72px", height: "72px", flexShrink: 0 }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                    }}
                    className="text-white text-[9px] text-center"
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {isMethodologies && category.methodologies && (
            <div className="flex flex-wrap gap-2">
              {category.methodologies.map((method) => (
                <span
                  key={method}
                  className="border border-[#2c2b2b] rounded-lg transition-all duration-200 hover:border-[#4a4a4a] hover:text-[#cccccc] cursor-default"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#565656",
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    padding: "6px 14px",
                    backgroundColor: "#2c2c2c48",
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          )}
        </div>
      </GlareHover>
    </div>
  );
}

export function Skills() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver({
    threshold: 0.08,
  });

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col justify-center py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20">
        <div
          className="flex flex-col items-center gap-4 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light text-[#b6b4b4]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Minha <span className="text-white font-extrabold">Stack</span>
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 1.7,
            }}
            className="text-[#565656] max-w-lg text-md max-sm:text-[0.8rem]"
          >
            Ferramentas e tecnologias que uso no dia a dia para construir
            aplicações completas e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((category, index) => (
            <CategoryCard
              key={category.category}
              category={category}
              isVisible={isVisible}
              blockIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
