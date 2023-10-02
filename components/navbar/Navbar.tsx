"use client"
import useLeftSidebarModalStore from "@/hooks/useLeftSidebarModel";
import React from "react";

const Navbar = () => {
    const LeftSidebarModalStore =useLeftSidebarModalStore()
  return (
    <>
      <div className=" w-full h-20 bg-slate-200 border-b border-slate-300 flex justify-between items-center px-6">
        <div className=" flex flex-col justify-center items-start">
          <span>Animated</span>
          <span>design</span>
        </div>
        <div onClick={LeftSidebarModalStore.onOpen} className=" border bg-pink-900 rounded-md p-2 cursor-pointer text-white">
            left Sidebar
        </div>
      </div>
    </>
  );
};

export default Navbar;
