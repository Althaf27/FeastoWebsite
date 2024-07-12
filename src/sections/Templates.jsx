import TemplateCard from "../components/TemplateCard";
import { templateDetails } from "../constants/data";

function Templates() {
  return (
    <div className="pt-20 px-[16px] pb-[160px] lg:px-[60px] xl:px-[120px]">
      <div className="px-16 pb-[60px] ">
        <p className="text-center text-primary-color uppercase text-[14px] font-inter font-medium lg:text-[18px]">
          Starter templates
        </p>
        <h2 className="text-center text-gray-800 text-[36px] font-black font-inter leading-snug tracking-tight pt-[8px] lg:text-[52px] lg:tracking-normal lg:leading-normal">
          Kickstart your online stores <br className="hidden lg:block" /> with
          beautiful templates
        </h2>
      </div>
      <div className="flex flex-col gap-[60px] items-center lg:flex-row lg:items-start lg:gap-6 xl:gap-10">
        {templateDetails.map((details, index) => (
          <TemplateCard key={index} details={details} />
        ))}
      </div>
    </div>
  );
}

export default Templates;
