import "../styles/projects.css";
import { projectData } from "../resources/projects-data";
import { Carousel } from "flowbite-react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useEffect } from "react";
import { Button } from "@mui/material";

export const ProjectCarousel = () => {
  const images = projectData;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-span-title");
        } else {
          entry.target.classList.remove("visible-span-title");
        }
      });
    });
    const hiddenSpan = document.querySelectorAll(".hidden-span-title");
    hiddenSpan.forEach((element) => observer.observe(element));
  }, []);
  return (
    <div className="w-full h-90dvh flex items-center justify-center outline-custom-main mt-10">
      <Carousel
        slide={false}
        className="w-full h-full"
        leftControl={
          <BiLeftArrow
            style={{ color: "#E0234E", width: "2rem", height: "2rem" }}
          />
        }
        rightControl={
          <BiRightArrow
            style={{ color: "#E0234E", width: "2rem", height: "2rem" }}
          />
        }
      >
        {images.map((n, i) => {
          return (
            <div
              className="xxs:w-full xs:w-full sm:w-full md:w-full lg:w-11/12 max-h-fit h-80dvh project-content"
              key={i}
            >
              <img src={n.img} alt={n.title} className="w-3/4 h-80dvh" />
              <div className="w-full  h-80dvh flex flex-col items-center justify-evenly bg-gray-800 rounded-md description">
                <div className="font-bold flex flex-col items-center text-2xl mt-10 hidden-span-title w-11/12 mb-2">
                  {/*
                   * need to finish styling and animations for content
                   * need to make this page responsive
                   * regarding responsiveness, consider stacking vertically or simply adding an option to touch the picture and then flip the picture
                   * need to figure out typewriting animation
                   *
                   */}
                  {n.title}
                <div className="text-lg text-gray-500 font-semibold mb-10">
                  Category: {n.category}
                </div>
                </div>
                <div className="w-11/12">
                  {n.description}
                </div>
                <div className="text-2xl font-semibold flex flex-col justify-evenly items-center  w-11/12 h-1/2 mt-6">
                   Technologies Used:
                   <div className="flex justify-evenly flex-wrap h-3/4">
                   {n.stack.map((icon,i) => {
                    return <span className="mx-6" key = {i}>{icon}</span>
                   })}
                   </div>
                </div>
                <div className="w-11/12 flex items-center justify-center mb-10">
                <Button
                    className="font-bold lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 h-8"
                    sx={{
                      bgcolor: "royalblue",
                      color: "black",
                      fontSize: "12px",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                    variant="contained"
                  >
                    Explore {n.title}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
