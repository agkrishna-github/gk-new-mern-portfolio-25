import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { RiBootstrapLine } from "react-icons/ri";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Typewriter from "typewriter-effect";
import portImage from "../images/portfolioimg.png";

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});

const MainPage = () => {
  return (
    <section className="w-[85%] mx-auto xs:w-full xs:p-6 h-[calc(100vh-100px)] flex justify-center items-center xs:flex-col xs:gap-y-6 flex-wrap gap-x-5">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex-1 h-[100%] flex flex-col justify-center gap-y-10 xs:w-[100%]  xs:pt-5"
      >
        <h3 className="text-white font-medium text-xl ">👋 Hello, I am</h3>
        <h2 className="text-5xl font-bold animate-charcter xs:text-3xl">
          GOPALAKRISHNA A
        </h2>

        {/* <h3 className="text-2xl auto-type">Mern Stack Developer|</h3> */}
        <h3 className="font-bold text-3xl xs:text-2xl text-yellow-300">
          <Typewriter
            options={{
              strings: ["React Developer", "Mern Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <section className="flex gap-5 flex-wrap text-2xl xs:text-xl text-[#78e687ea]">
          <span className="elements">
            <ImHtmlFive2 />
          </span>
          <span>
            <DiCss3 />
          </span>
          <span>
            <TbBrandTailwind />
          </span>
          <span>
            <RiBootstrapLine />
          </span>
          <span>
            <IoLogoJavascript />
          </span>
          <span>
            <FaReact />
          </span>
          <span>
            <SiNodedotjs />
          </span>
          <span>
            <SiExpress />
          </span>
          <span>
            <SiMongodb />
          </span>
        </section>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex-1 h-[100%] flex justify-center items-center"
      >
        <div className="w-[70%] h-[70%]  rotate-45 xs:rotate-0 bg-gradient-to-r from-[#E0C3FC] to-[#091e79] -translate-y-0 rounded-xl ">
          <div className="w-[95%] h-[95%] flex justify-center items-center">
            <img
              src={portImage}
              alt="A G KRISHNA IMAGE"
              className="-rotate-45 xs:rotate-0 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
