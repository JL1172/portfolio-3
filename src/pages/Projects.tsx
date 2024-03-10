import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { ProjectCarousel } from "../components/ProjectCarousel";
import "../styles/project-mobile.css";
import ProjectMobile from "../components/ProjectMobile";

export default function ProjectSection() {
  const ctx = useContext(GlobalContext);
  return (
    <div id = "projects" className="w-full h-auto">
      <div
        className={`text-white  xxs:hidden xs:flex flex-col items-center justify-center outline-custom-main m-h-80dvh h-120dvh w-full mt-10 ${
          ctx?.isDim ? "brightness-25" : "brightness-100"
        }`}
      >
        <div className="text-4xl font-bold ">PROJECTS</div>
        <ProjectCarousel />
      </div>
      <ProjectMobile />
    </div>
  );
}
