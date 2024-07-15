import OutlineButton from "./OutlineButton";
import CheckText from "./CheckText";
import UncheckText from "./UncheckText";

//data
import { freePlanFeatures } from "../constants/data";

/**
 * Render free plan card
 * @see {@link CheckText}
 * @see {@link UncheckText}
 * @see {@link OutlineButton}
 * @returns
 *
 * @example
 * <FreePriceCard/>
 */
function FreePriceCard() {
  return (
    <div className="shadow-lg shadow-slate-300 rounded-xl max-w-[450px]">
      <div className="mt-7">
        <p className="text-primary-color font-inter font-semibold text-lg text-center mb-9">
          FREE
        </p>
        <p className="text-gray-800 font-inter font-bold text-[48px]  text-center">
          $0
        </p>
      </div>
      <div className="flex flex-col mx-9 mt-7 mb-9">
        <OutlineButton className="py-[18px]">Start for FREE</OutlineButton>
        <div className="flex flex-col gap-[12px] mt-6">
          {freePlanFeatures.available.map((data, index) => (
            <CheckText key={index}> {data}</CheckText>
          ))}
          {freePlanFeatures.notAvailable.map((data, index) => (
            <UncheckText key={index}>{data}</UncheckText>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreePriceCard;
