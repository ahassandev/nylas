import React, { useState } from "react";

const CodeSnippet = ({ title, snippets }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ safety check
  if (!snippets || snippets.length === 0) {
    return null;
  }

  const activeSnippet = snippets[activeIndex];

  const copyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    alert("Code copied!");
  };

  return (
    <div className="bg-[#0f172a] text-white p-4 rounded-xl w-full">
      <h3 className="mb-3 font-semibold">{title}</h3>

      <div className="flex gap-2 mb-3 flex-wrap">
        {snippets.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1 text-sm rounded ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-700"
            }`}
          >
            {item.language}
          </button>
        ))}
      </div>

      <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
        <code>{activeSnippet.code}</code>
      </pre>

      <div className="text-right mt-3">
        <button
          onClick={copyCode}
          className="bg-blue-500 px-4 py-1 rounded text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CodeSnippet;
