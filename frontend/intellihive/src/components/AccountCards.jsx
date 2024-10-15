import React, { useEffect, useState } from "react";
import { getIcon } from "../assets/index";
import { accountData, user } from "../constants";
import Card from "./Card";

const AccountCards = () => {
  const [accounts, setAccounts] = useState([]); // Use plural for accounts since it's an array
  const [userId, setUserId] = useState(1); // Hardcoded for now

    useEffect(() => {
      // Fetch account details for the selected user
      const userAccounts = accountData.filter(
        (a) => a.userId === String(userId)
      ); // Ensure userId is compared as a string
      setAccounts(userAccounts);
    }, [userId]);

    useEffect(() => {
      console.log("Selected accounts:", accounts);
    }, [accounts]);

    if (accounts.length === 0) {
      return <p>Loading account details...</p>; // Change this to only check if accounts array is empty
    }


  const icon = getIcon(accounts.account_type);
  return (
    <>
      {accounts.map((account) => (
        <Card key={account.id} account={account} /> // Pass each account to the Card component
      ))}
    </>
  );
};

export default AccountCards;
