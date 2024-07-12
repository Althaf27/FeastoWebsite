import { exploreData } from "../constants/data";
import ExploreCard from "./ExploreCard";

function ExploreText() {
  return (
    <div className="lg:flex-1">
      <p
        className="uppercase text-[14px] text-primary-color font-medium pb-[12px] font-inter xl:text-[18px]
      "
      >
        Explore feasto
      </p>
      <h2 className="text-[36px] font-black font-inter text-gray-800 pb-[40px] xl:text-[52px]">
        How <span className="uppercase text-primary-color">Feasto</span> help
        your business grow?
      </h2>
      <div>
        {exploreData.map((data, index) => (
          <ExploreCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ExploreText;
