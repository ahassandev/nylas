import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function NylasApi() {
  const { data } = useContext(DataContext);
  const apis = data.nylasapi;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

      {apis.map((item, index) => (
        <div key={index} className="">

          
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <img 
              src={`/${item.image}`} 
              alt={item.title} 
              className="h-80 object-contain"
            />
          </div>

        
          <h3 className="mt-5 text-xl font-bold ">{item.title}</h3>

         
          <p className="mt-3 text-gray-700 text-lg leading-6 w-[90%]">
            {item.text}
          </p>

         
          <p className="mt-4 text-blue-800 font-bold cursor-pointer flex items-center gap-1">
            {item.caption} <span><img className="transition-transform duration-300 hover:translate-x-1" src="arrow.svg" alt="" /></span>
          </p>

        </div>
      ))}

    </div>
  );
}

export default NylasApi;
