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
      {/* 🔹 Dark overlay like Nylas */}
      <div className="min-h-screen bg-black/70">

        {/* 🔹 Content */}
        <div className="container mx-auto px-6 pt-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            {heroData.heading}
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
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

          {/* 🔹 Code Snippet inside SAME hero */}
          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-3xl">
              {heroData.codeSnippets?.map((item) => (
                <CodeSnippet
                  key={item.id}
                  title={item.title}
                  snippets={item.snippets}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
