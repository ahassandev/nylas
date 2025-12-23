import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import FeatureCard from "../Components/FeatureCard";
import CodePreview from "./CodePreview";


function Developers() {
  const { data } = useContext(DataContext);
  const developersData = data.developersData;

  return (
    <>
      <section className='bg-gray-950 px-10 py-16'>
        <h3 className="text-xl text-sky-600 font-bold">{developersData.title}</h3>
        <h2 className="font-bold text-4xl w-xl text-white my-6">{developersData.heading}</h2>
        <p className="text-lg text-gray-400 w-xl">{developersData.text}</p>
        <div className="grid grid-cols-2 gap-10">
        <FeatureCard />
        <CodePreview />
        </div>
      </section>
    </>
  );
}

export default Developers;
