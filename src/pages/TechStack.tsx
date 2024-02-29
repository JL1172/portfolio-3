import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function TechStackSection() {
    const ctx = useContext(GlobalContext);
    return (
        <div className={`text-white text-4xl flex bg-custom-main outline-2 outline-custom-main m-h-50dvh w-full mt-10 ${ctx?.isDim ? "brightness-25":"brightness-100"}`}>
            TechStack Section
        </div>
    )
}