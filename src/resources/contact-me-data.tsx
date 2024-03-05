import { FaGithub, FaLinkedin } from "react-icons/fa";
import { urlDict } from "./urls";
import { MdEmail } from "react-icons/md";

export const contactMeData = [
  { icon: <FaLinkedin color="dodgerblue"/>, url: urlDict.linkedin },
  { icon: <FaGithub  color="dodgerblue"/>, url: urlDict.github },
  { icon: <MdEmail  color="dodgerblue"/>, url: "mailto:jacoblang127@gmail.com"},
];
