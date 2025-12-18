import React, { useState } from "react";

const CodeSnippet = ({ title, snippets }) => {

  if (!snippets || snippets.length === 0) return null;

  const [activeLanguage, setActiveLanguage] = useState(snippets[0].language);

  const currentSnippet = snippets.find(
    (s) => s.language === activeLanguage
  );

  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1b1f26] to-[#0f172a] shadow-xl">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <h3 className="text-white font-semibold text-lg">
          {title}
        </h3>

        <select
          className="bg-[#111827] text-white px-3 py-1 rounded-md border border-white/20"
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

      {/* CODE */}
      <pre className="px-6 py-5 text-sm overflow-x-auto bg-[#0b1220] text-gray-200">
        <code>{currentSnippet.code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
