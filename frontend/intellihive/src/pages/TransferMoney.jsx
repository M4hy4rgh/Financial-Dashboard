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

                <div className="min-h-screen col-span-4 flex flex-col gap-6 px-5 py-5 ">
                    {/* Heading */}
                    <HeaderComponent title="Transfer Money" placeholder="Search" />

                    {/* Grid of Cards */}
                        <div className="flex flex-wrap gap-6 px-10 ml-20 mt-3 ">
                            {TransactionsFunctions.map((item, index) => (
                                <div key={index} className={`card bg-white border-[1px] border-[#004A98] p-4
                                    flex flex-col items-center text-center w-72`}>
                                    {/* Icon for the function */}
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-12 h-12 mb-4"
                                    />
                                    {/* Function title */}
                                    <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
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
