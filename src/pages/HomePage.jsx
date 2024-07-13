import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";
import FrequentQA from "../sections/FrequentQA";
import Contacts from "../sections/Contacts";
import Footer from "../sections/Footer";

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
        <section>
          <Templates />
        </section>
        <section>
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
