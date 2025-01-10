import { Link } from "react-scroll";

const Header = () => {
  console.log("header render");
  return (
    <section className="w-[85%] mx-auto flex flex-wrap gap-x-5 items-center text-pink-300 h-[100px] border-2 border-black">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-black hover:text-white   rounded-lg "
      >
        Home
      </Link>
      <Link
        to="technologies"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-black hover:text-white   rounded-lg "
      >
        Technologies
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-black hover:text-white   rounded-lg "
      >
        Projects
      </Link>
      <Link
        to="education"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-black hover:text-white   rounded-lg "
      >
        Education
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="no-underline border-white border-2 px-4 py-2 transition ease-in-out  duration-500 hover:cursor-pointer  hover:bg-black hover:text-white   rounded-lg "
      >
        Contact
      </Link>
      <div className="text-black">Portfolio</div>
    </section>
  );
};

export default Header;
