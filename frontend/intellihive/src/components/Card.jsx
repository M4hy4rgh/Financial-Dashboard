/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getIcon } from "../assets/index";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';

const defaultAccount = {
    currencyIcon: "CA$",
};

const Card = ({ account }) => {
    const [accounts, setAccounts] = useState([]);
    
    // Fetch accounts whenever userId changes
    useEffect(() => {
        setAccounts(account);
    }, [account]);
    


    // Retrieve the appropriate icon based on the account type
    const icon = getIcon(account.accountType.toLowerCase());

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="card bg-base-100 border border-[#004A98] rounded-xl shadow-lg">
                {/* Top section: Displays the account icon, type, balance, and account number */}
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
                            {defaultAccount.currencyIcon} {account.balance?.toLocaleString()}
                        </h1>

                        {/* Conditional label for account or card number, depending on account type */}
                        <p className="text-xs sm:text-sm text-gray-400">
                            {account.accountType === "Credit" ? "Card" : "Account"} number:{" "}
                            {account?.accountNumber}
                        </p>
                    </div>
                </div>

                <hr className="border-t border-gray-200" />

                {/* Action section: Link to view account transactions */}
                <div className="card-actions justify-center py-3">
                    <Link
                        className="flex items-center gap-1 text-[#004A98] hover:underline text-sm sm:text-md"
                        to="/transactions"
                        state={{ account }} 
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
