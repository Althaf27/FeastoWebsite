import screen1 from "../assets/images/screen1.png";
import screen2 from "../assets/images/screen2.png";
import screen3 from "../assets/images/screen3.png";
import screen4 from "../assets/images/screen4.png";
function MobileImages() {
  return (
    <div className="grid grid-cols-4 gap-1 px-4 py-14 place-items-center lg:px-[60px] xl:px-[120px] lg:py-[60px] xl:py-[80px] xl:pb-[100px]">
      <img src={screen1} alt="mobile screen" />
      <img src={screen2} alt="mobile screen" />
      <img src={screen3} alt="mobile screen" />
      <img src={screen4} alt="mobile screen" />
    </div>
  );
}

export default MobileImages;
