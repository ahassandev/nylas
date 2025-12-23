import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function FeatureCard() {
  const { data } = useContext(DataContext);
  const featureCards = data.featureCard;

  return (
    <div className="grid grid-cols-2 gap-6 w-full pr-10">
      {featureCards.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <img src={`/${item.image}`} alt="icon" className="h-10 w-10" />

          <div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCard;
