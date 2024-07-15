/**
 *Renders the statistics about business
 * @component
 * @param {string} children - name of the stat
 * @param {string} className - to setup the absolute positioning values
 * @param {string} data - stats value
 * @param {boolean} perDay - whether need to display the day text or not
 * @param {object} icon - icon to display
 * @returns {JSX.Element}
 * @example 
 * import total from "../assets/icons/total.png"
 * 
 * <ExploreStatsCard
      className="absolute -bottom-5 right-6"
      data={"12,500"}
      perDay={false}
      icon={total}
  >
      Total customers
  </ExploreStatsCard>

 */
function ExploreStatsCard({ children, className, data, perDay, icon }) {
  return (
    <div
      className={`flex items-center bg-white rounded-md shadow-md shadow-slate-400 px-2 py-[6px] pr-6 gap-3 ${className}`}
    >
      <img src={icon} alt={`${children} icon`} width={32} height={32} />
      <div>
        <p className="text-gray-500 text-[10px]">{children}</p>
        <p className="text-[18px] text-gray-800 font-inter font-semibold">
          {data}
          {perDay ? (
            <span className="text-[12px] text-gray-600 font-inter font-medium">
              /day
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default ExploreStatsCard;
