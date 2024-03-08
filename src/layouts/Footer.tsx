import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";
import { MdEmail, MdLibraryBooks } from "react-icons/md";
import { urlDict } from "../resources/urls";
import { FcAbout } from "react-icons/fc";
import { RiStackFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { BiHome } from "react-icons/bi";
const contactMeData = [
  {
    icon: <FaLinkedin color="dodgerblue" className="h-8 w-8" />,
    url: urlDict.linkedin,
  },
  {
    icon: <FaGithub color="dodgerblue" className="h-8 w-8" />,
    url: urlDict.github,
  },
  {
    icon: <MdEmail color="dodgerblue" className="h-8 w-8" />,
    url: "mailto:jacoblang127@gmail.com",
  },
];
const navData = [
  {
    icon: <FcAbout color="dodgerblue" className="h-8 w-8" />,
    text: "About Me",
    url: "about",
  },
  {
    icon: <RiStackFill color="dodgerblue" className="h-8 w-8" />,
    text: "Tech Stack",
    url: "techstack",
  },
  {
    icon: <GoProjectSymlink color="dodgerblue" className="h-8 w-8" />,
    text: "Projects",
    url: "projects",
  },
  {
    icon: <MdLibraryBooks color="dodgerblue" className="h-8 w-8" />,
    text: "Resume",
    url: "resume",
  },
  {
    icon: <IoIosContact color="dodgerblue" className="h-8 w-8" />,
    text: "Contact",
    url: "contact",
  },
];
export default function Footer() {
  return (
    <div className="text-white w-full h-50dvh-footer bg-color-custom-gray-footer flex flex-col justify-evenly outline-custom-footer items-center mt-20">
      <div className="w-full flex justify-evenly h-custom">
        <div className="flex flex-col items-center basis-1/2 h-full border-right-custom">
          <div className="text-2xl font-bold">Socials</div>
          <div className="flex flex-col h-full w-full justify-evenly items-center">
            {contactMeData.map((n, i) => {
              return (
                <a
                  className="hover:scale-105 hover:transition-transform transition-transform w-fit"
                  target="_blank"
                  key={i}
                  href={n.url}
                >
                  {n.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col basis-1/2  h-full items-center justify-evenly">
          <div className="text-2xl font-bold">Navigation</div>
          <div className="flex flex-col h-full justify-evenly items-baseline">
            {navData.map((n, i) => {
              return (
                <a
                  className="hover:brightness-75 hover:transition-color transition-color w-fit flex text-gray-200 md:font-semibold text-sm items-center"
                  key={i}
                  href={n.url}
                >
                  {n.icon}
                  {n.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-evenly mt-2 mb-2">
        <a className="text-sm font-bold hover:brightness-75" href={urlDict.thisRepo}>
          View This Repo
        </a>
        <a className="text-sm font-bold flex items-center hover:brightness-75" href="#home">
          <BiHome />
          Back To Top{" "}
        </a>
      </div>
      {/* <div className="" >
        <div className="text-2xl font-bold">Navigation</div>
        <a href="#home">Top of Page</a>
        <a href="#about">About Me</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact Me</a>
      </div> */}
    </div>
  );
}
