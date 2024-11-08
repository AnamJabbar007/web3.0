import React from "react";
import { PiArrowRightThin, PiArrowUpThin } from "react-icons/pi";
import { FOOTER_LINKS_1, FOOTER_LINKS_2 } from "../constants/index";
import FooterCircle from "../component/FooterCircle";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="overflow-hidden" id="contact">
      {/* Text */}
      <div className="flex flex-col md:flex-row px-4 py-40 xl:gap-72 gap-40">
        <div className="">
          <h3 className="text-white text-4xl lg:text-5xl font-medium mb-4">
            Web3 product studio
          </h3>
          <p className="lg:text-lg font-light w-[425px] text-base text-white/60">
            Feel free to reach out if you want to collaborate with us, or simply
            have a chat.
          </p>
          <div className="flex mt-16 items-center justify-start">
            <span className="font-normal lg:text-2xl text-base text-white">
              hello@thirdweb.studio
            </span>
            <PiArrowRightThin className="w-8 h-6 sm:w-10 sm:h-8 ml-2" />
          </div>
        </div>
        {/* Footer links */}
        <div className=" flex gap-20 xl:gap-40 ">
          <div>
            <h6 className="lg:text-lg font-light mb-6 text-base text-white">
              Our projects
            </h6>
            <div className="lg:text-lg font-light text-base text-white/60">
              {FOOTER_LINKS_1.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h6 className="lg:text-lg mb-6 font-light text-base text-white">
              Follow us
            </h6>
            <div className="lg:text-lg font-light text-base text-white/60">
              {FOOTER_LINKS_2.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Arrow */}
        <div
          className="absolute mt-48 md:mt-0 right-6 flex items-center space-x-1 cursor-pointer text-white/60 hover:text-white transition"
          onClick={scrollToTop}
        >
          <p className="lg:text-lg font-light text-base">Back to top</p>

          <PiArrowUpThin className="w-6 h-6" />
        </div>
      </div>
      <FooterCircle />
    </footer>
  );
};

export default Footer;
