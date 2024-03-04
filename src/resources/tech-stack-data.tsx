import { ReactElement } from "react";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { DiJava, DiJavascript1 } from "react-icons/di";
import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import {
  SiAmazonrds,
  SiExpress,
  SiMui,
  SiNestjs,
  SiPrisma,
  SiStyledcomponents,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import "../styles/tech-stack.css";

type CategoryType = {
  cat_type?: string;
  cat_color?: string;
  cat_icon?: ReactElement;
};
export type StackType = {
  name: string;
  icon: ReactElement;
  color: string;
};
export const categories: CategoryType[] = [
  {
    cat_type: "Backend",
    cat_color: "#E0234E",
    cat_icon: (
      <SiNestjs
        className="lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-24 sm:h-24 xs:h-24 xs:w-24 xxs:h-24 xxs:w-24"
        color="#E0234E"
      />
    ),
  },
  {
    cat_type: "Frontend",
    cat_color: "rgb(97, 219, 251)",
    cat_icon: (
      <FaReact
        className="lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-24 sm:h-24 xs:h-24 xs:w-24 xxs:h-24 xxs:w-24"
        color="rgb(97, 219, 251)"
      />
    ),
  },
];

export const backend_stack: StackType[] = [
  {
    name: "NestJs",
    icon: <SiNestjs color="#E0234E" className="icon-cards " />,
    color: "#E0234E",
  },
  {
    name: "ExpressJs",
    icon: <SiExpress color="royalblue" className="icon-cards " />,
    color: "royalblue",
  },
  {
    name: "NodeJs",
    icon: <FaNode color="#68a063" className="icon-cards " />,
    color: "#68a063",
  },
  {
    name: "SprintBoot",
    icon: <BiLogoSpringBoot color="#8BC34A" className="icon-cards " />,
    color: "#8BC34A",
  },
  {
    name: "Primsa",
    icon: <SiPrisma color="#800000" className="icon-cards " />,
    color: "#800000",
  },
  {
    name: "KnexJs",
    icon: <TbSql color="orange" className="icon-cards " />,
    color: "orange",
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql color="#0064a5" className="icon-cards " />,
    color: " #0064a5",
  },
  {
    name: "Amazon RDS",
    icon: <SiAmazonrds color="dodgerblue" className="icon-cards " />,
    color: "dodgerblue",
  },
  {
    name: "Java",
    icon: <DiJava color="#5382a1" className="icon-cards " />,
    color: "#5382a1",
  },
  {
    name: "Typescript",
    icon: <SiTypescript color="#007acc" className="icon-cards " />,
    color: "#007acc",
  },
  {
    name: "Javascript",
    icon: <DiJavascript1 color="#F0DB4F" className="icon-cards " />,
    color: "#F0DB4F",
  },
];

export const frontend_stack: StackType[] = [
  {
    name: "React",
    icon: <FaReact color="rgb(97, 219, 251)" className="icon-cards " />,
    color: "rgb(97, 219, 251)",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 color="#e34c26" className="icon-cards " />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    icon: <FaCss3 color="#264de4" className="icon-cards " />,
    color: "#264de4",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap color="#563d7c" className="icon-cards " />,
    color: "#563d7c",
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents color="purple" className="icon-cards " />,
    color: "purple",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss color="#6d28d9" className="icon-cards " />,
    color: "#6d28d9",
  },
  {
    name: "MUI",
    icon: <SiMui color="#757de8" className="icon-cards " />,
    color: "#757de8",
  },
  {
    name: "Svelte",
    icon: <SiSvelte color="#aa1e1e" className="icon-cards " />,
    color: "#aa1e1e",
  },
  {
    name: "Vite",
    icon: <SiVite color="#2a623d" className="icon-cards " />,
    color: "#2a623d",
  },
  {
    name: "Typescript",
    icon: <SiTypescript color="#007acc" className="icon-cards " />,
    color: "#007acc",
  },
  {
    name: "Javascript",
    icon: <DiJavascript1 color="#F0DB4F" className="icon-cards " />,
    color: "#F0DB4F",
  },
];
