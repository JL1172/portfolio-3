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
    <div className="w-full h-90dvh flex items-center justify-center mt-10">
      <Carousel
        slide={false}
        className="w-full h-full"
        leftControl={
          <BiLeftArrow
          className="xxs:hidden block"
            style={{ color: "lightgreen", width: "2rem", height: "2rem" }}
          />
        }
        rightControl={
          <BiRightArrow
          className="xxs:hidden block"
            style={{ color: "lightgreen", width: "2rem", height: "2rem" }}
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
              <div className="w-full h-80dvh flex flex-col items-center justify-evenly bg-gray-800 rounded-md description">
                <div className="font-bold flex flex-col items-center xxs:text-2xl xs:text-2xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl hidden-span-title w-11/12 ">
                  {n.title}
                  <div className="text-lg text-gray-500 font-semibold mb-10">
                    Category: {n.category}
                  </div>
                </div>
                <div className="w-11/12 xxs:text-md xs:text-md sm:text-md md:text-sm lg:text-md xl:text-md xxl:text-lg">{n.description}</div>
                <div className="text-2xl font-semibold flex flex-col justify-evenly items-center  w-11/12 min-h-1/3 h-fit">
                  Technologies Used:
                  <div className="flex justify-evenly flex-wrap h-3/4 mt-4 mb-2">
                    {n.stack.map((icon, i) => {
                      return (
                        <span className="mx-6" key={i}>
                          {icon}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="w-11/12 flex items-center justify-center ">
                  <Button
                    href={n.githubUrl !== undefined ? n.githubUrl : n.linkedinUrl}
                    className="lg:w-11/12 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 h-10 "
                    sx={{
                      bgcolor: "royalblue",
                      color: "black",
                      fontSize: "12px",
                      width: "fit-content",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                    variant="contained"
                  >
                    Explore {n.title.split(" ").slice(0, 2).join(" ")}
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
