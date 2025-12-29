import React, { useContext } from "react";
import { DataContext } from "../DataContext";

function BuildingFuture() {
  const { data } = useContext(DataContext);
  const { buildingFuture } = data;

  const buttonStyles = {
    primary:
      "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300",

    outline:
      "group text-white px-6 py-3 rounded-lg font-semibold hover:text-blue-400 transition-all duration-300",
  };

  return (
    <section className="bg-gray-950 px-10 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-4xl font-bold">
            {buildingFuture.heading}
          </h2>

          <p className="text-gray-400 text-xl mt-4">{buildingFuture.text}</p>

          <div className="flex justify-center md:justify-start gap-6 mt-10">
            {buildingFuture.buttons.map((btn, index) => (
              <a key={index} href={btn.link} className={buttonStyles[btn.type]}>
                <span className="flex items-center gap-2">
                  {btn.text}

                  {btn.type === "outline" && (
                    <img
                      src="/arrow.svg"
                      alt="arrow"
                      className="w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <img
            src={`/${buildingFuture.rightImage}`}
            alt="Right Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default BuildingFuture;
