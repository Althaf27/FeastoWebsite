import BrancdScroll from "../components/BrancdScroll";
import HeaderText from "../components/HeaderText";
import MobileImages from "../components/MobileImages";

/**
 * Hero section of the home page reperesent the title, mobile screen images and customer branch logos
 * @see {@link HeaderText},
 * @see {@link MobileImages},
 * @see {@link BrancdScroll},
 * @component
 * @example
 * <Hero/>
 *
 */
function Hero() {
  return (
    <div className="mt-[80px] md:mt-[104px]">
      <HeaderText />
      <MobileImages />
      <BrancdScroll />
    </div>
  );
}

export default Hero;
