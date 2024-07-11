function Button({ children, className }) {
  return (
    <button
      className={`font-medium text-white bg-primary-color  rounded-md font-inter   ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
