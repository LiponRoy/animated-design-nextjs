"use client";
import RightSideBar from "@/components/RightSideBar";
import LeftSideBar from "@/components/LeftSideBar";
import useLeftSidebarModalStore from "@/hooks/useLeftSidebarModel";
import { RxCrossCircled } from "react-icons/rx";

export default function Home() {
  const LeftSidebarModalStore = useLeftSidebarModalStore();

  return (
    <>
      <div className="  flex">
      <LeftSideBar />
      <RightSideBar />
        
      </div>
    </>
  );
}
