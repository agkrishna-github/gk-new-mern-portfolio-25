import React, { useState } from "react";
import Category from "./Category";
import { ProjectsData } from "./ProjectsData";
import ProjectsComp from "./ProjectsComp";

const Projects = () => {
  const [category, setCategory] = useState("Mern");

  const categoryState = ProjectsData?.filter(
    (project) =>
      project?.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  const allCategories = [
    ...new Set(ProjectsData?.map((project) => project?.category)),
  ];
  return (
    <section
      className="py-5 xs:py-8 bg-gradient-to-r from-[#263b9b] to-[#E0C3FC] text-white"
      name="projects"
    >
      <div className="w-[85%] mx-auto">
        <h3 data-aos="fade-right" className=" text-3xl text-[#FEE715FF] mb-5">
          Projects
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex gap-2 min-h-[350px] xs:flex-col"
        >
          <div className="w-[15rem] gap-2 xs:w-full">
            <div className="p-5 flex flex-col min-h-full items-center gap-10 xs:gap-2 pt-12 xs:p-2 project-border xs:border-none ">
              {allCategories?.map((cat, i) => (
                <Category
                  cat={cat}
                  category={category}
                  setCategory={setCategory}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex gap-5 flex-wrap  justify-center items-start p-5  project-border xs:border-none">
            {categoryState?.map((project, i) => (
              <ProjectsComp project={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
