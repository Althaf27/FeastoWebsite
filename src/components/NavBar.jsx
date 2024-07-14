import logoFeato from "../assets/images/logofeasto.png";
import menu from "../assets/icons/menu.png";
import menuX from "../assets/icons/menuX.png";
import Button from "./Button";
import NavItem from "./NavItem";
import { useState } from "react";
import OutlineButton from "./OutlineButton";

/**
 * Used to display a responsive navigation bar which is fixed on top
 * @component
 * @returns {JSX.Element} The navigation bar
 */
export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  /**
   * when click on a navigation link it changes the openNav state which is used for make the navigation as a toggle
   */
  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  /**
   * Used to change  the clicked item from the navigation list
   * @param {number}  item - to find which element was clicked from the navigation list
   */
  const handleSetSelected = (item) => {
    setSelectedItem(item);
  };

  /**
   * funtion for handle the sign up button click
   */
  const handleSignUp = () => {
    console.log("need to implemnt");
  };
  return (
    <section className="border-b border-gray-200 shadow-md fixed left-0 right-0 top-0 bg-white z-50">
      <div className="flex px-[16px] h-[80px]  justify-between items-center  md:h-[104px]  lg:px-[60px] xl:px-[120px] max-container">
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
              openNav ? "h-auto opacity-100 shadow-md" : "h-0 opacity-0"
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
          <OutlineButton className="hidden xl:block px-6 py-[14px]">
            Get a demo
          </OutlineButton>
          <Button
            className="py-[9px] px-[17px] md:py-[14px] md:px-[25px]"
            handleClick={handleSignUp}
          >
            Sign up for free
          </Button>
        </div>
      </div>
    </section>
  );
}
