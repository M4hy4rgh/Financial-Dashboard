import React from "react";
import { Card, Navbar } from "../components/index";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { MdRefresh } from "react-icons/md";

const Transactions = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
          <Navbar />
        </div>

        <div className="col-span-4 bg-[#f4f7fe] px-4 py-5">
          {/* Heading */}
          <div className="flex justify-between items-center m-3 mb-8">
            <h1 className="font-sans font-bold text-lg">Transfer Money</h1>
            <div className="relative w-full max-w-md">
              {/* Magnifier Icon */}
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <SlMagnifier />
              </span>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full pl-10 rounded-2xl"
              />
            </div>
          </div>


            <div className="grid grid-cols-4 gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
  
      </div>
    </div>
  );
};

export default Transactions;
