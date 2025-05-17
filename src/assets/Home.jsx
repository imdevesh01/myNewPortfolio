import React from "react";
import img1 from "./Images/devesh.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home">
      <div className="w-full gap-20 md:h-screen flex flex-col md:py-0 py-25 md:flex-row px-8 md:px-24 justify-between items-center md:gap-6 mt-10 bg-[#00000089] backdrop-blur-2xl">
        <div className="home-left flex flex-col justify-center border-0 border-zinc-700 w-full text-center md:text-left">
          <h1 className="text-white neue text-4xl md:text-7xl ">Hey there, I'm a</h1>
          <h1 className="text-white neue text-2xl md:text-6xl text-nowrap mt-6">
            {" "}
            <span className="text-purple-600 dm-sans">
              <Typewriter
                words={[
                  "<Full Stack Developer/>",
                  "<Competitive Programmer/>",
                  "<Software Engineer/>"
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={40}
                delaySpeed={400}
              />
            </span>
          </h1>
          <div className="home-btns flex flex-row gap-3 mt-8 justify-center">
            <a href="./Resume.pdf" target="_blank"><button className="bg-purple-600 text-white hover:text-white border-2 border-transparent hover:border-2 hover:border-purple-600 px-3 py-2 text-sm md:text-md rounded-3xl duration-300 hover:bg-transparent hover:scale-105 inter cursor-pointer ">
              Download CV
            </button></a>
            <button className="text-white border-2 border-white px-3 py-2 text-sm md:text-md rounded-3xl hover:bg-white hover:scale-105 hover:border-2 hover:border-white hover:text-black duration-300 transition inter cursor-pointer ">
              <a href="https://www.linkedin.com/in/deveshjangir/" target="_blank">Connect</a>
            </button>
          </div>
        </div>
        <div className="home-right border-0 border-zinc-700 flex justify-center">
          <img
            src={img1}
            alt="personal-img"
            className="fancy-border md:scale-100 w-[60%] md:w-[50vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
