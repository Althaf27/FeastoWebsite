import screen1 from "../assets/images/screen1.png";
import screen2 from "../assets/images/screen2.png";
import screen3 from "../assets/images/screen3.png";
import screen4 from "../assets/images/screen4.png";

/**
 * Renders four mobile screen images horizontally
 * @component
 * @returns {JSX.Element}
 * @example
 * <MobileImages/>
 */
function MobileImages() {
  return (
    <div className="grid grid-cols-4 gap-1 mx-4 my-14 place-items-center lg:mx-[60px] xl:mx-[120px] lg:my-[60px] xl:my-[80px] xl:mb-[100px]">
      <img src={screen1} alt="mobile screen" />
      <img src={screen2} alt="mobile screen" />
      <img src={screen3} alt="mobile screen" />
      <img src={screen4} alt="mobile screen" />
    </div>
  );
}

export default MobileImages;
