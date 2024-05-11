import { Icons } from "../../Icons"

export const Sidebar =()=>{
    return(
        <div className="lg:flex  h-[100] rounded-[22px]  bg-gradient-to-r from-[#F85900]   via-[#F96D0D]   to-[#FECB47] to-100%  ">
        <div className="hidden lg:grid  w-[106px] 0 justify-center items-center">
          <div className="grid self-start justify-center h-0 ">
            <h1 className="cursor-pointer">
              <Icons name="local" />
            </h1>
          </div>
          <div className="grid mb-28 self-start justify-center  gap-6 ">
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"stockpot"} />
            </h1>
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"list"} />
            </h1>
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"bar"} />
            </h1>
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"grid"} />
            </h1>
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"notifi"} />
            </h1>
            <h1 className="cursor-pointer hover:bg-[#ffffff60] h-[37px] w-[38px] rounded-md grid justify-center items-center  ">
              <Icons name={"setting"} />
            </h1>
          </div>
          <div className="grid justify-center">
            <h1 className="cursor-pointer">
              <Icons name="logout" />
            </h1>
          </div>
        </div>
      </div>
    )
}