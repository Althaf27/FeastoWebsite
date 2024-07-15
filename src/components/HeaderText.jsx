import line from "../assets/icons/line.svg";
import Button from "./Button";
import OutlineButton from "./OutlineButton";

/**
 * Display the title and action buttons in the header
 * @see {@link Button} 
 * @see {@link OutlineButton} 
 * @component
 * 
 *@example 
 <HeaderText/>
 */
function HeaderText() {
  return (
    <div className="pt-20 flex flex-col items-center">
      <p className="text-primary-color text-sm font-medium font-inter lg:text-lg">
        Seamless Setup, Quick, Easy and No-Code
      </p>
      <h1 className="text-gray-800 font-black text-[36px] leading-[140%] text-center tracking-[0] pt-3 pb-10 font-inter lg:text-[60px]">
        Build Website for <br className="sm:hidden" /> your{" "}
        <br className="hidden sm:block" /> Business <br className="sm:hidden" />{" "}
        within{" "}
        <span className="relative">
          3 Minutes
          <img
            src={line}
            alt="red line"
            className="absolute -bottom-5 -right-2 lg:bottom-1 lg:-z-10"
          />
        </span>
      </h1>
      <div className="flex flex-col w-full px-4 gap-4 sm:flex-row sm:justify-center">
        <Button className="py-4 sm:px-10">Build your website now</Button>
        <OutlineButton className="py-4 sm:px-6">Get a demo</OutlineButton>
      </div>
    </div>
  );
}

export default HeaderText;
