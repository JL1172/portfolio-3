import { useEffect, useState } from "react";
import { StackType, frontend_stack } from "../resources/tech-stack-data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function BackendStack(props: {
  setPersistedChoice: (data: null) => void;
  changeChoice: (data: number) => void;
}) {
  const { setPersistedChoice, changeChoice } = props;
  const [tech,setTech] = useState<string>("");
  const handleTechDescription = (techHoveredOver: string) => {
    setTech(techHoveredOver);
  }
  const clearTech = () => {
    setTech("");
  }
  const doubleChangeChoice = (val: number) => {
    changeChoice(val);
    setTimeout(()=>{changeChoice(val)}, 100)
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rendered-card");
        } else {
          entry.target.classList.remove("rendered-card");
        }
      });
    });
    const unrenderedCard = document.querySelectorAll(".unrendered-card");
    unrenderedCard.forEach(element => observer.observe(element));
  }, []);
  return (
    <div className="flex flex-col w-full min-h-dvh h-fit items-center ">
      <div className="flex justify-around w-full mt-10 text-lg min-h-20 items-center font-bold">
        <div
          onClick={() => setPersistedChoice(null)}
          className="text-neutral-500 flex justify-center items-center cursor-pointer transition-colors hover:text-white hover:transition-colors relative hoverable-right-f"
        >
          <BsArrowLeft className="arrow" /> Return
        </div>
        <div className="font-extrabold xxs:hidden xs:hidden sm:hidden md:hidden lg:block lg:text-5xl">FRONTEND STACK</div>
        <div onClick={()=>doubleChangeChoice(0)} className="text-neutral-500 flex justify-evenly items-center cursor-pointer transition-colors hover:text-white hover:transition-colors relative hoverable-left-f">
          View Backend
          <BsArrowRight className="arrow" />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly min-h-dvh h-fit mt-10 mb-10 ">
        {frontend_stack.map((n: StackType, i: number) => {
          return (
            <div
            style={tech === n.name ? {backgroundColor: n.color, transition: ".2s ease-in-out"} : {transition: ".2s ease-in-out"}}
            onMouseEnter={() => handleTechDescription(n.name)} 
            onMouseLeave={()=> clearTech()}
              className={`outline-custom-main cards-all unrendered-card`}
              key={i}
            >
              { tech && tech === n.name ?<div className="text-xl flex justify-center items-center w-32 h-32" >{n.name}</div> : <div >{n.icon}</div>}

            </div>
          );
        })}
      </div>
    </div>
  );
}
