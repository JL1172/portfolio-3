import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ProjectCarousel from "../components/ProjectCarousel";

export default function ProjectSection() {
    const ctx = useContext(GlobalContext);
    return (
        <div className={`text-white flex flex-col items-center outline-custom-main m-h-80dvh w-full mt-10 ${ctx?.isDim ? "brightness-25":"brightness-100"}`}>
            <div className="text-4xl font-bold mt-10">PROJECTS</div>
            <ProjectCarousel />
        </div>
    )
}