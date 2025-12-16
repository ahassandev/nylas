import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import CodeSnippet from "../Components/CodeSnippet";

const HeroSection = () => {
  const { data } = useContext(DataContext);
  const heroData = data.hero;

  return (
    <div
      className="w-full min-h-screen text-white bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url(${heroData.image})`,
        backgroundSize: "cover",
      }}
    >
      
      <div className="min-h-screen bg-black/70 flex flex-col justify-center items-center text-center px-6">
        
        
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
          {heroData.heading}
        </h1>

        
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          {heroData.text}
        </p>


        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {heroData.button2.map((btn, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-semibold transition ${btn.style}`}
            >
              {btn.text}
            </button>
          ))}
        </div>


        {heroData.codeSnippets?.length > 0 && (
          <div className="mt-16 w-full max-w-3xl text-start">
            {heroData.codeSnippets.map((item) => (
              <CodeSnippet
                key={item.id}
                title={item.title}
                snippets={item.snippets}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default HeroSection;
