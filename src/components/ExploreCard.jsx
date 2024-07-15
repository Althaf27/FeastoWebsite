/**
 *Renders a features of the feasto
 @component
 * @see  {@link exploreDataObject} - (format of the passed data )
 * @param {{imgURL:object, title: string, content :title}} data
 * @returns {JSX.Element}
 *
 * @example
 * import icon from "../assets/icons/launch.svg"
 *
 * const data = {
 *  imgURL : icon,
 *  title : "Title",
 *  content: "Content",
 * }
 *
 * <ExploreCard data={data}/>
 */
function ExploreCard({ data }) {
  return (
    <div className="flex flex-col gap-[18px] mb-[24px]">
      <div className="flex flex-row gap-[16px]">
        <img src={data.imgURL} alt="icons" />
        <p className="text-gray-800 font-bold font-inter text-[20px]">
          {data.title}
        </p>
      </div>
      <p className="text-gray-600 text-[18px] font-inter">{data.content}</p>
    </div>
  );
}

export default ExploreCard;
