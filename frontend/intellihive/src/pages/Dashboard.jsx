import React from "react";
import { Card, Navbar } from "../components/index";
import { RiArrowDownSLine } from "react-icons/ri";
import { Chart } from "react-google-charts";
import { SlMagnifier } from "react-icons/sl";
import { MdRefresh } from "react-icons/md";
import AccountCards from "../components/AccountCards";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const data = [
    ["Task", "Hours per Day"],
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
        <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
          <Navbar />
        </div>

        <div className="col-span-4 bg-[#f4f7fe] px-4 py-5">
          {/* Heading */}
          <div className="flex justify-between items-center m-3 mb-8">
            <h1 className="font-sans font-bold text-lg">Welcome User!</h1>
            <div className="relative w-full max-w-md">
              {/* Magnifier Icon */}
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <SlMagnifier />
              </span>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full pl-10 rounded-2xl"
              />
            </div>
          </div>

          {/* Balance account */}
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
            {/* <div className="grid grid-cols-3 gap-4"> */}
            <AccountCards />
            {/* </div> */}
          </div>

          {/* Top Categories Expenses */}
          <div className=" flex justify-center space-x-8 col-span-4 w-full mb-5">
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">Top Categories Expenses</h2>
                  <div className="card-actions justify-end">
                    <a className="btn btn-link text-[#004A98]">
                      Last Month <RiArrowDownSLine />
                    </a>
                  </div>
                </div>

                <ul className="mr-5">
                  <li className="flex items-center gap-2 justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="badge badge-primary badge-xs"></div>
                      <h3>Shopping</h3>
                    </div>
                    <p className="text-right">1,302.05$</p>
                  </li>
                  <hr />

                  <li className="flex items-center gap-2 justify-between my-3">
                    <div className="flex items-center gap-2">
                      <div className="badge bg-orange-600 badge-xs"></div>
                      <h3>Grocery</h3>
                    </div>
                    <p className="text-right">1,302.05$</p>
                  </li>
                  <hr />

                  <li className="flex items-center gap-2 justify-between my-3">
                    <div className="flex items-center gap-2">
                      <div className="badge badge-accent badge-xs"></div>
                      <h3>Restaurant</h3>
                    </div>
                    <p className="text-right">1,302.05$</p>
                  </li>
                  <hr />

                  <li className="flex items-center gap-2 justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <div className="badge bg-blue-700 badge-xs"></div>
                      <h3>Education</h3>
                    </div>
                    <p className="text-right">1,302.05$</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-100 w-full shadow-xl flex">
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title">Cash Flow</h2>
                  <div className="card-actions justify-end ">
                    <a className="btn btn-link text-[#004A98]">
                      Last Month <RiArrowDownSLine />
                    </a>
                  </div>
                </div>
                <div>
                  <Chart
                    chartType="PieChart"
                    width="100%"
                    height="00px"
                    data={data}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="card bg-base-100 shadow-xl p-6">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Transactions</h2>
                <div className="card-actions justify-end">
                  <a className="btn btn-link text-[#004A98]">
                    Recent <RiArrowDownSLine />
                  </a>
                </div>
              </div>
              {/* list of transactions with date category store and amount */}
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>From</th>
                      <th>Account</th>
                      <th>Category</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Thu, Oct 10, 24</td>
                      <td>FreshCo</td>
                      <td>Checking Account</td>
                      <td>Grocery</td>
                      <td>-15,00$</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Thu, Oct 09, 24</td>
                      <td>KFC</td>
                      <td>Checking Account</td>
                      <td>Food</td>
                      <td>-25,35$</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Thu, Oct 08, 24</td>
                      <td>Aldo Shoes</td>
                      <td>Saving Account</td>
                      <td>Shopping</td>
                      <td>-99,89$</td>
                    </tr>
                    <tr>
                      <td>Thu, Oct 08, 24</td>
                      <td>Up Work</td>
                      <td>Saving Account</td>
                      <td>Deposit</td>
                      <td>+185,00$</td>
                    </tr>
                    <tr>
                      <td>Thu, Oct 07, 24</td>
                      <td>Longos</td>
                      <td>Checking Account</td>
                      <td>Grocery</td>
                      <td>-75,00$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
