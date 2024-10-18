import React, { useEffect, useState } from "react";
import { Loader, Navbar } from "../components";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { transactions } from "../constants/index";


const Transactions = () => {
    const location = useLocation();
    const { account } = location.state || {}; // Access the passed account data

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch transactions whenever accounts change
    useEffect(() => {
        const fetchTransactiontData = async () => {
            try {
                const response = await axios.get(`https://financial-dashboard-backend-transaction.onrender.com/api/transaction/account/${account.id}`);
                setTransactions(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTransactiontData();
    }, [account]);

    const humanReadableDate = moment(transactions.createdAt).format('MMMM Do YYYY, h:mm A');


    // Log the accounts and transactions whenever they change
    useEffect(() => {
        console.log("accounts t", account);
        console.log("transactions", transactions);
    }, [account, transactions]);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-5 ">
                <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
                    <Navbar />
                </div>

                <div className="col-span-4 bg-base-100 px-4 py-5">
                    {/* Heading */}
                    <div className="flex justify-between items-center m-3 mb-8">
                        <div className="flex flex-col justify-center items-start pt-3">
                            <h1 className="font-sans font-bold text-lg">Transactions</h1>
                            <div className="breadcrumbs text-sm w-full pt-2 pl-px">
                                <ul>
                                    <li><Link to="/">Dashboard</Link></li>
                                    <li><Link to={"/my-accounts"}>My Accounts</Link></li>
                                    <li>Transaction</li>
                                </ul>
                            </div>
                        </div>

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
                    <div className="bg-base-100 border shadow-xl mb-6 col-span-4 rounded-box">
                        <div className="flex flex-col">
                            <div className="flex justify-between pr-20 pl-10 py-4">
                                <div className="flex flex-row justify-between w-full">
                                    <div className="flex flex-col justify-center items-start">
                                        <h1 className="card-title">Saving Account</h1>
                                        <h2 className="text-gray-500 self-start pt-4">Current Balance:</h2>
                                    </div>
                                    <div className=" flex flex-row justify-center items-center space-x-6">
                                        <h1 className="text-4xl card-title">${account.balance.toLocaleString()}</h1>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-1"></hr>
                            <div className="justify-center px-10">
                                {/* direct deposit info: transit number, institute numb, acc num */}
                                <div className="py-4">
                                    <h1 className="text-xl font-semibold pb-2">Account Info:</h1>
                                    <div className="flex flex-row justify-between ">
                                        <h2 className="text-gray-500  py-2">
                                            Transit Number: 12345
                                        </h2>
                                        <h2 className="text-gray-500  py-2">
                                            Institute Number: 67890
                                        </h2>
                                        <h2 className="text-gray-500  py-2">
                                            Account Number: {account.accountNumber}
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
                                {loading ? (<Loader />) : (
                                    <table className="table min-h-52">
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
                                            {transactions.length === 0 && (
                                                <tr>
                                                    <td colSpan={4} className="text-center">No transactions found</td>
                                                </tr>
                                            )}
                                            {transactions.map((transaction) => (
                                                <tr key={transaction.id}>
                                                    <td>{humanReadableDate}</td>
                                                    <td>{transaction.source}</td>
                                                    <td>{transaction.category}</td>
                                                    <td>$ {transaction.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
