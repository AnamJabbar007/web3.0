import React, { useState } from "react";
import other1 from "../assets/other01.png";
import other2 from "../assets/other03.png";
import other3 from "../assets/other04.png";
import other4 from "../assets/casestudy-01.png";

import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const ProjectSlider = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const projects = [other1, other2, other4, other3];

  const nextProject = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);

    setCenterIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);

    setCenterIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const getVisibleProjects = () => {
    const prevIndex = (centerIndex - 1 + projects.length) % projects.length;
    const nextIndex = (centerIndex + 1) % projects.length;
    return [projects[prevIndex], projects[centerIndex], projects[nextIndex]];
  };

  return (
    <section className="w-full px-0 py-10">
      {" "}
      {/* Full width section */}
      <h2 className="text-white text-4xl md:text-6xl lg:text-8xl my-4 lg:my-10 px-14">
        Other projects
      </h2>
      {/* Mobile slider */}
      <div className="md:hidden">
        <div className="relative">
          <img
            src={projects[centerIndex]}
            alt={`Project ${centerIndex + 1}`}
            className="w-full h-[348px] object-cover transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button onClick={prevProject}>
              <SlArrowLeft size={24} />
            </button>
            <button onClick={nextProject}>
              <SlArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Desktop view (3 projects shown at a time) */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 w-full">
        {getVisibleProjects().map((project, index) => (
          <div
            key={index}
            className="w-full h-[348px] transition-transform duration-500 ease-in-out transform"
          >
            <img
              src={project}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Navigation Arrows for desktop */}
      <div className="hidden md:flex justify-end mx-14 mt-8 space-x-4">
        <button onClick={prevProject}>
          <SlArrowLeft size={24} />
        </button>
        <button onClick={nextProject}>
          <SlArrowRight size={24} />
        </button>
      </div>
      {/* Indicators */}
      <div className="flex justify-start space-x-2 mx-14 mt-4">
        {projects.map((_, index) => (
          <TfiLayoutLineSolid
            key={index}
            className={`text-white cursor-pointer transition-all duration-300 ${
              index === centerIndex ? "text-2xl" : "text-lg"
            }`}
            onClick={() => setCenterIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSlider;
