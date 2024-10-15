import React, { useState, useEffect } from "react";
import check from "../assets/icons/checking.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { getIcon } from "../assets/index";

// Default account data (used when no data is fetched)
const defaultAccount = {
  accountType: "Saving Account",
  balance: "10,787.09",
  currencyIcon: "CA$",
  accountNumber: "12345670000",
  imageUrl: check,
};

const Card = ({ account }) => {
    const icon = getIcon(account.accountType.toLowerCase());
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="card bg-base-100 border border-[#004A98] rounded-xl shadow-lg">
        {/* Top section with icon and account details */}
        <div className="flex justify-between p-4 items-center">
          <img
            src={icon}
            alt={account.accountType}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="flex flex-col items-end text-right space-y-1">
            <h1 className="text-sm sm:text-md text-gray-500">
              {account?.accountType} Account
            </h1>
            <h1 className="text-xl sm:text-2xl font-semibold">
              {account.currencyIcon} {account.balance?.toLocaleString()}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400">
              Account number: {account?.accountNumber}
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        {/* Action section */}
        <div className="card-actions justify-center py-3">
          <Link
            className="flex items-center gap-1 text-[#004A98] hover:underline text-sm sm:text-md"
            to="/transactions"
          >
            See transactions
            <MdOutlineKeyboardArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
