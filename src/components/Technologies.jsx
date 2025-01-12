import React from "react";
import { technogies } from "./technologyData";

const Technologies = () => {
  return (
    <section className="h-screen py-3 bg-gradient-to-r from-[#263b9b] to-[#E0C3FC]">
      <div className="w-[85%] mx-auto">
        <h3 className=" text-3xl text-[#FEE715FF] mb-5">Technologies</h3>
        <div className="min-h-[80%] p-2 shadow-lg shadow-black rounded">
          <p className="px-3 py-5 text-white text-xl font-bold">
            Here are Techlogies and Frameworks I have been working on
          </p>
          <div className="grid w-[85%] mx-auto py-5 grid-cols-2 justify-center items-center gap-10 mb-10 ">
            {technogies?.map((technology, index) => (
              <div
                className="bg-[#333D79FF] text-[#FAEBEFFF] shadow-md shadow-black p-3 w-[80%] leading-9 transition duration-500 ease-in-out rounded-lg hover:bg-blue-200 hover:text-[#2b391e] cursor-pointer font-semibold"
                key={index}
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
