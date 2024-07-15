import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

/**
 *
 * @see {@link faq} - datatype used for data
 * @param {{question : string , answer : string}} data
 * @param {boolean} action - need to expand or not
 * @param {function} handleOpen
 * @returns
 * @example
 * const const [opened, setOpened] = useState(0);
 * 
 * data=[{question: "A1",answer: "B1",},
 *      {question: "A2",answer: "B2",},
 *      ]
 *function handleOpen(index){
    index === opened ? setOpened(-1) : setOpened(index);
 }
    data.map((data,index)=>(
      <ExpandableQA data={data} action={opened === index} handleOpen={()=>handleOpen(index)}/>
      ))
    

 */
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
      <div
        className={`grid grid-rows-[0fr] transition-all ease-in-out duration-300 ${
          action ? "grid-rows-[1fr]" : ""
        }`}
      >
        {action ? (
          <div className="pb-6 overflow-hidden row-start-1 row-span-2">
            {data.answer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ExpandableQA;
