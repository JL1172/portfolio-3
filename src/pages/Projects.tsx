import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function ProjectSection() {
    const ctx = useContext(GlobalContext);
    return (
        <div className={`text-white text-4xl flex bg-custom-main outline-custom-main m-h-80dvh w-full mt-10 ${ctx?.isDim ? "brightness-25":"brightness-100"}`}>
            <div></div>
        </div>
    )
}