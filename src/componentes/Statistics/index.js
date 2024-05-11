export const Statistics = () => {

  const dataStatistics=[
    {label:"Total Visitars",number:"300K"},
    {label:"Viewed",number:"1K"},
    {label:"Order",number:"25K"},
    {label:"Cancelled",number:"20K"}
  ]

  return (
    
    <section className="p-4 grid grid-rows-2 grid-flow-col  gap-[4px] text-center mt-4 lg:mt-0 lg:p-0">
    {
      dataStatistics.map((statistic,idx)=>{
        return(
          <div key={idx} className="border rounded-[8px] h-[82px]   bg-white p-4 lg:w-[160px] lg:h-[96px]  ">
          <p className="text-[12px] font-medium text-[#B9B9B9]">{statistic?.label}</p>
          <h1 className="text-[24px] font-semibold">{statistic?.number}</h1>
        </div>
        )
      })
    }
      
    </section>
  );
};