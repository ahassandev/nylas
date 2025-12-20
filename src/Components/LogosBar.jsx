import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const LogosBar = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-14">
        {data.logos.map((logo, index) => (  
          <img
            key={index}
            src={`/${logo.image}`}
            alt="Company Logo"
            className="h-8 md:h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogosBar;
