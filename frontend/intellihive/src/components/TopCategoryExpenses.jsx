import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

// Define badge styles for each category to ensure consistent UI styling
const categoryBadges = {
    Dining: "badge-primary",
    Shopping: "badge-secondary",
    Grocery: "badge-success",
    Transportation: "badge-warning",
    Utilities: "badge-neutral",
    Transfer: "badge-info",
};

// Helper function to calculate total expenses per category
const calculateCategoryExpenses = (transactions) => {
    const categoryTotals = {};

    transactions.forEach((transaction) => {
        const category = transaction.category;

        // Check if the category is one of the defined categories
        if (categoryBadges[category]) {
            if (!categoryTotals[category]) {
                categoryTotals[category] = 0;
            }
            categoryTotals[category] += transaction.amount; // Add transaction amount
        }
    });

    return categoryTotals;
};

// Component to display top categories expenses
const TopCategoriesExpenses = ({ transactions }) => {
    const categoryExpenses = calculateCategoryExpenses(transactions);

    // Calculate total expenses
    const totalExpenses = Object.values(categoryExpenses).reduce(
        (acc, amount) => acc + amount,
        0
    );

    return (
        <div className="card bg-base-100 w-full drop-shadow-lg h-[350px]">
            <div className="card-body h-full">
                {/* Header: Title and action button */}
                <div className="flex justify-between items-center">
                    <h2 className="card-title">Top Categories Expenses</h2>
                    <div className="card-actions justify-end">
                        <a className="btn btn-link text-[#004A98]">
                            Last Month <RiArrowDownSLine />
                        </a>
                    </div>
                </div>

                {/* List of categories and their expenses */}
                <ul className="mr-5 overflow-y-auto h-[calc(100%-2rem)]">
                    {Object.entries(categoryExpenses).map(([category, amount]) => (
                        <li
                            key={category}
                            className="flex items-center gap-2 justify-between mb-3"
                        >
                            <div className="flex items-center gap-2">
                                <div
                                    className={`${categoryBadges[category]} badge badge-xs`}
                                ></div>
                                <h3>{category}</h3>
                            </div>
                            {/* Display the total expense for the category, formatted */}
                            <p className="text-right">CA$ {amount.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>

                <hr className="border-t border-gray-200" />

                {/* Total expenses summary */}
                <div className="flex justify-between mt-2">
                    <h3 className="font-bold">Total Expenses</h3>
                    <p className="text-right mr-5">CA$ {totalExpenses.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default TopCategoriesExpenses;
