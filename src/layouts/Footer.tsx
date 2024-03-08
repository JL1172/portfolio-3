import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";
import { MdEmail } from "react-icons/md";
import { urlDict } from "../resources/urls";
const contactMeData = [
  { icon: <FaLinkedin  color="dodgerblue" className="h-8 w-8"/>, url: urlDict.linkedin },
  { icon: <FaGithub color="dodgerblue" className="h-8 w-8"/>, url: urlDict.github },
  {
    icon: <MdEmail color="dodgerblue" className="h-8 w-8"/>,
    url: "mailto:jacoblang127@gmail.com",
  },
];
export default function Footer() {
  return (
    <div className="text-white w-full h-80 bg-color-custom-gray-footer flex justify-evenly items-baseline pt-14">
      <div className="flex flex-col w-1/6 h-1/2 first:justify-evenly">
        <div className="text-2xl font-bold">Socials</div>
        <div className="flex w-full ">
          {contactMeData.map((n, i) => {
            return (
              <a
                className="hover:scale-105 hover:transition-transform transition-transform mr-6 "
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
      <div className="flex flex-col w-1/6 h-1/2 first:justify-evenly" >
        <div className="text-2xl font-bold">Directory</div>
        <a href="#home">Top of Page</a>
        <a href="#about">About Me</a>
        <a href="#techstack">Tech Stack</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
}
