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

export const projectData = [
  {
    title: "Expense Tracker",
    category: "Full Stack",
    githubUrl: urlDict.expenseTrackerGithubUrl,
    img: expenseTrackerPng,
    description:
      "Expense Tracker is a full-stack application designed to manage expenses efficiently, providing users with insightful financial analytics and controls.",
    stack: [
      <SiExpress color="royalblue" />,
      <BiLogoPostgresql color=" #0064a5" />,
      <BsBootstrap color="#563d7c" />,
      <TbSql color="orange" />,
      <SiMui color="#757de8" />,
      <FaReact color="rgb(97, 219, 251)" />,
      <SiTailwindcss color="#6d28d9" />,
      <IoLogoElectron color="royalblue" />,
    ],
  },
  {
    title: "Node Space",
    category: "Full Stack",
    img: nodeSpacePng,
    githhubUrl: urlDict.nodeSpaceGithubUrl,
    description:
      "Node-Space is an online platform that allows developers to create creator accounts, write their own blogs, have their own following, and release their own courses.",
    stack: [
      <SiNestjs color="#E0234E" />,
      <BiLogoPostgresql color=" #0064a5" />,
      <BsBootstrap color="#563d7c" />,
      <SiPrisma color="#800000" />,
      <SiMui color="#757de8" />,
      <FaReact color="rgb(97, 219, 251)" />,
      <SiTailwindcss color="#6d28d9" />,
      <SiTypescript color="#007acc" />,
    ],
  },
  {
    title: "NPM Manager/React Initializer",
    category: "Full Stack",
    linkedinUrl: urlDict.npmManagerLinkedInUrl,
    img: npmManagerPng,
    description:
      "Developed an Electron application to automate the dynamic startup of Node.js applications located in different directories, significantly improving development efficiency: used child-process module in node. Engineered a feature, that, with simple configuration, and one-click of a button, instantiates a react application and downloads the checked NPM packages in a chosen directory, which streamlines project configuration and setup.",
    stack: [
      <SiExpress color="royalblue" />,
      <SiStyledcomponents color="purple" />,
      <BsBootstrap color="#563d7c" />,
      <TbSql color="orange" />,
      <SiMui color="#757de8" />,
      <FaReact color="rgb(97, 219, 251)" />,
      <IoLogoElectron color="royalblue" />,
      <FaNode color="#68a063" />,
    ],
  },
  {
    title: "Schema-CrafterJs",
    category: "NPM Package",
    githubUrl: urlDict.npmPackageGithubUrl,
    img: schemaCrafter,
    description:
      "SchemaCrafterJs is a lightweight and strongly-typed form validation package designed for use with TypeScript. It allows you to define schemas for your form fields and validate payloads against these schemas. This package has one dependencies and no dependents, making it easy to integrate into your projects. I made this NPM package because I wanted something catered to my use cases and I often did not like one or more features of other form-validation libraries, therefore I made something that solves some of the annoying issues I found to be apparent in other schema-building packages.",
    stack: [<FaNode color="#68a063" />, <SiTypescript color="#007acc" />],
  },
  {
    title: "Node Space RESTful API",
    category: "Backend Application",
    githubUrl: urlDict.nodeSpaceBackend,
    img: authentication,
    description:
      "This RESTful API is a production API hosted on render utilizing MVC architecure to maintain scalability and robustness. This API is used as the main means of authentication and authorization. It has many security features built in, such as rate-limiting, ip blacklisting, jwt management, input sanitation and validation, image processing and scanning, and more.",
    stack: [
      <FaNode color="#68a063" />,
      <SiTypescript color="#007acc" />,
      <SiNestjs color="#E0234E" />,
      <BiLogoPostgresql color=" #0064a5" />,
      <SiPrisma color="#800000" />,
    ],
  },
];
