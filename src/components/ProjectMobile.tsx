import { useState } from "react";
import { projectData } from "../resources/projects-data";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import "../styles/project-mobile.css";
import { Button } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectMobile() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const prev = () => {
    setActiveIndex((activeIndex) =>
      activeIndex === 0 ? projectData.length - 1 : activeIndex - 1
    );
  };
  const next = () => {
    setActiveIndex((activeIndex) =>
      activeIndex === projectData.length - 1 ? 0 : activeIndex + 1
    );
  };
  const [collapse, setCollapse] = useState(true);

  return (
    <div className="mobile-div ">
      <div className="text-4xl font-bold heading-1">PROJECTS</div>
      <div id="wrapper">
        {projectData.map((n, i) => {
          return (
            <div
              className={`${
                activeIndex === i ? "cards active" : "cards inactive"
              }`}
              key={i}
            >
              {activeIndex === i && <img src={n.img} className="card-image" />}
              {activeIndex === i && (
                <div className="card-title">{n.title} </div>
              )}
              <div
                onClick={() => setCollapse(!collapse)}
                className="flex items-center w-fit collapse-icon"
              >
                {collapse ? (
                  <MdOutlineExpandMore
                    style={{ height: "2rem", width: "2rem" }}
                  />
                ) : (
                  <MdOutlineExpandLess
                    style={{ height: "2rem", width: "2rem" }}
                  />
                )}
                View {collapse ? "More" : "Less"}
              </div>
              <div id={`${collapse ? "collapsed" : "expanded"}`}>
                {!collapse && (
                  <div id="jacob" className="font-bold text-lg ">
                    Category: {n.category}
                  </div>
                )}

                {!collapse && (
                  <div id="louis" className="card-content">
                    {n.description}
                  </div>
                )}
                {!collapse && (
                  <div id="lain" className="card-tech-stack">
                    <div className="text-lg font-bold">Technologies Used</div>
                    <div className="tech-stack-wrapper">
                      {n.stack.map((n, i) => {
                        return (
                          <span className="tech-spans" key={i}>
                            {n}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {!collapse && (
                  <a
                    href={
                      n.githubUrl !== undefined ? n.githubUrl : n.linkedinUrl
                    }
                    target="_blank"
                    className="w-full flex items-center justify-center mb-2 z-10"
                  >
                    <Button
                      className="jl"
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
                  </a>
                )}
              </div>
              <div id="proceed-next-back" className="proceed-next-back">
                <div
                  onClick={() => prev()}
                  className="flex items-center bottom-button second"
                >
                  <FaArrowLeft style={{ height: "1rem", width: "1rem" }} />
                  Previous
                </div>
                <div
                  onClick={() => next()}
                  className="flex items-center bottom-button"
                >
                  {" "}
                  Next{" "}
                  <FaArrowRight style={{ height: "1rem", width: "1rem" }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
