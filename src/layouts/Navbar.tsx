import { ReactElement, useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GoStack } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";
import { RiNewspaperLine } from "react-icons/ri";
import "../styles/nav-bar.css";
import { GlobalContext } from "../contexts/GlobalContext";

const links: Record<string, string | ReactElement>[] = [
  { to: "#about", content: "About", icon: <CgProfile /> },
  { to: "#techstack", content: "Tech Stack", icon: <GoStack /> },
  { to: "#projects", content: "Projects", icon: <GrProjects /> },
  { to: "#resume", content: "Resume", icon: <RiNewspaperLine /> },
  { to: "#contact", content: "Contact Me", icon: <MdContactPage /> },
];
export default function NavbarSection() {
  const [active, setActive] = useState<number | null>(null);
  const [navBarMobileVisible, setNavBarMobileVisible] =
    useState<boolean>(false);
  const ctx = useContext(GlobalContext);

  const visibilityHandler = () => {
    setNavBarMobileVisible(!navBarMobileVisible);
    ctx?.changeBrightness()
  }
  return (
    <div className="text-white m-h-20dvh flex items-center xxs:pl-3 xxs:pt-3 pl-6 w-full justify-between">
      <div className="flex flex-col">
        <div className={`xl:text-5xl lg:text-5xl xs:text-4xl xxs:text-3xl font-custom-main opacity-0 animate-onload xxs:mt-4 ${ctx?.isDim ? "brightness-25" : "brightness-100"}`}>
          Welcome To
        </div>
        <div className={`xl:text-5xl lg:text-5xl xs:text-4xl xxs:text-3xl font-custom-main opacity-0 animate-onload xxs:mt-4 ${ctx?.isDim ? "brightness-25" : "brightness-100"}`}>
          My Portfolio
        </div>
      </div>
      <div className=" xxs:hidden xs:hidden sm:hidden md:flex md:pr-0 pr-6 flex justify-evenly font-custom-main-sm">
        {links.map((n: Record<string, string | ReactElement>, i: number) => {
          return (
            <a
              onClick={() => setActive(i)}
              className={`flex items-center justify-center mr-6 outline-custom-main md:w-20 md:text-sm lg:w-28 h-8 rounded-lg bg-custom-gray ${
                active === i ? "bg-custom-gray-active" : ""
              }`}
              key={i}
              href={String(n.to)}
            >
              <div>{n.content}</div>
            </a>
          );
        })}
      </div>
      <div className="xxs:mr-2 xs:flex sm:flex md:hidden lg:hidden xs:mr-10 md:mr-10 ">
        <MdOutlineMenu
          onClick={() => visibilityHandler()}
          id="icon"
          style={{ color: "white" }}
        />
          <div
            className={
              navBarMobileVisible ? "side-drawer-open pt-6" : "side-drawer-closed pt-10"
            }
          >
            <IoMdClose
              onClick={() => visibilityHandler()}
              id="icon-close"
            />
            {navBarMobileVisible && links.map(
              (n: Record<string, string | ReactElement>, i: number) => {
                return (
                  <a
                  id = {`a${i + 1}`}
                  className="relative"
                    onClick={() => visibilityHandler()}
                    key={i}
                    href={String(n.to)}
                  >
                    <div className="flex items-center pl-5 text-lg hover:text-slate-300 h-fill slider-animation">{n.icon}{n.content}</div>
                  </a>
                );
              }
            )}
          </div>
      </div>
    </div>
  );
}
