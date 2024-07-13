import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";
import FrequentQA from "../sections/FrequentQA";

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
        <section>contact</section>
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
