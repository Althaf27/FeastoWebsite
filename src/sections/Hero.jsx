import BrandScroll from "../components/BrandScroll";
import HeaderText from "../components/HeaderText";
import MobileImages from "../components/MobileImages";

/**
 * Hero section of the home page reperesent the title, mobile screen images and customer branch logos
 * @see {@link HeaderText},
 * @see {@link MobileImages},
 * @see {@link BrandScroll},
 * @component
 * @returns {JSX.Element}
 * @example
 * <Hero/>
 *
 */
function Hero() {
  return (
    <div className="mt-[80px] md:mt-[104px]">
      <HeaderText />
      <MobileImages />
      <BrandScroll />
    </div>
  );
}

export default Hero;
