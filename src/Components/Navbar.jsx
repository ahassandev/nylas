import React, { useContext } from "react";
import { DataContext } from "../DataContext";

const Navbar = () => {
  const {data} = useContext(DataContext);

  const Navbar = data.Navbar;
  return (
    <>
    <div className='bg-black text-white'>
      <div className='container px-6 m-auto flex items-center'>
        <div className="flex items-center gap-2">
             <img src={Navbar.logo} alt="logo" className="w-11" />
             <span className="text-4xl font-bold">{Navbar.name}</span>
        </div>

        <div className="flex gap-4 ml-auto">
          {Navbar.navLinks.map((link, index)=> (
            <span key={index}>{link.text}</span>
          ))}
        </div>

       <div className="flex items-center gap-6">
          {navbar.button.map((btn, index) => (
            <button
              key={index}
              className={`
                flex items-center gap-1 text-sm font-medium
                ${btn.outline
                  ? "border px-4 py-1 rounded-full"
                  : "text-blue-300"
                }
              `}
            >
              {btn.text}
              <img src={"/" + btn.image} className="h-3" />
            </button>
          ))}
        </div>
      </div>
      </div>
    </>
  )
} 

export default Navbar
