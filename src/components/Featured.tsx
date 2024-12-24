import React from "react";

function Featured() {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-700">
        <h1 className="text-8xl font-neueMontreal tracking-tighter">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="relative cardcontainer w-1/2  h-[80vh] ">
            <h1 className="text-[#CDEA68] left-full -translate-x-1/2 top-1/2  absolute  z-[9] font-foundersGrotesk mb-10 text-8xl">
              {"FYSE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card rounded-lg w-full h-full  overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>
          <div className="relative cardcontainer w-1/2  h-[80vh] ">
            <h1 className="right-full translate-x-1/2 top-1/2  absolute text-[#CDEA68] z-[9] font-foundersGrotesk mb-10 text-8xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card rounded-lg w-full h-full  overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-zinc-400"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
