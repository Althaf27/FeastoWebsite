import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

function ExpandableQA({ data, action, handleOpen }) {
  return (
    <div className=" px-4 border-b ">
      <div
        onClick={handleOpen}
        className="flex py-6  items-center justify-between cursor-pointer"
      >
        <p className="font-inter font-semibold text-[20px] text-gray-800">
          {data.question}
        </p>
        <p className="text-2xl">{action ? <FiMinus /> : <GoPlus />}</p>
      </div>
      {action ? <div className="pb-6">{data.answer}</div> : null}
    </div>
  );
}

export default ExpandableQA;
