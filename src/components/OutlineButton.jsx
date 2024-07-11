function OutlineButton({ children }) {
  return (
    <button className="border border-gray-300 rounded-md  px-6 py-[14px] hidden xl:block">
      <p className="text-gray-800 font-semibold">{children}</p>
    </button>
  );
}

export default OutlineButton;
