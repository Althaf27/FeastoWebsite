import checkMarkGray from "../assets/icons/checkMarkGray.svg";

function UncheckText({ children }) {
  return (
    <div className="flex gap-3">
      <img src={checkMarkGray} alt="un check mark" />
      <p className="font-inter text-[16px] text-gray-400">{children}</p>
    </div>
  );
}

export default UncheckText;
