import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import {ProjectCarousel} from "../components/ProjectCarousel";

export default function ProjectSection() {
    const ctx = useContext(GlobalContext);
    return (
        <div id = "projects" className={`text-white flex flex-col items-center justify-center outline-custom-main m-h-80dvh h-120dvh w-full mt-10 ${ctx?.isDim ? "brightness-25":"brightness-100"}`}>
            <div className="text-4xl font-bold ">PROJECTS</div>
            <ProjectCarousel />
        </div>
    )
}