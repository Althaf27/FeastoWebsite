//data
import { exploreData } from "../constants/data";

//component
import ExploreCard from "./ExploreCard";

/**
 * Renders the details about the feasto
 * @see {@link ExploreCard}
 * @returns
 *
 * @example
 * <ExploreText/>
 */
function ExploreText() {
  return (
    <div className="lg:flex-1">
      <p
        className="uppercase text-[14px] text-primary-color font-medium mb-[12px] font-inter xl:text-[18px]
      "
      >
        Explore feasto
      </p>
      <h2 className="text-[36px] font-black font-inter text-gray-800 mb-[40px] xl:text-[52px]">
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
