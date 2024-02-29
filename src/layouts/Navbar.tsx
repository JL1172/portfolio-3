import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const links: Record<string, string>[] = [
  { to: "#about", content: "About" },
  { to: "#techstack", content: "Tech Stack" },
  { to: "#projects", content: "Projects" },
  { to: "#resume", content: "Resume" },
  { to: "#contact", content: "Contact Me" },
];
export default function NavbarSection() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="text-white m-h-20dvh flex items-center xxs:pl-3 xxs:pt-3 pl-6 w-full justify-between">
      <div className="flex flex-col">
        <div className="xl:text-5xl lg:text-5xl xs:text-4xl xxs:text-3xl font-custom-main opacity-0 animate-onload xxs:mt-4">
          Welcome To
        </div>
        <div className="xl:text-5xl lg:text-5xl xs:text-4xl xxs:text-3xl font-custom-main opacity-0 animate-onload xxs:mt-4">
          My Portfolio
        </div>
      </div>
      <div className=" xxs:hidden xs:hidden sm:hidden md:flex md:pr-0 pr-6 flex justify-evenly font-custom-main-sm">
        {links.map((n: Record<string, string>, i: number) => {
          return (
            <a
              onClick={() => setActive(i)}
              className={`flex items-center justify-center mr-6 outline-custom-main md:w-20 md:text-sm lg:28 h-8 rounded-lg bg-custom-gray ${
                active === i ? "bg-custom-gray-active" : ""
              }`}
              key={i}
              href={n.to}
            >
              <div>{n.content}</div>
            </a>
          );
        })}
      </div>
      <div className="xxs:mr-2 xs:flex sm:flex md:hidden lg:hidden xs:mr-10 md:mr-10">
        <MdOutlineMenu id="icon" style={{ color: "white" }} />
      </div>
    </div>
  );
}
