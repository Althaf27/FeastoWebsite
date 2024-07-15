import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPlan, setPlan } from "../slices/toggleSlice";

/**
* Render a button which change the state in the redux data store to either monthly or annually
* @component
* @returns  {JSX.Element}
* @example
 <ToggleButton/>
 */
function ToggleButton() {
  const plan = useSelector(selectPlan);
  const dispatch = useDispatch();
  const select = plan === "annually";

  const handleClick = () => {
    dispatch(setPlan());
  };
  return (
    <div className="flex items-center gap-4 transition-all ">
      <p
        className={`font-inter text-[16px] font-semibold ${
          !select ? "text-[#0F172A]" : "text-gray-400"
        } transition-all`}
      >
        Monthly
      </p>
      <div
        className={`transition-all delay-100 ease-in-out w-[60px] h-[35px] rounded-full  px-[6px] flex items-center cursor-pointer  ${
          select ? "justify-end bg-primary-color" : "justify-start bg-[#E5EAF1]"
        }`}
        onClick={handleClick}
      >
        <div
          className={`transition-all delay-100 ease-in-out w-[25px] h-[25px] rounded-full  ${
            select ? "bg-[#E5EAF1]" : "bg-white shadow-slate-400"
          } shadow-lg `}
        ></div>
      </div>
      <p
        className={`font-inter text-[16px] font-semibold ${
          select ? "text-[#0F172A]" : "text-gray-400"
        } transition-all`}
      >
        Annually
      </p>
    </div>
  );
}

export default ToggleButton;
