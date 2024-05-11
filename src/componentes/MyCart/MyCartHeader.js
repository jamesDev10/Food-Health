import { Icons } from "../../Icons"

export const MyCartHeader = ()=>{
  return(
    <div className=" lg:w-[320px] h-[62px] flex justify-between  ">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-[24px]  w-[96px] h-[36px]">
            My Cart
          </h1>
          <p className="font-light  text-[15px] w-[140px] h-[23px]">
            Shopping is happy
          </p>
        </div>
        <div className="cursor-pointer">
          <Icons name={"notification"} />
        </div>
      </div>

  )
}