
import case1 from "../assets/casestudy-01.png";
import case2 from "../assets/casestudy-02.png";
import case3 from "../assets/casestudy-03.png";
import case4 from "../assets/casestudy-04.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container min-w-full mx-auto px-4  lg:px-14  py-10"
    >
      <h2 className="text-white text-4xl md:text-6xl lg:text-8xl mb-10 lg:mb-14">
        Projects
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-5 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-5 w-full lg:w-[50%]">
          <img
            src={case1}
            alt="project1"
            className="w-full h-auto  object-cover"
          />
          <img
            src={case3}
            alt="project3"
            className="w-full h-auto object-cover"
          />

          <div className="flex flex-col justify-center items-start p-6  bg-customDark text-2xl md:text-2xl w-full h-auto">
            <p>How we design web3 products</p>
            <p className="text-white mt-4 p-2 flex justify-center text-center bg-black rounded-full w-[126px] h-26 text-base">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5 w-full lg:w-[50%]">
          <img
            src={case2}
            alt="project2"
            className="w-full h-auto object-cover"
          />
          <img
            src={case4}
            alt="project4"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
