import {  useState } from "react";

export const MyCartActionButtons = () => {
  const [first, setfirst] = useState(1)


const count=()=>{
 
 if (first<=10) {
  setfirst(first + 1)
 }
   
}
const decrement=()=>{
  if (first>0) {
    setfirst(first - 1)
   }
    
}
 
  return (
    <div className="w-[56vw]   grid grid-cols-[auto,auto] gap-6   items-center lg:w-0">
      <h1 className=" h-[24px]  font-bold text-[16px]">$320</h1>
      <div className="  flex   gap-4   justify-end">
        <div className="   cursor-pointer   rounded-full bg-[#CACACA] flex items-center">
          <h1 onClick={()=>decrement()} className="w-[33px] text-center font-semibold text-[20px] text-white">
            -
          </h1>
        </div>
        <h1 className="font-semibold text-[24px]" >{first}</h1>
        <div className="   cursor-pointer  rounded-full bg-[#F85900] flex items-center">
          <h1 onClick={()=>count()} className="w-[33px] text-center font-semibold text-[20px] text-white">
            +
          </h1>
        </div>
      </div>
    </div>
  );
};
