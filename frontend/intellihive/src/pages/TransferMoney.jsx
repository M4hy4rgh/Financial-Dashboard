import React from "react";
import { HeaderComponent, Navbar } from "../components";
import { getIcon } from "../assets/index";

// Define the available transaction functions
const TransactionsFunctions = [
  {
    title: "Transfer Between Account",
    icon: getIcon("transfer"),
  },
  {
    title: "Manage Transactions",
    icon: getIcon("manage"),
  },
  {
    title: "Send Money",
    icon: getIcon("sendmoney"),
  },
  {
    title: "Request Money",
    icon: getIcon("reqmoney"),
  },
];

const Transactions = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
          <Navbar />
        </div>

        <div className="col-span-4 bg-[#f4f7fe] px-4 py-5 min-h-screen">
          {/* Heading */}
          <HeaderComponent title="Transfer Money" placeholder="Search" />

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TransactionsFunctions.map((func, index) => (
              <div
                key={index}
                className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
              >
                {/* Icon for the function */}
                <img
                  src={func.icon}
                  alt={func.title}
                  className="w-12 h-12 mb-4"
                />
                {/* Function title */}
                <h2 className="text-lg font-semibold mb-2">{func.title}</h2>
                {/* Action button to select the function */}
                <button className="btn bg-[#004A98] text-white mt-4 py-2 px-4 rounded-full">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
