import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const Navbar = () => {
  const { data } = useContext(DataContext);

  const Navbar = data.Navbar;
  return (
    <>
      <div className="bg-black text-white">
        <div className="container px-6 m-auto flex items-center">
          <div className="flex items-center gap-2">
            <img src={Navbar.logo} alt="logo" className="w-11" />
            <span className="text-4xl font-bold">{Navbar.name}</span>
          </div>

          <div className="flex ml-8 gap-10">
            {Navbar.navLinks.map((link, index) => (
              <span key={index}>{link.text}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
