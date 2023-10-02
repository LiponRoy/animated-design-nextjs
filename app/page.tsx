import SideBar from "@/components/SideBar";

export default function Home() {
  

  return (
    <>
      <div className="flex">
        <SideBar/>
       
        <div className="h-screen w-full bg-slate-100  flex justify-center items-center text-white">
          main div
        </div>
      </div>
    </>
  );
}
