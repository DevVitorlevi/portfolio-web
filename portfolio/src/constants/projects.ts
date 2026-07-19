import { Project } from "@/types";
import FindaFriend from "@/assets/findafriend.png";
import Peixe from "@/assets/peixe.png";
import Touring from "@/assets/car.png";
import Icapui from "@/assets/icapui.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "FindAFriend",
    description:
      "Sistema intuitivo para cadastro, visualização e adoção de pets. Interface responsiva e acessível, com gerenciamento de adoções e agendamento de visitas.",
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
      { icon: "https://skills.syvixor.com/api/icons?i=vitest" },
      { icon: "https://skills.syvixor.com/api/icons?i=docker" },
    ],
    demoUrl: "https://find-a-friend-five.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/FindAFriend",
    image: FindaFriend,
  },
  {
    id: 2,
    title: "PeixeControl",
    description:
      "Sistema inteligente de gerenciamento de estoque e vendas desenvolvido para peixarias. Compatível com celular e computador, com design responsivo e interface intuitiva.",
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
    ],
    demoUrl: "peixe-control.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/PeixeControl",
    image: Peixe,
  },
  {
    id: 3,
    title: "TouringCars",
    description:
      "Landing page moderna e sofisticada sobre o universo automotivo premium. Design minimalista e animações suaves que reforçam a sensação de exclusividade.",
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
    ],
    demoUrl: "touring-cars-delta.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/TouringCars",
    image: Touring,
  },
  {
    id: 4,
    title: "Icapuí: Quando o Mar Avança",
    description:
      "Estudo sobre a erosão costeira no litoral de Icapuí, analisando suas causas naturais e antrópicas, incluindo urbanização, turismo e atividades econômicas.",
    stack: [
      { icon: "https://skills.syvixor.com/api/icons?i=html" },
      { icon: "https://skills.syvixor.com/api/icons?i=css3" },
      { icon: "https://skills.syvixor.com/api/icons?i=js" },
    ],
    demoUrl: "icapui-e-a-erosao-costeira.vercel.app",
    githubUrl: "https://github.com/DevVitorlevi/icapui-e-a-erosao-costeira",
    image: Icapui,
  },
];
