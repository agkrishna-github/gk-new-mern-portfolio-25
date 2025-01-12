const ProjectsComp = ({ project }) => {
  return (
    <div className="flex flex-col gap-5 p-2 w-[250px] min-h-[200px] bg-[#422057FF] rounded-lg">
      <p className=" p-5 h-[130px] bg-slate-200 text-lime-950 leading-8 rounded-lg font-semibold text-xl">
        {project?.title}
      </p>

      <div className="flex gap-5  justify-center items-center">
        <a
          className="project-cat rounded-lg p-3 text-center cursor-pointer hover:bg-white hover:text-black text-white no-underline hover:transition hover:duration-100 hover:ease-in"
          href={project?.demo}
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectsComp;
