import { FaHeart } from "react-icons/fa";

/**
 * copyright section
 * @component
 * @returns {JSX.Element}
 * @example
 * <FooterCredits/>
 */
function FooterCredits() {
  return (
    <div className="bg-primary-color">
      <div className="max-container py-5">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:px-[60px] xl:px-[120px]">
          <p className="text-white font-inter text-[16px] ">
            Designed & Developed with{" "}
            <FaHeart color="white" className="inline" /> by{" "}
            <a
              href="https://www.cogntix.com/"
              className="underline underline-offset-2 "
            >
              Cogntix
            </a>
          </p>
          <p className="text-white font-inter text-[16px] ">
            &copy; 2022 Feasto. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterCredits;
