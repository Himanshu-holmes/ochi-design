import React from 'react'

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black  "
    >
      <h1 className="font-neueMontreal text-center px-16 text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="flex w-full border-white border-t-[1px] mt-20 px-10 pt-10">
        <div className="w-1/2">
          <h1 className="text-6xl tracking-tighter">Our Approach</h1>
          <button className="flex justify-between gap-10 items-center mt-[2vh] px-12  py-5 bg-zinc-900 rounded-full text-white ">
            Read More{" "}
            <div className=" bg-white w-4 h-4 rounded-full hover:scale-[200%] transition duration-200 ease-linear "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-orange-200 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About