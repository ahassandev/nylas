import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import CodeSnippet from "../Components/CodeSnippet";

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

      <section className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold mb-10">Code Examples</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {heroData.codeSnippets?.map((item) => (
            <CodeSnippet
              key={item.id}
              title={item.title}
              snippets={item.snippets}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
