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

new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
});

const MainPage = () => {
  return (
    <section className="w-[85%] mx-auto h-[calc(100vh-100px)] flex justify-center items-center flex-wrap gap-x-5">
      <div className="flex-1 h-[100%] flex flex-col justify-center gap-y-10">
        <h3 className="text-white font-medium text-xl ">👋 Hello, I am</h3>
        <h2 className="text-5xl font-bold animate-charcter">GOPALAKRISHNA A</h2>

        {/* <h3 className="text-2xl auto-type">Mern Stack Developer|</h3> */}
        <h3 className="font-bold text-3xl text-yellow-300">
          <Typewriter
            options={{
              strings: ["React Developer", "Mern Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>

        <section className="flex gap-5 flex-wrap  text-2xl  text-[#78e687ea]">
          <span>
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
      <div className="flex-1 h-[100%] flex justify-center items-center">
        <div className="w-[70%] h-[70%]  rotate-45 bg-gradient-to-r from-[#E0C3FC] to-[#091e79] -translate-y-10 rounded-xl"></div>
      </div>
    </section>
  );
};

export default MainPage;
