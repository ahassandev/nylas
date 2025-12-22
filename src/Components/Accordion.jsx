import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Accordion = () => {
  const { data } = useContext(DataContext);
  const { heading, accordianList } = data.accordianData;

  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-28 px-10 pb-20">
      <h2 className="text-4xl font-semibold mb-6 text-center">{heading}</h2>
      <div className="flex flex-col lg:flex-row gap-10 mt-8">
       
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full space-y-4">
            {accordianList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-100"
                  onClick={() => handleToggle(index)}
                >
                  <span className="font-semibold text-lg">{item.title}</span>
                  <span className="text-gray-500 text-xl">
                    {activeIndex === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </span>
                </button>


                {activeIndex === index && (
                  <div className="px-6 py-4 text-gray-700">
                    <p className="mb-3">{item.text}</p>
                    <p className="text-blue-800 font-bold cursor-pointer flex items-center gap-1">
                      {item.caption}{" "}
                      <img
                        className="w-4 h-4 transition-transform duration-300 hover:translate-x-1"
                        src="/arrow.svg"
                        alt=""
                      />
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={`/${accordianList[activeIndex].image}`}
            alt={accordianList[activeIndex].title}
            className="max-w-full max-h-96 rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
