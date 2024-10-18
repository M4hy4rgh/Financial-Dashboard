import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import {
    AccountCards, TransactionsComponent, TopCategoriesExpenses, HeaderComponent, Navbar,
    Loader
} from "../components";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdRefresh } from "react-icons/md";
import { accountData, transactions } from "../constants";
import axios from 'axios';

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
    // const [myTransactions, setMyTransactions] = useState([]);
    const [myAccountData, setMyAccountData] = useState([]);
    const [myUserData, setMyUserData] = useState(null);
    const [userId, setUserId] = useState("1");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch account data
    const fetchAccountData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://financial-dashboard-backend-account.onrender.com/api/account/user/${userId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                    }
                }
            );
            setMyAccountData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://financial-dashboard-backend-user-service.onrender.com/api/user/${userId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                    }
                }
            );
            setMyUserData(response.data);
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch both user and account data initially when component mounts
    useEffect(() => {
        fetchAccountData();
        fetchUserData();
    }, [userId]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="grid grid-cols-5 ">
            {/* Sidebar navigation */}
            <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
                <Navbar />
            </div>

            {/* Heading */}
            <div className="col-span-4 px-4 py-5 flex flex-col gap-5">
                {/* <HeaderComponent title={`Welcome, ${myUserData.firstName} ${myUserData.lastName}!`} placeholder="Search" /> */}

                {loading ? (<Loader text={"loading..."} />) : (
                    <>
                        {myUserData && (
                            <HeaderComponent
                                title={`Welcome, ${myUserData.firstName} ${myUserData.lastName}!`}
                                placeholder="Search"
                            />
                        )}

                        {/* Balance Accounts Section */}
                        <div className="col-span-4 bg-white rounded-2xl card-body drop-shadow-lg">
                            <div className="flex justify-between items-center">
                                <h1 className="font-sans font-bold text-lg">Balance Accounts</h1>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-link text-[#004A98]" to="/my-accounts">
                                        See all accounts <MdOutlineKeyboardArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-gray-400 flex gap-2 justify-start items-center pb-4">
                                Last updated 1 min ago
                                <MdRefresh
                                    className="mt-1 cursor-pointer"
                                    onClick={() => {
                                        // Trigger data refresh when clicked
                                        fetchAccountData();
                                        fetchUserData();
                                    }}
                                />
                            </p>

                            {/* List of account cards */}
                            <AccountCards data={myAccountData} />
                        </div>

                        {/* Top Categories Expenses */}
                        <div className="flex justify-between col-span-4 w-full space-x-4">
                            <div className="w-1/2 h-[300px]">
                                <TopCategoriesExpenses transactions={transactions} />
                            </div>

                            {/* Cash Flow Section */}
                            <div className="card bg-base-100 w-1/2 drop-shadow-lg flex h-[350px]">
                                <div className="card-body">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title">Cash Flow</h2>
                                        <div className="card-actions justify-end">
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
                        /></>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
