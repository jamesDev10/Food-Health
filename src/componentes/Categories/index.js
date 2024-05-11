export const Categories= ()=>{

const dataCategories= [
  {imgCategories:"bg-potatoes-mobile",label:" Indonesia food"},
  {imgCategories:"bg-spring-onion-mobile",label:" Japanese food"},
  {imgCategories:"bg-paste-with-chili-mobile",label:" Korean food"}
]

  return(
    <article className="  pl-[20px] pt-[16px]  lg:p-0 lg:w-[863px]   lg:h-[180px]   ">
    <h1 className="font-bold lg:m-2 lg:text-[24px]">Categories</h1>
    <section className="flex gap-4  overflow-x-auto lg:overscroll-none ">
     {
      dataCategories?.map((categorie,idx)=>{
        return(
          <div key={idx} className={`w-[157px] h-[150px]   flex-none    rounded-[25px]  ${categorie?.imgCategories}  bg-cover bg-no-repeat relative lg:w-[277px] lg:h-[129px]  `}>
          <p className="absolute bottom-2   shadow-lg    font-bold left-5 text-white">
          {categorie?.label}
          </p>
        </div>
        )
      })
     }
    </section>
  </article>
  )
}