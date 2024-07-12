import { Link } from "react-router-dom";

function TemplateCard({ details }) {
  return (
    <div className="flex flex-col max-w-[500px]">
      <img src={details.imgURL} alt="" />
      <div className="pt-8">
        <h3 className="text-gray-700 text-[20px] font-inter font-bold pb-3">
          {details.title}
        </h3>
        <p className="text-gray-600 text-[18px] font-inter pb-6">
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

// imgURL: restaurant,
//     title: "Restaurants & Food Businesses",
//     content:
