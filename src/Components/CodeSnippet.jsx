import React, { useState } from "react";

const CodeSnippet = ({ title, snippets }) => {

  if (!snippets || snippets.length === 0) {
    return null;
  }

  
  const [selectedLanguage, setSelectedLanguage] = useState(snippets[0].language);


  const selectedSnippet = snippets.find(
    (item) => item.language === selectedLanguage
  );


  const copyCode = () => {
    if (selectedSnippet) {
      navigator.clipboard.writeText(selectedSnippet.code);
      alert("Code copied!");
    }
  };

  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-xl w-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>


      <div className="flex gap-2 mb-6 overflow-x-auto">
        {snippets.map((item) => (
          <button
            key={item.language}
            onClick={() => setSelectedLanguage(item.language)}
            className={`px-3 py-1 text-sm rounded whitespace-nowrap ${
              selectedLanguage === item.language
                ? "bg-blue-500"
                : "bg-gray-700"
            }`}
          >
            {item.language}
          </button>
        ))}
      </div>


      {selectedSnippet && (
        <div>
          <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
            <code>{selectedSnippet.code}</code>
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
      )}
    </div>
  );
};

export default CodeSnippet;
