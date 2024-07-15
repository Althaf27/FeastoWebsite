import { Link } from "react-router-dom";

/**
 * Display the template card
 * @see {@link templateDetail} - (datatype of details)
 * @param {{imgURL:object, title: string, content: string, url: string}} <details></details>
 * @returns
 * @example
 * const details = {
 * imgURL : ,
 * title: "Template title",
 * content: "Template content"
 * url:"/template/grocery"
 * }
 *
 * <TemplateCard details={details}/>
 */
function TemplateCard({ details }) {
  return (
    <div className="flex flex-col max-w-[500px]">
      <img src={details.imgURL} alt={`${details.title} image`} />
      <div className="mt-8">
        <h3 className="text-gray-700 text-[20px] font-inter font-bold mb-3">
          {details.title}
        </h3>
        <p className="text-gray-600 text-[18px] font-inter mb-6">
          {details.content}
        </p>
        <Link
          to={details.url}
          className="text-primary-color font-inter font-semibold text-[16px]"
        >
          Get started now
        </Link>
      </div>
    </div>
  );
}

export default TemplateCard;
