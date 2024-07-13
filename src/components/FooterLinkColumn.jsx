import { Link } from "react-router-dom";

function FooterLinkColumn({ data, title }) {
  return (
    <div>
      <h3 className="font-inter font-semibold text-gray-800 text-[20px]">
        {title}
      </h3>

      <div className="flex flex-col gap-4 mt-8">
        {data.map((data, index) => (
          <Link
            to={data.link}
            key={index}
            className="font-inter text-gray-800 text-[16px]"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkColumn;
