import Button from "../components/Button";
import CheckText from "./CheckText";
import UncheckText from "./UncheckText";
import { useSelector } from "react-redux";
import { selectPlan } from "../slices/toggleSlice";

import { proPlanFeatures } from "../constants/data";

function ProPriceCard() {
  const plan = useSelector(selectPlan);

  return (
    <div className="rounded-xl border-[2px] border-primary-color overflow-hidden shadow-lg shadow-slate-400 max-w-[450px]">
      {plan === "annually" ? (
        <div className="bg-primary-color py-2 m-0">
          <p className="text-center text-white font-inter font-semibold text-[18px]">
            Save 25%
          </p>
        </div>
      ) : null}

      <div className="flex flex-col items-center pt-9 pb-7">
        <p className="font-inter font-semibold text-[18px] text-primary-color pb-5">
          PRO - {plan === "annually" ? "Annual" : "Monthly"} plan
        </p>
        {plan === "annually" ? (
          <p className="font-inter font-semibold text-[24px] text-gray-400 line-through">
            $9.99
          </p>
        ) : null}

        <p className="font-inter font-bold text-[48px] text-gray-800 my-1">
          {plan === "annually" ? " $7.5" : "$9.99"}
        </p>
        <p className="font-inter text-[16px] text-[#606571] ">
          {plan === "annually" ? "Monthly, Billed annually" : "Billed monthly"}
        </p>
      </div>
      <div className="flex flex-col px-9 pb-9 gap-6">
        <Button className="py-[18px]">Get 14 days free trail</Button>
        <div className="flex flex-col gap-[12px]">
          {proPlanFeatures.available.map((data, index) => (
            <CheckText key={index}>{data}</CheckText>
          ))}

          {/* currently there is no unavailable features for pro plans but i am using in here  */}
          {proPlanFeatures.notAvailable.map((data, index) => (
            <UncheckText key={index}>{data}</UncheckText>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProPriceCard;
