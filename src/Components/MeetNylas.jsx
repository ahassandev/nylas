import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import NylasApi from "./NylasApi";

function MeetNylas() {
  const { data } = useContext(DataContext);
  const meetnylas = data.meetnylas; 
  return (
    <div className="bg-white px-14 pt-12">
      <div>
        <h4 className="font-bold text-xl">{meetnylas.heading}</h4>
        <h2 className="mt-5 text-3xl font-bold w-3xl">{meetnylas.title}</h2>
        <p className="mt-4 text-lg w-3xl">{meetnylas.text}</p>
      </div>
      <div>
        <NylasApi/>
      </div>
    </div>
  )
}

export default MeetNylas
