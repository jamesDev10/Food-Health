import { Icons } from "../../Icons"

export const Navbar = ()=>{
  return(
   <nav>
     <header className="flex  h-[109px]   lg:p-1">
    <section className="grid grid-cols-[1fr,auto] lg:flex  p-8   w-full items-center justify-between lg:p-0">
      <div>
        <div className="flex font-bold  lg:text-[32px]">
          <h1 className="text-[#F8C100] ">Food</h1>
          <h1 className="text-[#F85900] ">Health</h1>
        </div>
        <p className="text-sm lg:text-[20px]">What do you want to eat today?</p>
      </div>
      <div className="flex   cursor-pointer lg:hidden">
        <Icons name={"dashboard"} />
      </div>
  
     <div className="hidden lg:flex lg:relative  ">
     <input className="hidden  lg:block w-[812px] rounded-full h-[61px] bg-white focus:outline-none  focus:border-[#FFB74B] focus:ring-1   placeholder:text-[#CACACA] placeholder:font-medium  p-4" placeholder="Search"/> 
     <h1 className="hidden sm:block absolute right-6 bottom-5 cursor-pointer"><Icons name="search"/></h1>
     </div>
    
    </section>
  </header>
   </nav>
  )
}