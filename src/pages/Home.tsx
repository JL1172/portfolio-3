import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { CiGlobe } from "react-icons/ci";
import home from "../assets/home.jpg";
import "../styles/home.css";

export default function HomeSection() {
  const ctx = useContext(GlobalContext);
  return (
    <div
      className={`text-white flex flex-col justify-evenly bg-custom-main outline-custom-main min-h-screen w-full h-auto mt-10 ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="flex items-center w-90p text-slate-400 cursor-pointer">
          <CiGlobe style={{ color: "white" }} />
          Wilmington, DE, USA
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="text-4xl w-90p flex flex-col h-64 justify-evenly">
          <p>I AM JACOB</p>
          <p>I AM A FULL STACK DEVELOPER</p>
          <p> WITH CUTTING EDGE SKILLS.</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-90p h-60dvh rounded-xl"
          src={home}
          alt="Picture Of Javascript"
        />
      </div>
    </div>
  );
}
