import ExploreImage from "../components/ExploreImage";
import ExploreText from "../components/ExploreText";

/**
 * section for include content about explore feasto
 *
 *
 * @see {@link ExploreImage}
 * @see {@link ExploreText}
 * @component
 * @returns  {JSX.Element}
 *
 * @example
 * <Explore/>
 */
function Explore() {
  return (
    <div className="flex flex-col mx-[16px] lg:flex-row-reverse lg:mx-[60px] xl:mx-[120px] lg:gap-14 max-container mt-[100px] xl:mt-[180px]">
      <ExploreText />
      <ExploreImage />
    </div>
  );
}

export default Explore;
