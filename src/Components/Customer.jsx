import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import CustomerShowcase from "./CustomerShowCase";

function Customer() {
 const { data } = useContext(DataContext);
  const customerData = data.customerData;
    
  return (
    <div>
      <div className="px-10 py-20">
        <h4 className="text-xl text-blue-700 font-semibold">{customerData.title}</h4>
        <h2 className="text-4xl font-bold text-gray-800 my-7">{customerData.heading}</h2>
        <p className="text-xl text-gray-500">{customerData.text}</p>
      </div>
      <CustomerShowcase />
    </div>
  )
}

export default Customer
