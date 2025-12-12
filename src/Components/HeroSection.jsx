import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const HeroSection = () => {
  const { data } = useContext(DataContext);
  const heroData = data.hero;

  return (
    <div
      className="w-full min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroData.image})` }}
    >
      <div className="container m-auto px-6 text-center">
        <h1 className="text-5xl font-bold leading-tight max-w-4xl mx-auto">
          {heroData.heading}
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-300">
          {heroData.text}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {heroData.button2.map((btn, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-semibold ${btn.style}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
