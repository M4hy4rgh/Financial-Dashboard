import React,{useEffect, useState} from "react";
import { Navbar } from "../components";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { transactions } from "../constants/index";


const Transactions = () => {
    // const location = useLocation();
    // const { account } = location.state || {}; // Access the passed account data

    // const [transactions, setTransactions] = useState([]);
    // const [loading, setLoading] = useState(true);

    // // Fetch transactions whenever accounts change
    // useEffect(() => {
    //     const fetchTransactiontData = async () => {
    //         try {
    //             const response = await axios.get(`https://financial-dashboard-backend-transaction.onrender.com/api/transaction/account/${account.id}`);
    //             setTransactions(response.data);
    //             setLoading(false);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchTransactiontData();
    // }, [account]);

    // const humanReadableDate = moment(transactions.createdAt).format('MMMM Do YYYY, h:mm A');


    // Log the accounts and transactions whenever they change
    // useEffect(() => {
    //     console.log("accounts t", account);
    //     console.log("transactions", transactions);
    // }, [account, transactions]);

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
                            {/* {loading && <p className="text-lg text-center">Loading...</p>} */}
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
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id}>
                                                <td>{moment(transactions.createdAt).format('MMMM Do YYYY, h:mm A')}</td>
                                                <td>{transaction.source}</td>
                                                <td>{transaction.category}</td>
                                                <td>$ {transaction.amount}</td>
                                            </tr>
                                        ))}
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
