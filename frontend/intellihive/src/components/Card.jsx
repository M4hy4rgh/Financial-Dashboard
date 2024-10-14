import React from "react";
import check from "../assets/icons/check.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 border border-[#004A98]">
        <div className="">
          {/* adding an icon */}
          <div className="flex justify-between px-3 py-4">
            <img src={check} alt="savings" className="w-20 h-20 " />
            <div className="flex flex-col items-end ">
              <h1 className="text-gray-500 text- py-2">Saving Account</h1>
              <h1 className="card-title">10,787.09 $</h1>
              <p>Account number: 12345670000</p>
            </div>
          </div>
          <hr className="mt-2"></hr>
          <div className="card-actions justify-center gap-0">
            <a className=" btn btn-link h-0 text-[#004A98]">
              See transactions
              <MdOutlineKeyboardArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
