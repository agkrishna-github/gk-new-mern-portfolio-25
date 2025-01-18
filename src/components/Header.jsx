import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

const Header = () => {
  console.log("header render");

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHandler = () => {
    setOpen(!open);
  };
  return (
    <section className="bg-[rgba(65,65,119,0.3)]" name="home">
      {isScrolled && (
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            right: "5px",
            backgroundColor: "lightblue",
            padding: "10px",
          }}
          className="z-20  bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] rounded-full"
        >
          <Link to="home" spy={true} smooth={true} duration={500}>
            <span className="text-white text-2xl">
              <FaArrowUp />
            </span>
          </Link>
        </div>
      )}
      <div className="w-[85%] mx-auto  flex gap-x-5 justify-between  items-center  h-[90px] xs:h-[60px]">
        <h2
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-yellow-300 text-3xl xs:text-2xl font-bold "
        >
          <Link to="home">Portfolio</Link>
        </h2>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="text-2xl hidden xs:block text-yellow-500"
          onClick={toggleHandler}
        >
          <span className="toggleItem">
            {open ? <IoMdClose /> : <IoMdMenu />}
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex gap-x-5 text-yellow-200 xs:hidden"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
          >
            Home
          </Link>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
            className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
          >
            Technologies
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
          >
            Projects
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
          >
            Education
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
          >
            Contact
          </Link>
        </div>
      </div>

      {open && (
        <div className="bg-[rgba(0,0,0)] absolute w-full h-full z-10 pt-6">
          <div className="flex flex-col w-[85%] mx-auto gap-y-5 text-yellow-200">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              to="technologies"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
              onClick={() => setOpen(!open)}
            >
              Technologies
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
              onClick={() => setOpen(!open)}
            >
              Projects
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
              onClick={() => setOpen(!open)}
            >
              Education
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-[rgba(65,65,119,0.9)] hover:text-white   rounded-lg "
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
