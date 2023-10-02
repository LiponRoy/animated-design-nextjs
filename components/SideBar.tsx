"use client";

import { useState } from "react";
import { AiFillChrome } from "react-icons/ai";
import { AiFillFunnelPlot } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const SideBar = () => {
    const [showSidebar, setShowbar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setShowbar(!showSidebar);
    console.log(showSidebar);
  };
  return (
    <>
     <div
          className={` relative h-screen bg-fuchsia-700 transition-all duration-700 ${
            showSidebar ? "w-40" : " w-16"
          }`}
        >
          {/* item one */}
          <div className=" inline-flex p-4 pt-6 gap-x-2 cursor-pointer">
            <AiFillChrome size={24} className={`text-white transition-all duration-700 ${showSidebar ? "  rotate-0" : " rotate-[360deg]"}`} />
            <span
              className={` text-lg text-slate-300  duration-300  ${!showSidebar && "scale-0"}`}
            >
              Google
            </span>
          </div>
          {/* item one */}
          <div className=" inline-flex p-4 gap-x-2 cursor-pointer">
            <AiFillFunnelPlot size={24} className={`text-white transition-all duration-700 ${showSidebar ? "  rotate-0" : " rotate-[360deg]"}`} />
            <span
              className={` text-lg text-slate-300  duration-300  ${!showSidebar && "scale-0"}`}
            >
              Contain
            </span>
          </div>
          {/* item one */}
          <div className=" inline-flex p-4 gap-x-2 cursor-pointer">
            <AiFillSkype size={24} className={`text-white transition-all duration-700 ${showSidebar ? "  rotate-0" : " rotate-[360deg]"}`} />
            <span
              className={` text-lg text-slate-300  duration-300  ${!showSidebar && "scale-0"}`}
            >
              Contain
            </span>
          </div>

          {/* toggle butt */}
          <div
            onClick={() => toggleSidebar()}
            className={` absolute p-2 top-6 -right-6 cursor-pointer bg-fuchsia-800  rounded-md border border-white text-white transition-all duration-500 ${
              showSidebar ? "  rotate-0" : " rotate-180"
            }`}
          >
            <AiOutlineArrowRight />
          </div>
          {/*End toggle butt */}
        </div>
      
    </>
  )
}

export default SideBar
