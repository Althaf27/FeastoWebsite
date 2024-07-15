import checkMarkRed from "../assets/icons/checkMarkRed.svg";

/**
 * Represent a text with red color tick
 * @param {string} children -data to be shown as a feature
 * @returns
 * @example
 * <CheckText>Unlimited orders</CheckText>
 */
function CheckText({ children }) {
  return (
    <div className="flex gap-3">
      <img src={checkMarkRed} alt="check mark" />
      <p className="text-[#0F172A] font-inter text-[16px]">{children}</p>
    </div>
  );
}

export default CheckText;
