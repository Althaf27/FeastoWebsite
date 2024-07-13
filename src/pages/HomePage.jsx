import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Templates from "../sections/Templates";

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
        <section>faq</section>
        <section>contact</section>
      </main>
      <footer>
        <section>feasto</section>
        <section>bottom bar</section>
      </footer>
    </>
  );
}

export default HomePage;
