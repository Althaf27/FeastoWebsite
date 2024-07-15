import { brandLogos } from "../assets/images/customerLogos";

/**
 * Horizontally scrolling for custom logo
 * @component
 * @returns {JSX.Element}
 *
 * @example
 * <BrandScroll/>
 *
 */
function BrandScroll() {
  return (
    <div className="max-w-[1440px]  overflow-hidden flex group">
      <div className="flex space-x-16 animate-loop-scroll    overflow-hidden group-hover:paused">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand logos"
            width={80}
            height={80}
          />
        ))}
      </div>
      <div
        className="flex space-x-16 animate-loop-scroll   group-hover:paused"
        aria-hidden
      >
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand logos"
            width={80}
            height={80}
          />
        ))}
      </div>
    </div>
  );
}

export default BrandScroll;
