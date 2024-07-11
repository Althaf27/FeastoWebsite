function Button({ children }) {
  return (
    <button className="font-medium text-white bg-primary-color py-[9px] px-[17px] rounded-md md:py-[14px] md:px-[25px]">
      {children}
    </button>
  );
}

export default Button;
