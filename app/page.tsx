"use client";
import RightSideBar from "@/components/RightSideBar";
import LeftSideBar from "@/components/LeftSideBar";
import useLeftSidebarModalStore from "@/hooks/useLeftSidebarModel";
import { RxCrossCircled } from "react-icons/rx";
import RegisterModal from "@/components/modals/RegisterModal";

export default function Home() {
  const LeftSidebarModalStore = useLeftSidebarModalStore();

  return (
    <>
      <div className="  flex ">
      <LeftSideBar />
      <RegisterModal/>
      <RightSideBar />
      
        
      </div>
    </>
  );
}
