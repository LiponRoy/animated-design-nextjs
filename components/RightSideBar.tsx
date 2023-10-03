import useLeftSidebarModalStore from '@/hooks/useLeftSidebarModel';
import React from 'react'
import { RxCrossCircled } from 'react-icons/rx';

const LeftSideBar = () => {
    const LeftSidebarModalStore=useLeftSidebarModalStore()
  return (
    <>

<div className=" relative  bg-slate-100  flex justify-center items-center text-white">
          <div className={`absolute h-screen w-40 lg:w-52 top-0 right-0 flex justify-center items-center bg-pink-700 translate duration-300 ${ LeftSidebarModalStore.isOpen?" translate-x-0 opacity-100":"translate-x-full opacity-0"}`}>
            left sidebar

            <div onClick={LeftSidebarModalStore.onClose} className=" absolute top-4 left-4 cursor-pointer bg-pink-900 rounded-full">
              <RxCrossCircled size={24} />
            </div>
          </div>
        </div>
      
    </>
  )
}

export default LeftSideBar
