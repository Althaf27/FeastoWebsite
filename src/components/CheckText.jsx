import checkMarkRed from "../assets/icons/checkMarkRed.svg";

function CheckText({ children }) {
  return (
    <div className="flex gap-3">
      <img src={checkMarkRed} alt="check mark" />
      <p className="text-[#0F172A] font-inter text-[16px]">{children}</p>
    </div>
  );
}

export default CheckText;
