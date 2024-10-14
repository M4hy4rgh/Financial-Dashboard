import React from "react";
import check from "../assets/icons/check.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          {/* adding an icon */}
          <div className="flex justify-between items-center">
            <img src={check} alt="savings" className="w-20 h-20 " />
            <div className="flex flex-col items-end ">
              <h2 className="card-title">Saving Account</h2>
              <p>10,787.09$</p>
              <p>Account number: 12345670000</p>
            </div>
          </div>
          <hr></hr>
          <div className="card-actions justify-center">
            <a className=" btn btn-link">
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
