import { useMyCarts } from "../../hooks/useMyCart";
import star from "../../images/star.png";
import { MyCartActionButtons } from "./MyCartActionButtons";
import { MyCartHeader } from "./MyCartHeader";

export const MyCart = () => {
  const { dataCarts } = useMyCarts();
  return (
    <article className="h-[608px] p-4     mt-8   lg:p-0">
      <MyCartHeader />
      <article className="h-[526px]   mt-[20px] flex flex-col gap-[19px] ">
        {dataCarts.map((cart, idx) => {
          return (
            <div
              key={idx}
              className=" lg:w-[326px] h-[117px] bg-white rounded-[16px] flex gap-[17px] p-[10px]"
            >
              <div
                className={`w-[150px] h-[97px] rounded-[16px] ${cart.image}  bg-cover bg-no-repeat`}
              >
                
              </div>
              <section className="w-full  h-[93px]">
                <div className="w-[177px] h-[43px] flex flex-col gap-2">
                  <h1 className="text-[16px] font-medium">{cart?.label}</h1>
                  <div className="flex flex-col gap-4">
                    <div className="w-[118px] h-[15px] flex">
                      <div className="flex flex-row gap-[5px]">
                        <img src={star} />
                        <h1 className="w-[27px] font-medium text-[10px]">
                          4.8/5
                        </h1>
                      </div>
                      <p className="w-[66px] font-medium text-[10px] text-[#B9B9B9]">
                        (1K+ reviews)
                      </p>
                    </div>
                     <MyCartActionButtons/>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </article>
    </article>
  );
};
