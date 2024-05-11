export const Order = () => {
    const dataOrder = [
        {
          imgOrder: "bg-sour-curry--mobile-4",
          label: "Sambal Fried Fish with Fresh Vegetables",
        },
        {
          imgOrder: "bg-snakehead-fish-mobile",
          label: "Archipelago Noodles with Chicken Katsu",
        },
        {
          imgOrder: "bg-sour-curry--mobile-2",
          label: "Salted Egg Chicken With Mayonnaise",
        },
      ];
  return (
    <div>
      {dataOrder?.map((card, idx) => {
        return (
          <article
            key={idx}
            className="mt-4   h-[128px] rounded-[16px]  p-3 flex gap-4 bg-white lg:w-[862px] lg:h-[111px]   lg:items-center"
          >
            <div
              className={`w-[108px] h-[108px] rounded-[25px]  ${card?.imgOrder}  bg-cover bg-no-repeat lg:w-[91px] lg:h-[91px] `}
            ></div>
            <section className="flex   flex-auto   font-medium text-[14px] lg:w-[673px] lg:h-[91px]">
              <div className="lg:flex lg:justify-between   lg:w-[780px]">
                <div className="lg:flex lg:flex-col lg:gap-3">
                  <h1 className="mt-2">{card?.label}</h1>
                  <p className="text-[#B9B9B9] text-[14px]  ">7 Dec, 16:10</p>
                </div>
                <div className="flex w-[158px] h-[40px]  text-white font-medium rounded-full bg-[#F85900] justify-center items-center self-end  lg:w-[146px] lg:h-[52px]">
                  <h1>Order again</h1>
                </div>
              </div>
            </section>
          </article>
        );
      })}
    </div>
  );
};
