//icons
import feasto from "../assets/images/logofeasto.png";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import whatsapp from "../assets/icons/whatsApp.svg";

import FooterLinkColumn from "./FooterLinkColumn";

//data
import { dataForFooter } from "../constants/data";

/**
 * Render the links footer
 * @returns
 * @example
 * <FooterLinks/>
 */
function FooterLinks() {
  return (
    <div className="border-t border-[#E5E7EB]">
      <div className="flex flex-col px-4  pt-[60px] pb-[80px] lg:px-[60px] xl:px-[120px]  xl:flex-row xl:gap-10 xl:items-start max-container">
        <div>
          <img
            src={feasto}
            alt="feasto company logo"
            className="w-[170px] h-auto"
          />
          <p className="font-inter text-[18px] text-gray-600 mt-8 max-w-[550px]">
            Feasto simplifies creating a stunning, professional web store with
            its user-friendly templates and quick setup.
          </p>
          <div className="flex gap-3 mt-8">
            <img
              src={linkedin}
              alt="linkedin"
              className="cursor-pointer hover:opacity-70 transition-all duration-200"
            />
            <img
              src={facebook}
              alt="facebook"
              className="cursor-pointer hover:opacity-85 transition-all duration-200"
            />
            <img
              src={instagram}
              alt="instagram"
              className="cursor-pointer hover:opacity-70 transition-all duration-200"
            />
            <img
              src={whatsapp}
              alt="whatsapp"
              className="cursor-pointer hover:opacity-70 transition-all duration-200"
            />
          </div>
        </div>
        <div className="mt-[60px] grid grid-cols-2 grid-rows-2 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:gap-5 xl:mt-0">
          <FooterLinkColumn data={dataForFooter.company} title="Company" />
          <FooterLinkColumn data={dataForFooter.templates} title="Templatees" />

          <FooterLinkColumn data={dataForFooter.resources} title="Resources" />
          <FooterLinkColumn data={dataForFooter.features} title="Features" />
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
