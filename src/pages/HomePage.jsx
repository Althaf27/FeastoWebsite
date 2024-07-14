import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";
import FrequentQA from "../sections/FrequentQA";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";

/**
 * Used to display when the user navigate to the root url (`/`).
 *@component
 * @returns {JSX.Element} The home page of the website
 */
function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <section className="max-container">
          <Hero />
        </section>
      </header>
      <main className="max-container">
        <section>
          <Explore />
        </section>
        <section id="templates">
          <Templates />
        </section>
        <section id="pricing">
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
