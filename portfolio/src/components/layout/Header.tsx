import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const mobileNavLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
  { label: "Projects", href: "#projects", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

export function Header() {
  const progress = useScrollProgress();
  const { isOpen, close, toggle } = useMobileMenu();

  const handleNavClick = (href: string) => {
    close();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="absolute bottom-0 left-0 h-px transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, #4b5563, #ffffff)",
          }}
          aria-hidden="true"
        />

        <div
          className="mx-auto h-26 flex items-center justify-between xl:justify-center xl:gap-20 2xl:gap-40"
          style={{ padding: "2rem" }}
        >
          <a
            href="#"
            className="text-white text-xl tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            aria-label="Ir para o início"
          >
            {"<Vitor/>"}
          </a>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="tracking-widest transition-colors text-md duration-200 cursor-pointer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#9A9A9A",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9A9A")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-white/10 rounded-xl transition-transform duration-200 hover:scale-105"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#9A9A9A",
                backgroundColor: "#121212",
                letterSpacing: "0.1em",
                padding: "8px 14px",
                fontSize: "13px",
              }}
              aria-label="Abrir currículo em nova aba"
            >
              ↓ CURRÍCULO
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col bg-[#0a0a0a8e] border-2 border-[#201e1e] rounded-md justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
            onClick={toggle}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <Menu className="text-white" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0a0a0a73] z-50 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className="fixed top-0 right-0 h-full max-sm:w-[70%] md:w-80 z-60 lg:hidden flex flex-col border border-t-0 border-[#201e1e]"
        style={{
          backgroundColor: "#080808",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease",
        }}
        aria-hidden={!isOpen}
      >
        <div
          className="flex justify-end border-b border-[#201e1e]"
          style={{ padding: "1rem" }}
        >
          <button
            onClick={close}
            className="w-10 h-10 flex items-center justify-center bg-[#0a0a0a8e] border-2 border-[#201e1e] rounded-md cursor-pointer"
            style={{ color: "#9A9A9A" }}
            aria-label="Fechar menu"
          >
            <X />
          </button>
        </div>

        <nav
          className="flex flex-col gap-2 flex-1"
          style={{ padding: "1.5rem 1rem" }}
          aria-label="Navegação mobile"
        >
          {mobileNavLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`mobile-nav-item${isOpen ? " animate" : ""} cursor-pointer`}
              style={{
                animationDelay: isOpen ? `${index * 60 + 80}ms` : "0ms",
              }}
            >
              <div
                className="nav-item-inner flex items-center gap-4"
                style={{ padding: "0.875rem 1rem" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#252525",
                    fontSize: "11px",
                  }}
                >
                  {link.number}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#9A9A9A",
                    fontSize: "15px",
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </nav>

        <div
          className="flex flex-col gap-2 border-t border-[#201e1e]"
          style={{ padding: "1rem" }}
        >
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`mobile-bottom-btn${isOpen ? " animate" : ""} border border-white/10 rounded-sm text-center transition-all hover:border-[#5f5c5c]`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#9A9A9A",
              backgroundColor: "#121212",
              fontSize: "11px",
              letterSpacing: "0.1em",
              padding: "8px 12px",
              animationDelay: isOpen ? "500ms" : "0ms",
            }}
            aria-label="Baixar currículo"
          >
            ↓ BAIXAR CV
          </a>
        </div>
      </div>
    </>
  );
}
