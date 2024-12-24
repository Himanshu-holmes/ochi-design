import React from 'react'
import {motion} from "motion/react"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="bg-zinc-900 relative ">
      <div className="tilt z-10  w-[98vw] py-20 bg-green-900 rounded-tl-3xl rounded-tr-3xl  ">
        <div className="rotate-3 flex items-center  gap-10 text border-t-2 border-b-2 border-zinc-100  font-foundersGrotesk whitespace-nowrap overflow-hidden -mb-[1vw]  px-[17px]">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10}}
            className="text-[17vw] -mt-[2.2vw] leading-none"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            className="text-[17vw] -mt-[2.2vw]  leading-none"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          >
            We are ochi
          </motion.h1>
          <motion.h1
            className="text-[17vw] -mt-[2.2vw] leading-none"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee