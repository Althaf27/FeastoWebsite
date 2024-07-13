import { useState } from "react";
import ExpandableQA from "../components/ExpandableQA";
import { faqData } from "../constants/data";

function FrequentQA() {
  const [opened, setOpened] = useState(0);

  function handleOpen(index) {
    index === opened ? setOpened(-1) : setOpened(index);
  }
  return (
    <div className="mt-[110px] px-4 lg:px-[60px] xl:px-[120px]">
      <div>
        <p className="uppercase font-inter text-primary-color font-medium text-[14px] text-center lg:text-[18px]">
          Frequently asked questions
        </p>
        <h2 className="text-center font-inter font-black text-[36px] mt-2 px-5 lg:text-[52px]">
          All you need to know <br className="hidden md:block" /> about{" "}
          <span className="text-primary-color">FEASTO</span>
        </h2>
      </div>
      <div className="gap-2 border border-gray-300 rounded-lg mt-[60px]">
        {faqData.map((data, index) => (
          <ExpandableQA
            data={data}
            key={index}
            action={index === opened}
            handleOpen={() => {
              handleOpen(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentQA;
