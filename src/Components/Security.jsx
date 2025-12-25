import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Security() {
  const { data } = useContext(DataContext); 
  const securityData = data.securityData;

  return (
    <div className='bg-gray-950'>
      <section className='px-10 py-16'>
        <h4 className="text-blue-800 font-bold text-2xl">{securityData.title}</h4>
        <h2 className="text-white text-4xl font-bold w-lg my-4">{securityData.heading}</h2>
        <p className="text-gray-400 text-xl w-lg">{securityData.text}</p>

        <div className="flex gap-6 mt-8">
          {data.securityImages.map((img, index) => (
            <img 
              key={index} 
              src={`/${img.image}`} 
              alt="icon" 
              className="w-14 h-14"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Security;
