function OutlineButton({ children, className }) {
  return (
    <button className={`border border-gray-300 rounded-md    ${className}`}>
      <p className="text-gray-800 font-semibold font-inter">{children}</p>
    </button>
  );
}

export default OutlineButton;
