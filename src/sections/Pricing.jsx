import ToggleButton from "../components/ToggleButton";

import ProPriceCard from "../components/ProPriceCard";
import FreePriceCard from "../components/FreePriceCard";

function Pricing() {
  return (
    <div className="px-[16px] lg:px-[60px] xl:px-[120px]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:w-[60%] lg:w-[70%]">
          <p className="uppercase text-primary-color text-[14px] font-inter font-medium lg:text-lg">
            PRICING & PLANS{" "}
          </p>
          <h2 className="text-gray-800 font-inter font-black text-[36px] leading-snug pt-2 pb-4 lg:text-[52px]">
            Perfect Balance <br className="hidden lg:block" /> of Features &
            Affordability
          </h2>
          <p className="text-gray-600 text-[18px] font-inter max-w-[600px]">
            Feasto simplifies creating a stunning, professional web store with
            its user-friendly templates and quick setup. Our powerful features
            ensure a seamless experience.
          </p>
        </div>
        <div className="flex justify-center pt-6 md:items-center ">
          <ToggleButton />
        </div>
      </div>
      <div className="mt-[60px] flex flex-col gap-10 items-center lg:flex-row-reverse lg:justify-center">
        <ProPriceCard />
        <FreePriceCard />
      </div>
    </div>
  );
}

export default Pricing;
