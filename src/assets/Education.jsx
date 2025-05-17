import React from "react";

const Education = () => {
  return (
    <div className="w-full bg-[#00000089]  backdrop-blur-2xl flex flex-col items-center py-20" id="education">
      <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
        Education
        <span className="rainbow-underline"></span>
      </h1>
      <div className="timeline relative w-[80%] rounded-lg mt-20 neue">
        <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2   ">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white underline">Indian Institute of Information Technology, Sonepat</h2>
            <small className="text-md font-bold text-zinc-500">
              2020 - Present
            </small>
            <p className="text-md  text-purple-600">
              Current CGPA :- 9.23
            </p>
            <span className="rightc-arrow"></span>
          </div>
        </div>

        <div className="container w-1/2 relative py-[10px] px-[50px] left-0 ">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] right-[-20px] z-2"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Matrix High School, Sikar</h2>
            <small className="text-md font-bold text-zinc-500">
              2020
            </small>
            <p className="text-md text-purple-600">
              Senior Secondary Education
            </p>
            <span className="leftc-arrow"></span>
          </div>
        </div>

        <div className="container w-1/2 relative py-[10px] px-[50px] left-0 md:left-1/2   ">
          <div className="imgg h-[40px] w-[40px] rounded-full absolute top-[32px] left-[-20px]"></div>
          <div className="text-box bg-[#00000089] relative px-[30px] py-[20px] rounded-[10px]">
            <h2 className="font-bold text-lg md:text-2xl text-white">Lord's International School, Churu</h2>
            <small className="text-md font-bold text-zinc-500">
              2018
            </small>
            <p className="text-md text-purple-600">
              Secondary Education
            </p>
            <span className="rightc-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
