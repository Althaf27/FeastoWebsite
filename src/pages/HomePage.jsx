import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <section>Hero page</section>
      </header>
      <main>
        <section>expore feasto</section>
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
