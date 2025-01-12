import { Link } from "react-scroll";

const Header = () => {
  console.log("header render");
  return (
    <section className="bg-[rgba(65,65,119,0.3)] shadow-lg">
      <div className="w-[85%] mx-auto flex flex-wrap gap-x-5 justify-between  items-center  h-[90px]">
        <div className="text-yellow-300 text-2xl font-bold">
          <Link to="home">Portfolio</Link>
        </div>
        <div className="flex gap-x-5 text-yellow-200">
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
    </section>
  );
};

export default Header;
