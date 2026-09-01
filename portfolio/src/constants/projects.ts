import { Project } from "@/types";
import Peixe from "@/assets/projects/peixe.png";
import Icapui from "@/assets/projects/icapui.png";
import Pet from "@/assets/projects/pet.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "FindAFriend",
    description:
      "FindAFriend conecta ORGs de proteção animal a adotantes: ORGs cadastram pets disponíveis, adotantes buscam por cidade e filtram por idade/porte, e o contato final para adoção é feito diretamente via WhatsApp com a ORG, sem intermediação da plataforma.",
    stack: [
      {
        icon: "https://skills.syvixor.com/api/icons?i=ts",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=nextjs",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=tailwind",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=shadcnui",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=node",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=fastify",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=prisma",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=postgresql",
      },
      { icon: "https://skills.syvixor.com/api/icons?i=swagger" },
    ],
    demoUrl: "https://find-a-friend-five.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/FindAFriend/",
    image: Pet,
  },
  {
    id: 2,
    title: "PeixeControl",
    description:
      "PeixeControl é um sistema de gestão de estoque e vendas voltado para peixarias, com controle de produtos, vendas via carrinho, movimentações de estoque e relatórios diário/mensal exportáveis em PDF.",
    stack: [
      {
        icon: "https://skills.syvixor.com/api/icons?i=js",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=react",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=styledcomponents",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=node",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=express",
      },
      {
        icon: "https://skills.syvixor.com/api/icons?i=mongodb",
      },
      { icon: "https://skills.syvixor.com/api/icons?i=swagger" },
    ],
    demoUrl: "https://peixe-control.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/PeixeControl",
    image: Peixe,
  },
  {
    id: 4,
    title: "Icapuí: Quando o Mar Avança",
    description:
      "Site educacional sobre a erosão costeira em Icapuí (CE), abordando a dinâmica do litoral (dunas, falésias, terraços marinhos e delta de maré), a linha do tempo da erosão e as medidas de contenção adotadas pelo município.",
    stack: [
      { icon: "https://skills.syvixor.com/api/icons?i=html" },
      { icon: "https://skills.syvixor.com/api/icons?i=css3" },
      { icon: "https://skills.syvixor.com/api/icons?i=js" },
    ],
    demoUrl: "https://icapui-e-a-erosao-costeira.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/icapui-e-a-erosao-costeira",
    image: Icapui,
  },
];
