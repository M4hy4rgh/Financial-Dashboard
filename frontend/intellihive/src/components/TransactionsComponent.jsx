import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { formatDate } from "../utils/dateUtils";

// Mapping of transaction categories to colored badge styles
const categoryBadges = {
  Dining: "badge-primary badge-outline",
  Shopping: "badge-secondary badge-outline",
  Grocery: "badge-success badge-outline",
  Transportation: "badge-warning badge-outline",
  Utilities: "badge-neutral badge-outline",
  Transfer: "badge-info badge-outline",
  Payment: "badge-error badge-outline",
  "Cash Deposit": "badge-base-300 badge-outline",
};

// Component to display a list of transactions
const TransactionsComponent = ({ transactions, accountData }) => {
  const [showAll, setShowAll] = useState(false);

  // Toggle to switch between recent and all transactions
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="col-span-4">
      <div className="card bg-base-100 shadow-xl p-6">
        <div className="flex justify-between items-center">
          <h2 className="card-title">Transactions</h2>
          <div className="card-actions justify-end">
            <button
              onClick={handleToggle}
              className="btn btn-link text-[#004A98]"
            >
              {showAll ? "Show Recent" : "Show All"} <RiArrowDownSLine />
            </button>
          </div>
        </div>

        {/* Transactions table */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Merchant</th>
                <th>Account</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions
                .sort(
                  (a, b) =>
                    new Date(b.transaction_date) - new Date(a.transaction_date) // Sort by most recent date
                )
                .slice(0, showAll ? undefined : 5) // Show 5 transactions unless 'Show All' is toggled
                .map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{formatDate(transaction.transaction_date)}</td>
                    <td>{transaction.sender_name || "N/A"}</td>
                    <td>
                      {accountData.find(
                        (acc) => acc.id === transaction.account_id
                      )?.accountType || "Unknown Account"}
                    </td>

                    {/* Badge for the transaction category */}
                    <td>
                      <span
                        className={`badge ${
                          categoryBadges[transaction.category] ||
                          "badge-info badge-outline"
                        }`}
                      >
                        {transaction.category}
                      </span>
                    </td>

                    {/* Display amount in red for (expenses) and green for (income) */}
                    <td
                      className={
                        transaction.amount < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      ${transaction.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsComponent;
