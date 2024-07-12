function ExploreStatsCard({ children, className, data, perDay, icon }) {
  return (
    <div
      className={`flex items-center bg-white rounded-md shadow-md shadow-slate-500 px-2 py-[6px] pr-6 gap-3 ${className}`}
    >
      <img src={icon} alt={`${children} icon`} width={32} height={32} />
      <div>
        <p className="text-gray-500 text-[10px]">{children}</p>
        <p className="text-[18px] text-gray-800 font-inter font-semibold">
          {data}
          {perDay ? (
            <spam className="text-[12px] text-gray-600 font-inter font-medium">
              /day
            </spam>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default ExploreStatsCard;
