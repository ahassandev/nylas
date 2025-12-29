import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function Security() {
  const { data } = useContext(DataContext);
  const securityData = data.securityData;
  const securityRightImage = data.securityRightImage;
  const { securityServices } = data;

  return (
    <div className="bg-gray-950 ">
      <section className="px-10 py-16 flex justify-between items-center">
        <div>
          <h4 className="text-blue-800 font-bold text-2xl">
            {securityData.title}
          </h4>
          <h2 className="text-white text-4xl font-bold w-lg my-4">
            {securityData.heading}
          </h2>
          <p className="text-gray-400 text-xl w-lg">{securityData.text}</p>

          <div className="flex gap-6 mt-10">
            {data.securityImages.map((img, index) => (
              <img
                key={index}
                src={`/${img.image}`}
                alt="icon"
                className="w-16 h-16"
              />
            ))}
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 w-xl">
            {securityServices.map((item, index) => (
              <div key={index}>
                <h3 className="text-white text-3xl font-bold">{item.title}</h3>
                <p className="text-gray-500 text-lg mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={`/${securityRightImage.image}`}
            alt="Security Right"
            className="w-[550px]"
          />
        </div>
      </section>
    </div>
  );
}

export default Security;
