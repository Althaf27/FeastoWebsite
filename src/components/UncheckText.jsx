import checkMarkGray from "../assets/icons/checkMarkGray.svg";

/**
 * Represent a text with gray color
 * @param {string} children data to be shown
 * @returns
 * @example
 * <UncheckText>Custom domain</UncheckText>
 */
function UncheckText({ children }) {
  return (
    <div className="flex gap-3">
      <img src={checkMarkGray} alt="un check mark" />
      <p className="font-inter text-[16px] text-gray-400">{children}</p>
    </div>
  );
}

export default UncheckText;
