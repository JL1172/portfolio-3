import { useState } from "react";

const links: Record<string, string>[] = [
  { to: "#about", content: "About" },
  { to: "#techstack", content: "Tech Stack" },
  { to: "#projects", content: "Projects" },
  { to: "#resume", content: "Resume" },
  { to: "#contact", content: "Contact Me" },
];
export default function NavbarSection() {
  const [active,setActive] = useState<number | null>(null);
  return (
    <div className="text-white m-h-20dvh flex items-center pl-6 w-full justify-between">
      <div className="flex flex-col">
        <div className="text-40 font-custom-main opacity-0 animate-onload">
          Welcome To
        </div>
        <div className="text-40 font-custom-main opacity-0 animate-onload">
          My Portfolio
        </div>
      </div>
      <div className="pr-6 flex justify-evenly font-custom-main-sm">
        {links.map((n: Record<string, string>, i: number) => {
          return (
            <a onClick={()=>setActive(i)} className={`flex items-center justify-center mr-6 outline-custom-main w-28 h-8 rounded-lg bg-custom-gray ${active === i ? "bg-custom-gray-active" : ""}`} key={i} href={n.to}>
              <div>{n.content}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
