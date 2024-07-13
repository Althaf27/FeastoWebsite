import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";
import FrequentQA from "../sections/FrequentQA";
import Contacts from "../sections/Contacts";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <section>
          <Hero />
        </section>
      </header>
      <main>
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
        <section>feasto</section>
        <section>bottom bar</section>
      </footer>

      <div className="h-96 ">a</div>
    </>
  );
}

export default HomePage;
