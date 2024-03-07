import "../styles/projects.css";
import { projectData } from "../resources/projects-data";
import { Carousel } from "flowbite-react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";

export const ProjectCarousel = () => {
  const [visible, setVisible] = useState(0);
  const images = projectData;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleIndex = Number(entry.target.className.match(/\d+/g));
          setVisible(visibleIndex);
        }
      });
    });
    const hiddenSpan = document.querySelectorAll(".hidden-span");
    hiddenSpan.forEach((element) => observer.observe(element));
  }, []);
  return (
    <div className="w-full h-90dvh flex items-center justify-center outline-custom-main mt-10">
      <Carousel
        slide={false}
        className="w-full h-full"
        leftControl={<BiLeftArrow />}
        rightControl={<BiRightArrow />}
      >
        {images.map((n, i) => {
          return (
            <div
              className=" w-11/12  flex items-center max-h-fit h-80dvh"
              key={i}
            >
              <img src={n.img} alt={n.title} className="w-3/4 h-80dvh" />
              <div className="w-full h-80dvh flex flex-col items-center bg-gray-800">
                <div className="font-bold text-3xl mt-10">
                  {/* 
                  * need to finish styling and animations for content
                  * need to make this page responsive
                  * regarding responsiveness, consider stacking vertically or simply adding an option to touch the picture and then flip the picture
                  * need to figure out typewriting animation
                  * 
                  */}
                  {/* {n.title.split("").map((n,i)=>{<span key = {i}>{n}</span>})} */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
