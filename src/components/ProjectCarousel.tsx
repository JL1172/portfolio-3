import "../styles/projects.css";
import { projectData } from "../resources/projects-data";
import { Carousel } from "flowbite-react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import { TbLayoutNavbarCollapse } from "react-icons/tb";

export const ProjectCarousel = () => {
  const images = projectData;
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const [collapse,setCollapse] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-span-title");
        } else {
          if (windowSize >= 600) {
            entry.target.classList.remove("visible-span-title");
          }
        }
      });
    });
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-description");
        } else {
          if (windowSize >= 600) {
            entry.target.classList.remove("visible-description");
          }
        }
      });
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-tech");
        } else {
          if (windowSize >= 600) {
            entry.target.classList.remove("visible-tech");
          }
        }
      });
    });
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-b");
        } else {
          if (windowSize >= 600) {
            entry.target.classList.remove("visible-b");
          }
        }
      });
    });
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-pic");
        } else {
          if (windowSize >= 600) {
            entry.target.classList.remove("visible-pic");
          }
        }
      });
    });
    const hiddenSpan = document.querySelectorAll(".hidden-span-title");
    hiddenSpan.forEach((element) => observer.observe(element));
    const hiddenDescription = document.querySelectorAll(".hidden-description");
    hiddenDescription.forEach((element) => observer1.observe(element));
    const hiddenTech = document.querySelectorAll(".hidden-tech");
    hiddenTech.forEach((element) => observer2.observe(element));
    const hiddenButton = document.querySelectorAll(".hidden-button-projects");
    hiddenButton.forEach((element) => observer3.observe(element));
    const hiddenPicture = document.querySelectorAll(".hidden-picture");
    hiddenPicture.forEach((element) => observer4.observe(element));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-90dvh flex items-center justify-center mt-10">
      <Carousel
        slide={false}
        id="carousel"
        className=" h-full "
        leftControl={
          <BiLeftArrow
            style={{position:"absolute", left: "0", color: "gray", width: "2rem", height: "2rem" }}
          />
        }
        rightControl={
          <BiRightArrow
            style={{position:"absolute", right: "0", color: "gray", width: "2rem", height: "2rem" }}
          />
        }
      >
        {images.map((n, i) => {
          return (
            <div
              className="xxs:w-full xs:w-full sm:w-full md:w-full lg:w-full max-h-fit h-80dvh project-content"
              key={i}
            >
              <img
                src={n.img}
                alt={n.title}
                className="w-3/4 h-80dvh hidden-picture"
              />
              <div className="w-full h-80dvh flex flex-col items-center justify-evenly rounded-md description">
                <div className="font-bold flex flex-col items-center justify-center xxs:text-2xl xs:text-2xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl hidden-span-title w-11/12  ">
                  {n.title}
                  <div className="text-lg text-gray-500 font-semibold mb-10">
                    Category: {n.category}
                  </div>
                </div>
                <div className={`w-11/12 xxs:text-md xs:text-md sm:text-md md:text-sm lg:text-md xl:text-md xxl:text-lg hidden-description `}>
                  {n.description}
                </div>
                <div className={`text-2xl font-semibold flex flex-col justify-evenly items-center  w-11/12 min-h-1/3 h-fit hidden-tech `}>
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
                <div className="w-11/12 flex items-center justify-center mb-2 relative">
                  <Button
                    href={
                      n.githubUrl !== undefined ? n.githubUrl : n.linkedinUrl
                    }
                    className="lg:w-11/12 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 h-10  hidden-button-projects"
                    sx={{
                      bgcolor: "royalblue",
                      color: "white",
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
                  {/* <TbLayoutNavbarCollapse style={{position:"absolute", right:"0", color: "white", width: "2rem", height: "2rem", cursor:"pointer"}} onClick={() => setCollapse(!collapse)}/> */}
                </div> 
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
