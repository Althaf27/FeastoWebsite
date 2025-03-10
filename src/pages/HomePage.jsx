import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";
import FrequentQA from "../sections/FrequentQA";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";
import { selectNavigationItem } from "../slices/navigationSlice";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setNavigation } from "../slices/navigationSlice";

/**
 * Used to display when the user navigate to the root url (`/`).
 *@component
 * @returns {JSX.Element} The home page of the website
 * @example
 * <HomePage/>
 */
function HomePage() {
  const dispatch = useDispatch();
  const navigationItem = useSelector(selectNavigationItem);
  // console.log(navigationItem);

  const pricingRef = useRef(null);
  const templateRef = useRef(null);
  const heroRef = useRef(null);

  //based on the redux value scroll to the section
  if (navigationItem === "pricing" && pricingRef.current) {
    const offsetTop = pricingRef.current.offsetTop - 130;
    // console.log(pricingRef.current.offsetTop);
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    dispatch(setNavigation(""));
  }
  if (navigationItem === "templates" && templateRef.current) {
    const offsetTop = templateRef.current.offsetTop - 130;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    dispatch(setNavigation(""));
  }

  if (navigationItem === "home" && heroRef.current) {
    const offsetTop = heroRef.current.offsetTop - 130;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    dispatch(setNavigation(""));
  }

  //need to implement for the other navigation items after implement the sections for that

  return (
    <>
      <header>
        <NavBar />
        <section className="max-container" ref={heroRef}>
          <Hero />
        </section>
      </header>
      <main className="max-container">
        <section>
          <Explore />
        </section>
        <section ref={templateRef}>
          <Templates />
        </section>
        <section ref={pricingRef}>
          <Pricing />
        </section>
        <section>
          <FrequentQA />
        </section>
        <section>
          <Contacts />
        </section>
      </main>
      <footer>
        <section>
          <Footer />
        </section>
      </footer>
    </>
  );
}

export default HomePage;
