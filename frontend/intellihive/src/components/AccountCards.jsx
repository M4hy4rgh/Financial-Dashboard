import React, { useEffect, useState } from "react";
import { getIcon } from "../assets/index";
import { accountData, user } from "../constants";
import Card from "./Card";

const AccountCards = () => {
  const [accounts, setAccounts] = useState([]); // Use plural for accounts since it's an array
  const [userId, setUserId] = useState(1); // Hardcoded for now

  useEffect(() => {
    // Fetch account details for the selected user
    const userAccounts = accountData.filter((a) => a.userId === String(userId)); // Ensure userId is compared as a string
    setAccounts(userAccounts);
  }, [userId]);

  useEffect(() => {
    console.log("Selected accounts:", accounts);
  }, [accounts]);

  // Calculate total balance of Savings and Checking accounts
  const totalBalance = accounts
    .filter(
      (account) =>
        account.accountType === "Saving" || account.accountType === "Checking"
    )
    .reduce((total, account) => total + account.balance, 0);


    if (accounts.length === 0) {
    return <p>Loading account details...</p>; // Change this to only check if accounts array is empty
  }

  
  return (
    <div className="flex flex-col justify-center items-center space-y-5 divide-y min-w-full ">
      <div className="grid grid-cols-3 gap-4">
        {accounts.map((account) => (
          <Card key={account.id} account={account} /> // Pass each account to the Card component
        ))}
      </div>
      <div className="flex space-x-2 w-full py-3 self-end">
        <h1 className="font-sans font-normal text-lg ">Total Balance:</h1>
        <p className="font-bold text-lg">
          ${totalBalance.toLocaleString()} {/* Format with commas */}
        </p>
      </div>
    </div>
  );
};

export default AccountCards;
