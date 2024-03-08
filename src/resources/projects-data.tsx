import {
  SiExpress,
  SiMui,
  SiNestjs,
  SiPrisma,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import expenseTrackerPng from "../assets/expensetracker.png";
import nodeSpacePng from "../assets/node-space-img.png";
import npmManagerPng from "../assets/npm-manger.png";
import schemaCrafter from "../assets/schema-crafter.png";
import authentication from "../assets/authentication.png";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { urlDict } from "./urls";
import "../styles/projects.css";
import authMicro from "../assets/authmicro.png";

export const projectData = [
  {
    title: "Expense Tracker",
    category: "Full Stack",
    githubUrl: urlDict.expenseTrackerGithubUrl,
    img: expenseTrackerPng,
    description:
      "Expense Tracker is a full-stack application designed to manage expenses efficiently, providing users with insightful financial analytics and controls.",
    stack: [
      <SiExpress color="royalblue" className="w-12 h-12" />,
      <BiLogoPostgresql color=" #0064a5" className="w-12 h-12" />,
      <BsBootstrap color="#563d7c" className="w-12 h-12" />,
      <TbSql color="orange" className="w-12 h-12" />,
      <SiMui color="#757de8" className="w-12 h-12" />,
      <FaReact color="rgb(97, 219, 251)" className="w-12 h-12" />,
      <SiTailwindcss color="#6d28d9" className="w-12 h-12" />,
      <IoLogoElectron color="royalblue" className="w-12 h-12" />,
    ],
  },
  {
    title: "Node Space",
    category: "Full Stack",
    img: nodeSpacePng,
    githubUrl: urlDict.nodeSpaceGithubUrl,
    description:
      "Node-Space is an online platform that allows developers to create creator accounts, write their own blogs, have their own following, and release their own courses.",
    stack: [
      <SiNestjs color="#E0234E" className="w-12 h-12" />,
      <BiLogoPostgresql color=" #0064a5" className="w-12 h-12" />,
      <BsBootstrap color="#563d7c" className="w-12 h-12" />,
      <SiPrisma color="#800000" className="w-12 h-12" />,
      <SiMui color="#757de8" className="w-12 h-12" />,
      <FaReact color="rgb(97, 219, 251)" className="w-12 h-12" />,
      <SiTailwindcss color="#6d28d9" className="w-12 h-12" />,
      <SiTypescript color="#007acc" className="w-12 h-12" />,
    ],
  },
  {
    title: "NPM Manager",
    category: "Full Stack",
    linkedinUrl: urlDict.npmManagerLinkedInUrl,
    img: npmManagerPng,
    description:
      "Developed an Electron application to automate the dynamic startup of Node.js applications located in different directories, significantly improving development efficiency: used child-process module in node. Engineered a feature, that, with simple configuration, and one-click of a button, instantiates a react application and downloads the checked NPM packages in a chosen directory, which streamlines project configuration and setup.",
    stack: [
      <SiExpress color="royalblue" className="w-12 h-12" />,
      <SiStyledcomponents color="purple" className="w-12 h-12" />,
      <BsBootstrap color="#563d7c" className="w-12 h-12" />,
      <TbSql color="orange" className="w-12 h-12" />,
      <SiMui color="#757de8" className="w-12 h-12" />,
      <FaReact color="rgb(97, 219, 251)" className="w-12 h-12" />,
      <IoLogoElectron color="royalblue" className="w-12 h-12" />,
      <FaNode color="#68a063" className="w-12 h-12" />,
    ],
  },
  {
    title: "Schema-CrafterJs",
    category: "NPM Package",
    githubUrl: urlDict.npmPackageGithubUrl,
    img: schemaCrafter,
    description:
      "SchemaCrafterJs is a lightweight and strongly-typed form validation package designed for use with TypeScript. It allows you to define schemas for your form fields and validate payloads against these schemas. This package has one dependencies and no dependents, making it easy to integrate into your projects. I made this NPM package because I wanted something catered to my use cases and I often did not like one or more features of other form-validation libraries, therefore I made something that solves some of the annoying issues I found to be apparent in other schema-building packages.",
    stack: [<FaNode color="#68a063" className="w-12 h-12"/>, <SiTypescript color="#007acc" className="w-12 h-12"/>],
  },
  {
    title: "Node Space RESTful API",
    category: "Backend Application",
    githubUrl: urlDict.nodeSpaceBackend,
    img: authentication,
    description:
      "This RESTful API is a production API hosted on render utilizing MVC architecure to maintain scalability and robustness. This API is used as the main means of authentication and authorization. It has many security features built in, such as rate-limiting, ip blacklisting, jwt management, input sanitation and validation, image processing and scanning, and more.",
    stack: [
      <FaNode color="#68a063" className="w-12 h-12"/>,
      <SiTypescript color="#007acc" className="w-12 h-12"/>,
      <SiNestjs color="#E0234E" className="w-12 h-12"/>,
      <BiLogoPostgresql color=" #0064a5" className="w-12 h-12"/>,
      <SiPrisma color="#800000" className="w-12 h-12"/>,
    ],
  },
  {
    title: "Authentication Microservice",
    category: "Backend Application",
    githubUrl: urlDict.authenticationMicroservice,
    img: authMicro,
    description:
      "I created this RESTful API to streamline authentication and authorization services for myself and other colleagues. I found that I had a strong need for an authentication-microservice in many of my projects and wanted to challenge myself to create a secure, robust RESTful API with Nestjs. ",
    stack: [
      <FaNode color="#68a063" className="w-12 h-12"/>,
      <SiTypescript color="#007acc" className="w-12 h-12"/>,
      <SiNestjs color="#E0234E" className="w-12 h-12"/>,
      <BiLogoPostgresql color=" #0064a5" className="w-12 h-12"/>,
      <SiPrisma color="#800000" className="w-12 h-12"/>,
    ],
  },
];
