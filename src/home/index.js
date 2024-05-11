
import { Categories } from "../componentes/Categories";
import { MyCart } from "../componentes/MyCart";
import { Navbar } from "../componentes/Navbar";
import { OrderCards } from "../componentes/OrderCards";
import { Sidebar } from "../componentes/Sidebar";
import { Statistics } from "../componentes/Statistics";
const Home = () => {
  return (
    <div className="lg:grid gap-4 w-full  grid-cols-[auto,1fr]">
      <Sidebar/>
      <div>
        <Navbar />
        <main>
          <div className="lg:flex gap-9">
            <div>
              <section className="bg-[#FFB74B] h-[210px] flex justify-between gap-4  lg:w-[863px] lg:h-[202px] lg:rounded-xl  ">
                <div className=" w-[230px] mt-[20px] text-[16px] ml-[25px]    text-white   lg:mt-2 lg:w-[314px]">
                  <h1 className="hidden lg:block font-bold text-[40px]">
                    Discount
                  </h1>
                  <h1 className="font-bold text-[40px]">New Menu!</h1>
                  <p>Get Free Shipping Every $30 With No Minimum Purchase</p>
                </div>

                <div className="w-[140px]   bg-healthy-salad-mobile bg-contain bg-no-repeat lg:bg-healthy-salad lg:w-[271px] lg:h-[202px] "></div>
              </section>
              <Categories />
              <OrderCards />
            </div>

            <div>
              <Statistics />
              <MyCart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
