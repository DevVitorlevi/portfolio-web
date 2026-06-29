import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Desenvolvedor Backend — Freelance",
    institution: "Archival Consciousness (Países Baixos)",
    period: "Out 2024 – Jan 2025",
    bullets: [
      "Desenvolvi o backend completo do projeto Bibliograph como único desenvolvedor backend, utilizando Common Lisp com Hunchentoot e cl-prevalence.",
      "Implementei arquitetura limpa com DDD, autenticação JWT, controle de acesso RBAC e testes com FiveAM.",
      "Negociei e estruturei contrato B2B internacional com recebimento em euros via Wise.",
    ],
    stack: [
      "Common Lisp",
      "Hunchentoot",
      "JWT",
      "RBAC",
      "DDD",
      "Clean Architecture",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Desenvolvedor Full Stack — Freelance",
    institution: "Autônomo",
    period: "Set 2024 – Presente",
    bullets: [
      "Desenvolvimento de aplicações web completas com foco em backend, utilizando Node.js, Fastify, Prisma e PostgreSQL.",
      "Aplicação de Clean Architecture, SOLID e TDD em projetos reais com entregas para clientes.",
      "Atuação em todo o ciclo de desenvolvimento: levantamento de requisitos, arquitetura, implementação e deploy.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React",
      "Next.js",
      "Docker",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "Estagiário de Desenvolvimento",
    institution: "Golden Cloud Technology",
    period: "2024",
    bullets: [
      "Participei do desenvolvimento de funcionalidades em sistemas web internos.",
      "Colaborei com a equipe técnica em tarefas de manutenção e evolução de sistemas.",
    ],
    stack: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 4,
    type: "education",
    title: "Bacharelado em Engenharia de Software",
    institution: "UFC — Campus Russas",
    period: "Ago 2026 – Presente",
    bullets: [
      "Ingresso pelo SISU 2026 na Universidade Federal do Ceará, Campus Russas.",
    ],
    stack: [],
  },
  {
    id: 5,
    type: "education",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "EEEP Jaime da Cunha Rebouças",
    period: "Fev 2022 – Dez 2024",
    bullets: [
      "Formação técnica integrada ao ensino médio com foco em desenvolvimento de software.",
      "Participei de competições de empreendedorismo desenvolvendo e gerenciando sistemas em equipe, com exposição a MVP, validação de ideias e gestão de projetos.",
      "Conquistei 2º lugar na Feira de Ciências com pesquisa sobre erosão costeira em Icapuí (CE), desenvolvendo também um artigo para o projeto.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
];
