import logoFeato from "../assets/images/logofeasto.png";
import menu from "../assets/icons/menu.png";
import menuX from "../assets/icons/menuX.png";
import Button from "./Button";
import NavItem from "./NavItem";
import { useState } from "react";
import OutlineButton from "./OutlineButton";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  console.log(selectedItem);
  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  const handleSetSelected = (item) => {
    setSelectedItem(item);
  };
  return (
    <section>
      <div className="flex px-[16px] h-[80px]  justify-between items-center shadow-md relative border-b border-gray-200 md:h-[104px]  lg:px-[60px] xl:px-[120px]">
        <div className="flex flex-row items-center gap-[6px] lg:gap-[45px] md:gap-6 xl:gap-16">
          <img
            className="cursor-pointer md:hidden"
            src={openNav ? menuX : menu}
            onClick={handleOpenNav}
          />
          <img
            src={logoFeato}
            alt="feasto logo"
            className="object-contain w-[110px] lg:w-[170px]"
          />
          <nav
            className={`absolute top-[80px] left-0 right-0 bg-white pt-[8px] pb-[16px] ${
              openNav ? "h-auto" : "h-0"
            } overflow-hidden transition duration-5000 max-h-[500px] ease-in-out  md:static md:h-auto`}
          >
            <ul
              className={`flex flex-col md:flex-row ${
                openNav ? "h-auto" : "h-0"
              } overflow-hidden md:h-auto lg:gap-[40px] md:gap-5`}
            >
              <li>
                <NavItem
                  onClick={handleSetSelected}
                  currentSelected={selectedItem}
                >
                  Features
                </NavItem>
              </li>
              <li>
                <NavItem
                  onClick={handleSetSelected}
                  currentSelected={selectedItem}
                >
                  Pricing
                </NavItem>
              </li>
              <li>
                <NavItem
                  onClick={handleSetSelected}
                  currentSelected={selectedItem}
                >
                  Templates
                </NavItem>
              </li>
              <li>
                <NavItem
                  onClick={handleSetSelected}
                  currentSelected={selectedItem}
                >
                  Resources
                </NavItem>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row gap-4">
          <OutlineButton>Get a demo</OutlineButton>
          <Button>Sign up for free</Button>
        </div>
      </div>
    </section>
  );
}
