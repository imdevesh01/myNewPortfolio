import React from "react";

const About = () => {
  return (
    <div
      className="w-full min-h-screen py-20 bg-[#00000089] backdrop-blur-2xl border-none px-8 md:px-24 "
      id="about"
    >
      <h1 className="text-white text-4xl md:text-5xl inter text-center relative">
        About Me
        <span className="rainbow-underline"></span>
      </h1>
      <div className="abtPartitions mt-20 flex flex-col md:flex-row w-[100%] gap-8 md:gap-0">
        <div className="abtLeft w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXcxNHc5Znplc3NrM3Yzd3hhemdpcGN2OXA4Z280d2M4dHR2a2dnbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKGAJ7CLp95cNI4/giphy.gif" alt="gif" className="w-[60%] rounded-2xl" />
        </div>
        <div className="abtRight w-full md:w-1/2 flex flex-col justify-center gap-10 items">
          <h1 className="text-white inter text-lg md:text-xl">
            <span className="text-3xl md:text-4xl text-purple-600">
              A
            </span>
             n <span className="neue">engineering student</span>, with a
            strong passion for coding and web development, actively working
            toward getting better at software development and designing. Specialized in C++
            and the MERN Stack, and I've built several full-stack projects that
            showcase both my technical and problem-solving abilities.
          </h1>
          <h1 className="text-white inter text-lg md:text-xl">
              Excited to continue my journey in the industry and actively seeking opportunities to expand my skills and knowledge.
               In my free time, I listen to music or play sports. 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
