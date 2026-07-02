import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "@/constants/projects";
import { Project } from "@/types";
import Github from "@/assets/github.png";
function useItemVisible() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useItemVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.4s ease ${index * 80}ms, transform 0.4s ease ${index * 80}ms`,
      }}
    >
      <div
        className="flex flex-col bg-[#0f0f0f70] border border-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#1F1F1F] cursor-default h-full hover:bg-[#0f0f0fd2] "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative overflow-hidden bg-[##0a0a0a] h-50">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                filter: hovered ? "brightness(1)" : "brightness(0.6)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: "filter 0.4s ease, transform 0.4s ease",
              }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.4s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.2em",
                }}
                className="text-[#1f1f1f] text-[.8rem]"
              >
                {project.title.toUpperCase()}
              </span>
            </div>
          )}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(12,12,12,0.9) 0%, rgba(0,0,0,0) 60%)",
              opacity: hovered ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        <div className="flex flex-col gap-3 p-5 flex-1 text-md text-[#f2f2f2] font-semibold">
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif ",
              lineHeight: 1.65,
            }}
            className="text-[#4f4f4f] text-[.8rem]"
          >
            {project.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-auto pt-2">
            {project.stack.map((tech) => (
              <img
                src={tech.icon}
                alt={tech.icon}
                width={30}
                height={30}
                className="object-contain"
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#141414]">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center gap-1 transition-all duration-200 hover:scale-105 bg-white  px-1 py-2 rounded-lg decoration-0 w-[60%]"
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                <span className=" text-black font-semibold text-[12px]">
                  Visite
                </span>
                <ExternalLink size={14} className="text-black" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-200 hover:scale-105 px-1 py-2 bg-[#141414] border border-[#413f3f] rounded-lg decoration-none w-[30%]"
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                <span className=" text-[#8d8d8d] text-[12px] font-semibold">
                  GitHub
                </span>
                <img src={Github} className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

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

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-32 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-20">
        <div
          ref={titleRef}
          className="flex flex-col items-center gap-4 text-center"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="leading-none tracking-tight max-sm:text-5xl text-8xl font-light text-[#b6b4b4]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Meus <span className="text-white font-extrabold">Projetos</span>
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 1.7,
            }}
            className="text-[#565656] max-w-lg text-md max-sm:text-[0.8rem]"
          >
            Aplicações reais que desenvolvi do zero — do levantamento de
            requisitos ao deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
