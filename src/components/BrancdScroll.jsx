import { useEffect, useState } from "react";
import { brandLogos } from "../assets/images/customerLogos";
import { useRef } from "react";

/**
 * Horizontally scrolling custom logo component
 * @component
 * @returns
 *
 * @example
 * <BrancdScroll/>
 *
 */
function BrancdScroll() {
  return (
    <div className="max-w-[1440px]  overflow-hidden flex ">
      <div className="flex space-x-16 animate-loop-scroll    overflow-hidden">
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
      <div className="flex space-x-16 animate-loop-scroll   " aria-hidden>
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

export default BrancdScroll;
