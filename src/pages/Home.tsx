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
const splitWordsFirst: string[] = "I AM JACOB.".split("");
const splitWordsSecond: string[] = "I AM A FULL STACK DEVELOPER".split("");
const splitWordsThird: string[] = "WITH CUTTING EDGE SKILLS.".split("");
export default function HomeSection() {
  const ctx = useContext(GlobalContext);
  return (
    <div
      className={`text-white flex flex-col justify-evenly bg-custom-main outline-custom-main min-h-screen w-full h-auto ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      }`}
    >
      <div className="w-full flex justify-center">
        <div className="flex items-center w-90p text-slate-400 cursor-pointer mt-14">
          <CiGlobe style={{ color: "white" }} />
          Wilmington, DE, USA
        </div>
      </div>
      <div className="w-full flex justify-center font-custom-main-sm">
        <div className="text-4xl w-90p flex flex-col h-64 justify-evenly mt-3">
          <div className="flex">
            {splitWordsFirst.map((n: string, i: number) => {
              return (
                <p className={`p-first-${i + 1} xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl`} key={i}>
                  {n.trim() ? n : <span className="opacity-0">i</span>}
                </p>
              );
            })}
          </div>
          <div className="flex">
            {splitWordsSecond.map((n: string, i: number) => {
              return (
                <p className={`p-second-${i + 1} xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl`} key={i}>
                  {n.trim() ? n : <span className="opacity-0">i</span>}
                </p>
              );
            })}
          </div>
          <div className="flex">
            {splitWordsThird.map((n: string, i: number) => {
              return (
                <p className={`p-third-${i + 1} xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl`} key={i}>
                  {n.trim() ? n : <span className="opacity-0">i</span>}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-90p h-60dvh rounded-lg"
          src={home}
          alt="Picture Of Javascript"
        />
      </div>
      <div className="flex justify-evenly items-center mb-16 mt-20 min-h-28">
        {stats.map((n: Record<string, string>, i: number) => {
          return (
            <div
              className="flex flex-col items-center text-center md:min-h-36 xxs:w-20 xxs:min-h-28"
              key={i}
            >
              <div className="text-2xl ">{n.stat}</div>
              <div className="text-custom xxs:text-xs md:text-sm">{n.content}</div>
              {n.content2 && (
                <div className="text-custom xxs:text-xs md:text-sm">{n.content2}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
