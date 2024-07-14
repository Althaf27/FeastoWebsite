import { HashLink } from "react-router-hash-link";

function NavItem({ children, onClick, currentSelected }) {
  return (
    <div
      className={`py-[10px] px-[12px] hover:bg-red-50 cursor-pointer ${
        children === currentSelected
          ? "bg-red-50 border-l-[4px] border-primary-color md:bg-white md:border-none "
          : "pl-[16px] md:p-0"
      } md:hover:bg-white md:p-0 `}
      onClick={() => onClick(children)}
    >
      <HashLink
        to={`#${children.toLowerCase()}`}
        className={`text-base font-medium leading-6 ${
          children === currentSelected
            ? "text-primary-color"
            : "text-gray-500 md:text-gray-800"
        }
        ${children !== currentSelected ? "md:hover:text-gray-500" : ""} `}
      >
        {children}
      </HashLink>
    </div>
  );
}

export default NavItem;
