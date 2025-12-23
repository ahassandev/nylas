import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function FeatureCard() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <div className="grid grid-cols-2 w-2xl gap-10 mt-10">
        {data.featureCard.map((item, index) => (
          <div key={index} className="">
            <img 
              src={`/${item.image}`} 
              alt={item.title} 
              className="h-9" 
            />
            <h4 className="text-2xl text-white">{item.title}</h4>
            <p className="text-xl text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>    
    </div>
  )
}

export default FeatureCard;
