import FooterCredits from "../components/FooterCredits";
import FooterLinks from "../components/FooterLinks";

/**
 * Render the footer seciton
 * @see {@link FooterLinks}
 * @see {@link FooterCredits}
 * @returns
 *
 * @example
 * <Footer/>
 */
function Footer() {
  return (
    <div className="mt-[58px] ">
      <FooterLinks />
      <FooterCredits />
    </div>
  );
}

export default Footer;
