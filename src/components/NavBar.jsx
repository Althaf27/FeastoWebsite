import logoFeato from "../assets/images/logofeasto.png";

export default function NavBar() {
  return (
    <section>
      <div className="flex px-[16px] h-[80px] border justify-between items-center">
        <div>
          <img
            src={logoFeato}
            alt="feasto logo"
            width={110}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
