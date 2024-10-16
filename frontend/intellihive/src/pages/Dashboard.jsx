import React from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts"; // Google Charts for data visualization
// Importing reusable components
import {
  AccountCards, TransactionsComponent, TopCategoriesExpenses, HeaderComponent, Navbar} from "../components";
// Icon components
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
// Mock data for accounts and transactions
import { accountData, transactions } from "../constants";

// Data for the pie chart
export const data = [
  ["Task", "Hours per Day"], // Labels
  ["Income", 11],
  ["Expenses", 6],
];

export const options = {
    pieHole: 0.8,
    is3D: false,
};


const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 ">
      {/* Sidebar navigation */}
      <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
        <Navbar />
      </div>

      {/* Heading */}
      <div className="col-span-4 bg-[#f4f7fe] px-4 py-5">
        <HeaderComponent title="Welcome User!" placeholder="Search" />

        {/* Balance accounts section */}
        <div className=" col-span-4 bg-white rounded-2xl mb-5 card-body shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="font-sans font-bold text-lg ">Balance Accounts</h1>
            <div className="card-actions justify-end">
              <Link className="btn btn-link text-[#004A98]" to="/my-accounts">
                See all accounts <MdOutlineKeyboardArrowRight size={18} />
              </Link>
            </div>
          </div>
          <p className="text-gray-400 flex gap-2">
            Last updated 1 min ago <MdRefresh className="mt-1" />
          </p>

          {/* List of account cards */}
          <AccountCards />
        </div>

        {/* Top Categories Expenses */}
        <div className="flex justify-between col-span-4 w-full mb-5 space-x-4">
          <div className="w-1/2 h-[300px]">
            <TopCategoriesExpenses transactions={transactions} />
          </div>

            {/* Cash Flow Section*/}
          <div className="card bg-base-100 w-1/2 shadow-xl flex h-[350px]">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Cash Flow</h2>
                <div className="card-actions justify-end ">
                  <a className="btn btn-link text-[#004A98]">
                    Last Month <RiArrowDownSLine />
                  </a>
                </div>
              </div>
              <div className="flex-grow">
             
                {/* Pie chart displaying income vs expense */}
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="100%" 
                  data={data}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Section */}
        <TransactionsComponent
          transactions={transactions}
          accountData={accountData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
