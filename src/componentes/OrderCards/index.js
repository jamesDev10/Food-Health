import { useOrderCards } from "../../hooks/useOrderCards";

 

export const OrderCards = () => {
  
const {
  component,
  setComponent,
  validateComponents
}=useOrderCards()

  return (
    <section className="p-4 lg:h-[400px] lg:p-0 ">
      <header className="lg:flex mt-6 lg:justify-between ">
        <div className="flex  justify-between font-medium  lg:justify-start lg:gap-6  ">
          <h1 onClick={()=>{setComponent("order")}} className={"cursor-pointer border-b-[2px] text-[16px] w-16 text-center border-black"}>
            Order
          </h1>
          <h1 onClick={()=>{setComponent("delivered")}} className="cursor-pointer  w-20 text-center text-[#B9B9B9] ">
            Delivered
          </h1>
          <h1 onClick={()=>{setComponent("finished")}} className="cursor-pointer  w-20 text-center text-[#B9B9B9] ">
            Finished
          </h1>
        </div>
        <h1 className="hidden  text-center text-[#F85900] lg:flex font-medium  text-[16px]">
          See all 
        </h1>
      </header>
     {validateComponents[component]}
    </section>

  );
};
