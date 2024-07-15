import TemplateCard from "../components/TemplateCard";

//data
import { templateDetails } from "../constants/data";

/**
 * Renders the section for display the starter templates
 * @component
 * @see {@link TemplateCard}
 * @returns {JSX.Element}
 * @example
 * <Templates/>
 */
function Templates() {
  return (
    <div className="mt-20 mx-[16px] mb-[160px] lg:mx-[60px] xl:mx-[120px]">
      <div className="mx-16 mb-[60px] ">
        <p className="text-center text-primary-color uppercase text-[14px] font-inter font-medium lg:text-[18px]">
          Starter templates
        </p>
        <h2 className="text-center text-gray-800 text-[36px] font-black font-inter leading-snug tracking-tight mt-[8px] lg:text-[52px] lg:tracking-normal lg:leading-normal">
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
