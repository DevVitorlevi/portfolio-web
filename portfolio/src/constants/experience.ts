import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Desenvolvedor Full Stack — Freelance",
    institution: "Autônomo",
    period: "Set 2024 – Presente",
    bullets: [
      "Transformei operações 100% manuais em sistemas inteligentes para clientes de diferentes segmentos, automatizando rotinas de estoque e agendamento e reduzindo em até 50% o tempo operacional das equipes.",
      "Projetei APIs RESTful escaláveis com autenticação JWT, RBAC e validação via Zod, garantindo segurança e manutenibilidade em projetos de médio e longo prazo sem comprometer a performance.",
      "Gerenciei o ciclo completo de cada projeto, requisitos, arquitetura, desenvolvimento, testes e deploy, aplicando Clean Code, Clean Architecture, DDD e SOLID para garantir que cada entrega fosse sustentável e de fácil evolução.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "React",
      "Next.js",
      "Tailwind",
      "Docker",
    ],
  },
  {
    id: 2,
    type: "work",
    title: "Estagiário de Desenvolvimento Full Stack",
    institution: "Golden Cloud Technology",
    period: "Ago 2025 - Dez 2025",
    bullets: [
      "Desenvolvi um painel administrativo em Next.js, TailwindCSS e ShadCN/UI com autenticação, dashboards e formulários com validação via Zod, reduzindo em até 30% o tempo da diretoria em auditorias internas",
      " Identifiquei e corrigi uma vulnerabilidade crítica no fluxo de reset de senha, onde o token era retornado diretamente pela API, reestruturando o processo para envio exclusivo via SMTP e eliminando um risco real de exposição de dados dos usuários.",
      "Implementei filtros avançados de busca no backend com Node.js, Prisma ORM e PostgreSQL, suportando múltiplas combinações de parâmetros e reduzindo o tempo de consulta de minutos para segundos.",
      "Automatizei testes E2E em sistemas governamentais com Cypress e Gherkin (BDD), cobrindo fluxos críticos de cadastro e edição de dados e garantindo estabilidade das entregas em produção.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadCN/UI",
      "Prisma",
      "Postman",
      "Cypress",
      "Gherkin BDD",
      "Git",
    ],
  },
  {
    id: 3,
    type: "education",
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "EEEP Jaime da Cunha Rebouças",
    period: "Fev 2022 – Dez 2025",
    bullets: [
      "Formação técnica integrada ao ensino médio com foco em desenvolvimento de software.",
      "Participei de competições de empreendedorismo desenvolvendo e gerenciando sistemas em equipe, com exposição a MVP, validação de ideias e gestão de projetos.",
      "Conquistei 2º lugar na Feira de Ciências com pesquisa sobre erosão costeira em Icapuí (CE), desenvolvendo também um artigo para o projeto.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "Git"],
  },
];
