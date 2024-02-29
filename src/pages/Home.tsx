import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { CiGlobe } from "react-icons/ci";
import home from "../assets/home.jpg";
import "../styles/home.css";
const stats: Record<string, string>[] = [
  { stat: "1.5+", content: "Years Of", content2: "Experience" },
  { stat: "17", content: "Tech Skills" },
  { stat: "50+", content: "Projects Created" },
  {
    stat: "100%",
    content: "Chance Of Being An",
    content2: "Invaluable Asset At Your Company",
  },
];
const splitWordsFirst: string[] = "I AM JACOB,".split(",");
const splitWordsSecond: string[] = "I AM A FULL STACK DEVELOPER".split(",");
const splitWordsThird: string[] = "WITH CUTTING EDGE SKILLS.".split(",");
export default function HomeSection() {
  const ctx = useContext(GlobalContext);
  return (
    <div
      className={`text-white flex flex-col justify-evenly bg-custom-main outline-custom-main min-h-screen w-full h-auto mt-10 ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="flex items-center w-90p text-slate-400 cursor-pointer mt-20">
          <CiGlobe style={{ color: "white" }} />
          Wilmington, DE, USA
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="text-4xl w-90p flex flex-col h-64 justify-evenly mt-3">
          <div className="flex">
            {splitWordsFirst.map((n: string, i: number) => {
              return (
                <p className={`p-first-${i + 1}`} key={i}>
                  {n}
                </p>
              );
            })}
          </div>
          <div className="flex">
            {splitWordsSecond.map((n: string, i: number) => {
              return (
                <p className={`p-second-${i + 1}`} key={i}>
                  {n}
                </p>
              );
            })}
          </div>
          <div className="flex">
            {splitWordsThird.map((n: string, i: number) => {
              return (
                <p className={`p-third-${i + 1}`} key={i}>
                  {n}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-90p h-60dvh rounded-xl"
          src={home}
          alt="Picture Of Javascript"
        />
      </div>
      <div className="flex justify-evenly min-h-48 items-center mt-10 mb-10">
        {stats.map((n: Record<string, string>, i: number) => {
          return (
            <div className="flex flex-col min-h-24 h-auto w-40 items-center text-center" key={i}>
              <div className="text-2xl">{n.stat}</div>
              <div className="text-custom text-sm">{n.content}</div>
              {n.content2 && <div className="text-custom text-sm">{n.content2}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
