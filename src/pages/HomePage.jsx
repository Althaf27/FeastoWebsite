import NavBar from "../components/NavBar";
import Explore from "../sections/Explore";
import Hero from "../sections/Hero";

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
        <section>kickstart</section>
        <section>price</section>
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
