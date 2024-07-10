import logoFeato from "../assets/images/logofeasto.png";

export default function NavBar() {
  return (
    <section>
      <div>
        <img
          src={logoFeato}
          alt="feasto logo"
          width={110}
          className="object-contain"
        />
      </div>
    </section>
  );
}
