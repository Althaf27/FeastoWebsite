import { useEffect } from "react";
import { brandLogos } from "../assets/images/customerLogos";
import { useRef } from "react";

function BrancdScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className="overflow-hidden ">
      <div ref={scrollRef} className="flex gap-9  space-x-4 animate-scroll">
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt="brand logos" />
        ))}
      </div>
    </div>
  );
}

export default BrancdScroll;
