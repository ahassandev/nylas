import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const LogosBar = () => {
  const { data } = useContext(DataContext);
  const logos = data.logos;

  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-10 px-6 flex-wrap md:flex-nowrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={`/${logo.image}`}
            alt="Company logo"
            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogosBar;
