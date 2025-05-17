import React from "react";
import pp from "./Images/paypal.jpg";
import ust from "./Images/usthaan.png";
const Experience = () => {
  return (
    <div className="py-20 w-full px-8 md:px-24" id="experience">
      <h1 className="text-white text-4xl md:text-5xl text-center inter relative">
        Experience
        <span className="rainbow-underline"></span>
      </h1>
      <div className="cards w-full flex flex-col md:flex-row justify-center gap-12 mt-16">
        <div className="expcard w-full md:w-[30%] min-h-[50vh] rounded-2xl border-2 border-zinc-800 px-10 py-6 flex flex-col items-center">
          <img src={pp} alt="usthaan" className="mt-3 w-[80px]" />
          <div className="duration">
            <h1 className="text-zinc-500 text-[0.85rem]">
              (June 2024 - August 2024)
            </h1>
          </div>
          <ul className="mt-5 neue flex flex-col gap-2">
            <li className="text-white list-disc">
              Integrated observability dashboards with Datadog, boosting error detection by 25% and improving platform reliability.
            </li>
            <li className="text-white list-disc">
              Reduced Customer Perceived Latency by 40%.
            </li>
            <li className="text-white list-disc">
              Developed personalized business metrics using OpenTelemetry, enabling deep insights and data-driven decisions.
            </li>
          </ul>
          <button className="text-[#00c3ff] bg-[#002B89] hover:text-white border-2 border-transparent hover:border-2 hover:border-purple-600 px-3 py-2 text-sm md:text-md rounded-xl duration-300 hover:bg-transparent hover:scale-105 inter cursor-pointer mt-5">
            Certificate
          </button>
        </div>
        <div className="expcard w-full md:w-[30%] min-h-[50vh] rounded-2xl border-2 border-zinc-800 px-10 py-6 flex flex-col items-center">
          <img src={ust} alt="usthaan" className="mt-3" />
          <div className="duration">
            <h1 className="text-zinc-500 text-[0.85rem]">
              (November 2024 - May 2025)
            </h1>
          </div>
          <ul className="mt-5 neue flex flex-col gap-2">
            <li className="text-white list-disc">
              Worked remotely
              and experienced fast-paced startup culture.
            </li>
            <li className="text-white list-disc">
              Developed and integrated product features using AngularJS,
              Node.js, and TypeScript.
            </li>
            <li className="text-white list-disc">
              Hands-on experience with AWS, Bitbucket, and Jenkins.
            </li>
            <li className="text-white list-disc">
              Ensured performance optimization and seamless functionality while collaborating with other members.
            </li>
          </ul>
          <button className="bg-[#D16019] text-white hover:text-white border-2 border-transparent hover:border-2 hover:border-purple-600 px-3 py-2 text-sm md:text-md rounded-xl duration-300 hover:bg-transparent hover:scale-105 inter cursor-pointer mt-5">
            Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
