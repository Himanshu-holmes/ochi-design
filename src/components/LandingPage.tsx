import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div className="w-full h-full bg-zinc-900 pt-2">
      <div className="textstructure mt-40 ">
        {["We Create", "Eye Opening", "Presentations"].map((text, index) => (
          <div className="masked ">
            <div className=" font-foundersGrotesk px-20  flex items-center justify-center w-fit overflow-hidden">
              {index === 1 && (
                <div className="w-[6vw] h-[4vw] mr-[1vw] rounded-md bg-red-400 relative top-1 hidden sm:block"></div>
              )}
              <h1 className=" xl:my-0 uppercase text-8xl leading-[.75] font-light">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-32 py-10 px-20 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none ">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-light rounded-full text-sm ">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] bg-zinc-500  flex justify-center items-center ">
            <span>
              <FaArrowUpLong className="rotate-45" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage