import ExploreImage from "../components/ExploreImage";
import ExploreText from "../components/ExploreText";

function Explore() {
  return (
    <div className="flex flex-col px-[16px] lg:flex-row-reverse lg:px-[60px] xl:px-[120px] lg:gap-14 max-container pt-[100px] xl:pt-[180px]">
      <ExploreText />
      <ExploreImage />
    </div>
  );
}

export default Explore;
