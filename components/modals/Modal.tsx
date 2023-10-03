"use client"
import { FaTimes } from "react-icons/fa";
import Button from "../Button";
import { useEffect, useState } from "react";

interface modalProps {
  open: boolean;
  onClose: () => void;
  onOk: () => void;
  title: string;
  body: React.ReactElement;
  footer: React.ReactElement;

}

const Modal = ({ open, onClose,onOk, title, body, footer }: modalProps) => {

    const[showModal,setShowModel]=useState(open);

    useEffect(() =>{
        setShowModel(open)
    },[open])



  return (
    <>
      {/* outer Black Part */}
      <div className=" h-screen w-full flex justify-center items-center ">
        {/* Main Contain Part */}
        <div className={`relative min-h-0 w-[30%] p-4 bg-slate-100 flex flex-col justify-center items-center  gap-y-2 rounded-md border-2 border-slate-300 translate duration-300 ${showModal?" translate-y-0 opacity-100":"translate-y-full opacity-0"}`}>
          {/* Title Part */}

          <div className="titlePart flex justify-center items-center font-bold text-slate-700">
            {/* {title} */}
            <span>Register</span>
          </div>
          {/* Body Part */}

          <div className="bodyPart flex justify-center items-center">
            {body}
            
          </div>
          <Button title="Ok" onClick={onOk}></Button>
          {/* Footer Part */}

          <div className="footerPart flex justify-center items-center p-6">
            {footer}
            
          </div>

          

            {/* {cross button with position} */}
          <div onClick={onClose} className=" absolute top-4 right-4  cursor-pointer">
            <FaTimes />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
