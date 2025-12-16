import React, { useState } from "react";

const CodeSnippet = ({ title, snippets }) => {
  // Safety check
  if (!snippets || snippets.length === 0) {
    return null;
  }

  const [activeLanguage, setActiveLanguage] = useState(snippets[0].language);

  const currentSnippet = snippets.find(
    (s) => s.language === activeLanguage
  );

  const copyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    alert("Code copied!");
  };

  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Language selector */}
        <select
          className="bg-gray-800 px-3 py-1 rounded"
          value={activeLanguage}
          onChange={(e) => setActiveLanguage(e.target.value)}
        >
          {snippets.map((s) => (
            <option key={s.language} value={s.language}>
              {s.language}
            </option>
          ))}
        </select>
      </div>

      {/* Code */}
      <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
        <code>{currentSnippet.code}</code>
      </pre>

      {/* Copy */}
      <div className="text-right mt-3">
        <button
          onClick={copyCode}
          className="bg-gray-700 hover:bg-blue-500 px-4 py-1 rounded"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CodeSnippet;
