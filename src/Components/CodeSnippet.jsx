import React from "react";

const CodeSnippet = ({ title, language, code }) => {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 w-full max-w-3xl mx-auto shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="bg-gray-800 px-3 py-1 rounded text-sm">{language}</span>
      </div>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
