import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { Button } from "@mui/material";
import { urlDict } from "../resources/urls";
import "../styles/resume.css";

export default function ResumeSection() {
  const ctx = useContext(GlobalContext);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-text");
        } else {
          entry.target.classList.remove("visible-text");
        }
      });
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-button-beneath");
        } else {
          entry.target.classList.remove("visible-button-beneath");
        }
      });
    });
    const hiddenText = document.querySelectorAll(".text-hidden");
    hiddenText.forEach((element) => observer.observe(element));
    const hiddenButton = document.querySelectorAll(".button-hidden-2");
    hiddenButton.forEach((element) => observer2.observe(element));
  }, []);
  return (
    <div
      id="resume"
      className={`text-white text-4xl flex bg-custom-main outline-custom-main m-h-80dvh w-full mt-10 overflow-hidden ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      } flex flex-col justify-center items-center`}
    >
      <div className="text-hidden  mb-10 relative">
        Below is a link to my CV, I look forward to meeting you
      </div>
      <Button
        className="button-hidden-2"
        id="downloadButton"
        variant="contained"
        href={urlDict.resume}
      >
        Download My CV
      </Button>
    </div>
  );
}
