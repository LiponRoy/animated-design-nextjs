"use client";
import useLeftSidebarModalStore from "@/hooks/useLeftSidebarModel";
import useRegisterModalStore from "@/hooks/useRegisterModal";
import React, { useState } from "react";

const Navbar = () => {
  const LeftSidebarModalStore = useLeftSidebarModalStore();
  const registerModalStore = useRegisterModalStore();



  
  return (
    <>
      <div className=" w-full h-20 bg-slate-200 border-b border-slate-300 flex justify-between items-center px-6">
        {/* logo part */}
        <div className=" flex flex-col justify-center items-start">
          <span>Animated</span>
          <span>design</span>
        </div>

       
          <div
            onClick={registerModalStore.onOpen}
            className=" relative border border-pink-400 rounded-md p-2 cursor-pointer text-slate-500"
          >
            From Base Modal
            
          </div>
          {/* left sidebar */}

          <div
            onClick={LeftSidebarModalStore.onOpen}
            className=" border bg-pink-900 rounded-md p-2 cursor-pointer text-white"
          >
            left Sidebar
          </div>
        
      </div>
    </>
  );
};

export default Navbar;
