import { useRef, useState, useEffect } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/constants/experience";
import { ExperienceItem } from "@/types";

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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ItemCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex flex-col gap-3 bg-[#0c0c0c81] border border-[#141414] rounded-2xl transition-all px-5 py-6 hover:border-[#1F1F1F] hover:bg-[#1616168e]">
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.15em",
        }}
        className="text-[#4e4e4e] text-xs"
      >
        {item.period}
      </span>

      <h3
        className="text-[#B9B9B9] text-md font-semibold"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>

      <p
        className="text-[#4e4e4e] text-[0.75rem]"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.08em",
        }}
      >
        {item.institution}
      </p>

      {item.bullets.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {item.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[#918f8f] text-[.8rem]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.6,
              }}
            >
              <span className="text-[#2e2e2e] mt-1.5 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {item.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {item.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.08em",
              }}
              className="text-[#616060] text-[.6rem] px-1 py-1.2 bg-[#141414] border border-[#1A1A1A] rounded-[.3rem] transition-all hover:border-[#494848]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const { ref, isVisible } = useItemVisible();
  const isLeft = index % 2 === 0;
  const isWork = item.type === "work";

  return (
    <div ref={ref} className="relative flex items-start mb-12">
      <div
        className="w-[calc(50%-18px)] pr-8"
        style={{
          opacity: isLeft ? (isVisible ? 1 : 0) : 0,
          transform:
            isLeft && !isVisible ? "translateX(-40px)" : "translateX(0)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          visibility: isLeft ? "visible" : "hidden",
          pointerEvents: isLeft ? "auto" : "none",
        }}
      >
        {isLeft && <ItemCard item={item} />}
      </div>

      <div
        className="absolute flex items-center justify-center rounded-full z-10 w-9 h-9 bg-[#0c0c0c] border border-[#1f1f1f] text-[#565656] left-[50%] top-4"
        style={{ transform: "translateX(-50%)" }}
      >
        {isWork ? <Briefcase size={14} /> : <GraduationCap size={14} />}
      </div>

      <div
        className="w-[calc(50%-18px)] pl-8 ml-auto"
        style={{
          opacity: !isLeft ? (isVisible ? 1 : 0) : 0,
          transform:
            !isLeft && !isVisible ? "translateX(40px)" : "translateX(0)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          visibility: !isLeft ? "visible" : "hidden",
          pointerEvents: !isLeft ? "auto" : "none",
        }}
      >
        {!isLeft && <ItemCard item={item} />}
      </div>
    </div>
  );
}

function MobileTimelineItem({ item }: { item: ExperienceItem; index: number }) {
  const { ref, isVisible } = useItemVisible();
  const isWork = item.type === "work";

  return (
    <div ref={ref} className="relative flex items-start gap-4 mb-6">
      <div className="flex items-center justify-center rounded-full z-10 w-8 h-8 bg-[#0c0c0c] border border-[#1f1f1f] text-[#565656] shrink-0">
        {isWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
      </div>

      <div
        className="flex-1 pb-2"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <ItemCard item={item} />
      </div>
    </div>
  );
}

export function Experience() {
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
      id="experience"
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
            Minha <span className="text-white font-extrabold">Jornada</span>
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: 1.7,
            }}
            className="text-[#565656] max-w-lg text-md max-sm:text-[0.8rem]"
          >
            Experiências profissionais e acadêmicas que moldaram minha
            trajetória.
          </p>
        </div>

        <div className="hidden md:block relative">
          <div
            className="absolute top-0 bottom-0 w-px bg-[#141414] left-[50%]"
            style={{ transform: "translateX(-50%)" }}
            aria-hidden="true"
          />
          {experiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="flex flex-col md:hidden relative">
          <div
            className="absolute top-0 bottom-0 w-px bg-[#141414] left-4"
            aria-hidden="true"
          />
          {experiences.map((item, index) => (
            <MobileTimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
