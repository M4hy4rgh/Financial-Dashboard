import React, { useEffect, useState } from "react";
import { accountData } from "../constants"; // Import mock data for accounts
import Card from "./Card";
import Loader from "./Loader";

const AccountCards = ({data}) => {
    // State to hold accounts belonging to the selected user
    const [accounts, setAccounts] = useState([]);   
    
    // Fetch accounts whenever userId changes
    useEffect(() => {
        // const userAccounts = accountData.filter(
        //   (account) => account.userId === String(userId)
        // );
        // setAccounts(userAccounts);
        // console.log("data ", data);
        setAccounts(data);
    }, [data]);


    // Calculate the total balance for "Saving" and "Checking" accounts
    const totalBalance = accounts
        .filter(
            (account) =>
                account.accountType === "Saving" || account.accountType === "Checking"
        )
        .reduce((total, account) => total + account.balance, 0);

    // Show a loading message if no accounts are available
    if (accounts.length === 0) {
        return <Loader text={"Loading account details..."} />;
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-5 min-w-full">
            {/* Display a grid of account cards */}
            <div className="grid grid-cols-3 gap-4">
                {accounts.map((account) => (
                    <Card key={account.id} account={account} />
                ))}
            </div>

            {/* Display the total balance of "Checking" and "Saving" accounts */}
            <div className="flex space-x-2 w-full pt-5 self-end border-t-[1px] border-t-neutral-content">
                <h1 className="font-sans font-normal text-lg">
                    Total Balance (Checking & Saving):
                </h1>
                <p className="font-bold text-2xl">
                    CA${totalBalance.toLocaleString()} {/* Format balance with commas */}
                </p>
            </div>
        </div>
    );
};

export default AccountCards;
