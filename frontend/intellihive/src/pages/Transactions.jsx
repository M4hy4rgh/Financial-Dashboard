import React from "react";
import { Navbar } from "../components";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";

const Transactions = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
          <Navbar />
        </div>

        <div className="col-span-4 bg-[#f4f7fe] px-4 py-5">
          {/* Heading */}
          <div className="flex justify-between items-center m-3 mb-8">
            <h1 className="font-sans font-bold text-lg">Transactions</h1>
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

          {/* Account info and balance */}
          <div className=" bg-base-100 border shadow-xl mb-6 col-span-4 rounded-box">
            <div className="flex flex-col">
              <div className="flex justify-between px-10 py-4">
                <div className="  ">
                  <div className="flex justify-between items-center w-full ">
                    <h1 className="card-title">Saving Account</h1>
                    <div className="card-action justify-end">
                      <a className=" btn btn-link text-[#004A98] ">
                        See all accounts <RiArrowDownSLine />
                      </a>{" "}
                    </div>
                  </div>
                  <h2 className="text-gray-500  py-2">Current Balance</h2>
                  <h1 className="text-4xl card-title">10,787.09 $</h1>
                  <p className="text-gray-500 pt-5">
                    Account number: 12345670000
                  </p>
                </div>
              </div>
              <hr className="mt-1"></hr>
              <div className="card-actions justify-center gap-0">
                {/* direct deposit info: transit number, institute numb, acc num */}
                <div className="px-6 py-4">
                  <h1 className="text-xl py-2">Direct Deposit:</h1>
                  <div className="flex flex-row justify-between gap-64">
                    <h2 className="text-gray-500  py-2">
                      Transit Number: 12345
                    </h2>
                    <h2 className="text-gray-500  py-2">
                      Institute Number: 67890
                    </h2>
                    <h2 className="text-gray-500  py-2">
                      Account Number: 00000
                    </h2>
                  </div>
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
                      <th>Merchant</th>
                      <th>Category</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Thu, Oct 10, 24</td>
                      <td>FreshCo</td>
                      <td>Grocery</td>
                      <td>-15,00$</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Thu, Oct 09, 24</td>
                      <td>KFC</td>
                      <td>Food</td>
                      <td>-25,35$</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Thu, Oct 08, 24</td>
                      <td>Aldo Shoes</td>
                      <td>Shopping</td>
                      <td>-99,89$</td>
                    </tr>
                    <tr>
                      <td>Thu, Oct 08, 24</td>
                      <td>Up Work</td>
                      <td>Deposit</td>
                      <td>+185,00$</td>
                    </tr>
                    <tr>
                      <td>Thu, Oct 07, 24</td>
                      <td>Longos</td>
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
    </div>
  );
};

export default Transactions;
