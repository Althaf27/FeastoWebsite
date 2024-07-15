/**
 * Primary Button with the background set to red color
 * @component
 * @param {string} children - content to display in the button
 * @param {string} className - additional styles for set the paddings
 * @param {function} handleClick - handle the behaviour of the button click
 * @returns {JSX.Element} The primary Button
 * @example
 * //Render the button with text sign up for free
 * const handleSignUp = () =>{
 *  //implement the behaviour
 * }
 * <Button className="py-2" handleClick={handleSignUp}>sign up for free</Button>
 */
function Button({ children, className, handleClick }) {
  return (
    <button
      className={`font-medium text-white bg-primary-color  rounded-md font-inter  shadow-md hover:shadow-lg transition-all ease-in-out  ${className} hover:bg-opacity-90`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
