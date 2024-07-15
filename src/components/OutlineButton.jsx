/**
 * Secondary Button with a border
 * @component
 * @param {string} children - content of the button
 * @param {string} className - to set additional styles like padding
 * @param {Function} handleClick - to handle the click
 * @returns {JSX.Element}
 */
function OutlineButton({ children, className, handleClick }) {
  return (
    <button
      className={`border border-gray-300 rounded-md  shadow-md transition-all ease-in-out hover:shadow-lg  ${className}`}
      onClick={handleClick}
    >
      <p className="text-gray-800 font-semibold font-inter">{children}</p>
    </button>
  );
}

export default OutlineButton;
