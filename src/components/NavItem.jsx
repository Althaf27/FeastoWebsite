import { useDispatch } from "react-redux";
import { setNavigation } from "../slices/navigationSlice";
/**
 * To display the navigation items with the styles for click on a item
 * @component
 * @param {string} children - Navigation item text
 * @param {Function} onClick - function should change the selected item this will execute by passing the item's text value
 * @param {string} currentSelected -current selected navigation item
 * @returns {JSX.Element}
 * @example
 * const [selectedItem,setSelectedItem] = useState("");
 *
 * const handleClick = (item)=>{
 *  setSelectedItem(item);
 * }
 *
 *<NavItem onClick={handleClick} currentSelected={selectedItem}>Resources</NavItem>
 */
function NavItem({ children, onClick, currentSelected }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setNavigation(children.toLowerCase()));
  };
  return (
    <div
      className={`py-[10px] px-[12px] hover:bg-red-50 cursor-pointer ${
        children === currentSelected
          ? "bg-red-50 border-l-[4px] border-primary-color md:bg-white md:border-none "
          : "pl-[16px] md:p-0"
      } md:hover:bg-white md:p-0 `}
      onClick={() => onClick(children)}
    >
      <div
        onClick={handleClick}
        className={`text-base font-medium leading-6 ${
          children === currentSelected
            ? "text-primary-color"
            : "text-gray-500 md:text-gray-800"
        }
        ${children !== currentSelected ? "md:hover:text-gray-500" : ""} `}
      >
        {children}
      </div>
    </div>
  );
}

export default NavItem;
