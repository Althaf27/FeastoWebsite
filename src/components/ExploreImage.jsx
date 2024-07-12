import ExploreStatsCard from "./ExploreStatsCard";

import teaMaker from "../assets/images/teaMaker.png";
import shop from "../assets/images/shop.png";
import clothesShop from "../assets/images/clothesShop.png";
import chef from "../assets/images/chef.png";

import total from "../assets/icons/total.png";
import delivery from "../assets/icons/deliveries.png";
import orders from "../assets/icons/orders.png";

import { customerResults } from "../constants/data";

function ExploreImage() {
  return (
    <div className="flex justify-center flex-1 items-center">
      <div className=" grid grid-cols-2 grid-rows-2 py-9 overflow-hidden w-[400px] sm:w-[420px] sm:overflow-visible lg:w-auto lg:flex-1 ">
        <div className="relative h-56 lg:h-72">
          <div className="absolute left-14 -right-8  xl:-top-4 xl:left-20 ">
            <ExploreStatsCard
              className="absolute -right-24 -top-6 "
              data={customerResults.orders}
              perDay={true}
              icon={orders}
            >
              Orders received
            </ExploreStatsCard>
            <img src={teaMaker} alt="tea maker" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 -bottom-14 z-20">
            <ExploreStatsCard
              className="absolute -right-4 -top-6"
              data={customerResults.deliveries}
              perDay={true}
              icon={delivery}
            >
              Deliveries completed
            </ExploreStatsCard>
            <img src={shop} alt="shop owner" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-5 z-10">
            <ExploreStatsCard
              className="absolute -bottom-5 right-6"
              data={customerResults.totalCustomes}
              perDay={false}
              icon={total}
            >
              Total customers
            </ExploreStatsCard>
            <img src={clothesShop} alt="retail shop" />
          </div>
        </div>

        <div className="relative h-40 lg:h-48">
          <div className="absolute right-8 -bottom-24 -left-4 xl:-bottom-32 xl:right-10">
            <img src={chef} alt="chef" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ExploreImage;
