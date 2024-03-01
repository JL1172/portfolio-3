import { ReactElement, useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { aboutMeData } from "../resources/about-me-data";
import "../styles/about.css";
export default function AboutSection() {
  const ctx = useContext(GlobalContext);
  useEffect(() => {
    const observerOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-visible");
        } else {
        //   entry.target.classList.remove("intersection-visible");
        }
      });
    });
    const observerTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-visible-two");
        } else {
        //   entry.target.classList.remove("intersection-visible-two");
        }
      });
    });
    const observerThree = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersection-visible-three");
        } else {
        //   entry.target.classList.remove("intersection-visible-three");
        }
      });
    });
    const observerFour = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("heading-visible")
            }
        })
    })
    const descriptionOne = document.querySelectorAll(".intersection-invisible");
    descriptionOne.forEach((element) => observerOne.observe(element));
    const descriptionTwo = document.querySelectorAll(
      ".intersection-invisible-two"
    );
    descriptionTwo.forEach((element) => observerTwo.observe(element));
    const descriptionThree = document.querySelectorAll(
      ".intersection-invisible-three"
    );
    descriptionThree.forEach((element) => observerThree.observe(element));
    const heading = document.querySelectorAll(".heading-invisible");
    heading.forEach(element=> observerFour.observe(element))
  }, []);
  return (
    <div
      className={`relative text-white flex flex-col items-center bg-custom-main outline-custom-main m-h-80dvh h-auto w-full mt-10 ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      }`}
    >
      <div className="text-4xl mt-20 heading-invisible">ABOUT ME</div>
      {aboutMeData.map((n: Record<string, ReactElement>) => {
        return n.content;
      })}
    </div>
  );
}
