import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CodeSnippetCarousel = ({ codeSnippets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!codeSnippets || codeSnippets.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? codeSnippets.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === codeSnippets.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative">

      {/* SLIDER */}
      <CodeSnippet
        title={codeSnippets[currentIndex].title}
        snippets={codeSnippets[currentIndex].snippets}
      />

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
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
  );
};

export default CodeSnippetCarousel;
