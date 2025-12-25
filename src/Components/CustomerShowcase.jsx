import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";

const CustomerShowcase = () => {
  const { data } = useContext(DataContext);
  const customerShowCase = data.customerShowCase;

  const [activeCustomer, setActiveCustomer] = useState(customerShowCase[0]);

  return (
    <section className="max-w-7xl mx-auto pl-20 py-10">
      
      <div className="grid grid-col-1 md:grid-cols-[220px_1fr] gap-12">

       
        <div className="flex flex-col gap-6 items-start">
          {customerShowCase.map((customer) => (
            <button
              key={customer.id}
              onClick={() => setActiveCustomer(customer)}
              className={`w-fit p-4 rounded-lg transition-all duration-300 cursor-pointer
                ${
                  activeCustomer.id === customer.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="h-10"
              />
            </button>
          ))}
        </div>

     
        <div className="border-l pl-10">
          <h3 className="text-2xl font-bold text-gray-700 mb-6">
            {activeCustomer.title}
          </h3>

          
          <div className="flex gap-12 mb-6">
            {activeCustomer.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2 text-blue-600">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          
          <p className="text-gray-700 text-base mb-6 max-w-xl">
            “{activeCustomer.quote}”
          </p>

       
          <div className="flex items-center gap-4">
            <img
              src={activeCustomer.person.avatar}
              alt={activeCustomer.person.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">
                {activeCustomer.person.name}
              </p>
              <p className="text-sm text-gray-500">
                {activeCustomer.person.role}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerShowcase;
