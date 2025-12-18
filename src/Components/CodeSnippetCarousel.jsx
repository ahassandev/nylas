import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";

const CodeSnippetCarousel = ({ codeSnippets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!codeSnippets || codeSnippets.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? codeSnippets.length - 1 : prev -  1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === codeSnippets.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">

      {/* CODE SNIPPET */}
      <CodeSnippet
        title={codeSnippets[currentIndex].title}
        snippets={codeSnippets[currentIndex].snippets}
      />

      {/* CONTROLS (BOTTOM) */}
      <div className="mt-4 flex flex-col items-center gap-4">

        {/* ARROWS */}
        <div className="flex gap-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex gap-2">
          {codeSnippets.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full cursor-pointer transition ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetCarousel;
