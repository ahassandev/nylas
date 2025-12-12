import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const Navbar = () => {
  const { data } = useContext(DataContext);
  const NavbarData = data.Navbar;

  return (
    <div className="bg-black text-white py-4">
      <div className="container m-auto px-6 flex items-center">

        
        <div className="flex items-center gap-2">
          <img src={NavbarData.logo} alt="logo" className="w-11" />
          <span className="text-3xl font-bold tracking-wide">{NavbarData.name}</span>
        </div>

       
        <div className="flex gap-8 ml-20 text-[15px] font-medium">
          {NavbarData.navLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              <span>{link.text}</span>
              {link.image && <img src={link.image} className="w-3" />}
            </div>
          ))}
        </div>

       
        <div className="flex gap-6 ml-auto items-center text-[15px]">

       
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <span>{NavbarData.button[0].text}</span>
            <img src={NavbarData.button[0].image} className="w-3" />
          </div>

          
          <button
            className="flex items-center gap-2 border border-white px-5 py-2 rounded-3xl hover:bg-white hover:text-black transition"
          >
            {NavbarData.button[1].text}
            <img src={NavbarData.button[1].image} className="w-3" />
          </button>

         
          <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <span>{NavbarData.button[2].text}</span>
            <img src={NavbarData.button[2].image} className="w-3" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
