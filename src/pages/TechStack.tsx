import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import "../styles/tech-stack.css";
import { categories } from "../resources/tech-stack-data";
import { Button } from "@mui/material";
import BackendStack from "../components/BackendStackComponent";
import FrontendStack from "../components/FrontendStackComponent";
// 659 px for the cards
export default function TechStackSection() {
  const [currentChoice, setCurrentChoice] = useState<
    [null | number, null | number]
  >([null, null]);
  const [persistedChoice, setPersistedChoice] = useState<null | number>(null);
  const changeChoice = (id: number) => {
    if (currentChoice[0] === id) {
      setCurrentChoice([null, null]);
    } else if (persistedChoice === id) {
      setPersistedChoice(null);
    } else {
      setCurrentChoice([id, id]);
      setPersistedChoice(id);
      setTimeout(() => {
        setCurrentChoice([null, id]);
      }, 750);
    }
  };
  const ctx = useContext(GlobalContext);
  return (
    <div id = "techstack"
      // id = {currentChoice === 1 ? "frontend-curtain" : "frontend-closed"}
      className={`text-white flex flex-col justify-center items-center mt-10 bg-custom-main outline-custom-main m-h-80dvh h-fit w-full relative ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      } ${
        currentChoice[0] === 0
          ? "backend-curtain"
          : currentChoice[0] === null && currentChoice[1] === 0
          ? "backend-closed"
          : currentChoice[0] === 1
          ? "frontend-curtain"
          : currentChoice[0] === null && currentChoice[1] === 1
          ? "frontend-closed"
          : "backend-closed"
      }`}
    >
      {persistedChoice === null ? (
        <>
          <div className="text-4xl font-bold ">TECH STACK</div>
          <div className="min-w-full w-fit m-h-60dvh h-fit flex items-center justify-evenly ">  
            {categories.map((n, i) => {
              return (
                <div
                  className={`outline-custom-main min-h-80 h-fit lg:w-80 md:basis-80 sm:basis-72 xs:basis-60 xxs:basis-40 flex flex-col items-center justify-evenly`}
                  key={i}
                >
                  <div>{n.cat_icon}</div>
                  <Button
                    onClick={() => changeChoice(i)}
                    className="font-bold lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 h-8"
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: n.cat_color,
                      },
                    }}
                    id="button"
                    variant="contained"
                  >
                    My {n.cat_type} Skills
                  </Button>
                </div>
              );
            })}
          </div>
        </>
      ) : persistedChoice === 0 ? (
        <div className="backend-text w-full min-h-dvh h-fit">
          <BackendStack setPersistedChoice={setPersistedChoice} changeChoice = {changeChoice} />
        </div>
      ) : (
        <div onClick={() => setPersistedChoice(null)} className="backend-text">
          <FrontendStack setPersistedChoice={setPersistedChoice} changeChoice = {changeChoice}  />
        </div>
      )}
    </div>
  );
}
