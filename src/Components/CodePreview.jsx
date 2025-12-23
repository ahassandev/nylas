import React, { useState, useContext } from "react";
import { DataContext } from "../DataContext";

function CodePreview() {
  const { data } = useContext(DataContext);
  const { codePreview } = data;

  const [activeLang, setActiveLang] = useState(codePreview.languages[0].id);

  const activeCode = codePreview.languages.find(
    (lang) => lang.id === activeLang
  ).code;

  return (
    <div className="bg-gray-900 p-10 rounded-2xl w-full h-[440px]  text-white">
      <div className="flex justify-between mb-4">
        <p className="text-sm text-gray-300">{codePreview.title}</p>
      </div>

      <div className="flex items-center gap-5 border-b border-gray-700 pb-4 mb-4">
        {codePreview.languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveLang(lang.id)}
            className={`flex flex-col items-center px-3 py-1 hover:text-white ${
              activeLang === lang.id ? "text-blue-400" : "text-gray-400"
            }`}
          >
            <img src={`/${lang.icon}`} className="h-10 mb-1 cursor-pointer" alt={lang.label} />
            <span className="text-lg cursor-pointer">{lang.label}</span>
          </button>
        ))}
      </div>

      <pre className="p-10 rounded-lg text-sm overflow-x-auto font-mono text-blue-200">
        {activeCode}
      </pre>

      <div className="mt-4 flex justify-end">
        <a
          href="#"
          className="text-gray-400 text-sm flex items-center gap-2 hover:text-white"
        >
          <img src="Github.svg" className="h-5" alt="GitHub" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default CodePreview;
