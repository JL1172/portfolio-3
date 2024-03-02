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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("heading-visible");
        }
      });
    });
    const observerHOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word");
        }
      });
    });
    const observerHTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-two");
        }
      });
    });
    const observerHThree = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-three");
        }
      });
    });
    const observerHFour = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-four");
        }
      });
    });
    const observerHFive = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-five");
        }
      });
    });
    const observerHSix = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-six");
        }
      });
    });
    const observerHSeven = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("h-word-seven");
        }
      });
    });
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
    heading.forEach((element) => observerFour.observe(element));
    const h_one = document.querySelectorAll(".h-one");
    h_one.forEach((element) => observerHOne.observe(element));
    const h_two = document.querySelectorAll(".h-two");
    h_two.forEach((element) => observerHTwo.observe(element));
    const h_three = document.querySelectorAll(".h-three");
    h_three.forEach((element) => observerHThree.observe(element));
    const h_four = document.querySelectorAll(".h-four");
    h_four.forEach((element) => observerHFour.observe(element));
    const h_five = document.querySelectorAll(".h-five");
    h_five.forEach((element) => observerHFive.observe(element));
    const h_six = document.querySelectorAll(".h-six");
    h_six.forEach((element) => observerHSix.observe(element));
    const h_seven = document.querySelectorAll(".h-seven");
    h_seven.forEach((element) => observerHSeven.observe(element));
  }, []);
  return (
    <div id = "about"
      className={`relative text-white flex flex-col items-center justify-center bg-custom-main outline-custom-main m-h-80dvh h-auto w-full mt-10 ${
        ctx?.isDim ? "brightness-25" : "brightness-100"
      }`}
    >
      <div className="text-4xl heading-invisible text-pretty xxs:mt-10 md:mt-0 font-custom-main-sm">
        ABOUT ME
      </div>
      <div className="xxs:w-11/12 xs:w-11/12 text-pretty sm:w-3/5 md:w-11/12 lg:w-11/12 xl:w-5/6 flex flex-col justify-evenly m-h-50dvh h-fit ">
        {aboutMeData.map((n: Record<string, ReactElement>) => {
          return n.content;
        })}
      </div>
    </div>
  );
}
