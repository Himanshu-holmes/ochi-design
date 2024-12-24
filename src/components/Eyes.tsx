import React, { useEffect } from "react";

function Eyes() {
    const [rotate,setRotate] = React.useState(0);
    useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
        console.log(e.clientX,e.clientY);
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY,deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
        console.log(angle);
       }) 
    },[])
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        className={`relative w-full h-screen bg-cover bg-center bg-red-500 bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]`}
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-10 "
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
            <div className="relative w-2/3 h-2/3 bg-black rounded-full ">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full h-10 "
              >
                <div className="bg-zinc-100 w-10 h-10 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
