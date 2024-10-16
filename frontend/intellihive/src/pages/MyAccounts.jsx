import React, { useState, useEffect } from "react";
import { Navbar } from "../components/index";
import { AccountCards, HeaderComponent } from "../components";
import axios from 'axios';

const MyAccounts = () => {
    // const [myAccountData, setMyAccountData] = useState([]);
    // const [userId, setUserId] = useState("1");
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchAccountData = async () => {
    //         try {
    //             const response = await axios.get(`https://financial-dashboard-backend-account.onrender.com/api/account/user/${userId}`);
    //             setMyAccountData(response.data);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchAccountData();
    // }, [userId]);

    // useEffect(() => {
    //     console.log("account ", myAccountData);
    // }, [myAccountData]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="min-h-screen">
                <div className="grid grid-cols-5 ">
                    <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
                        <Navbar />
                    </div>

                    {/* Heading */}
                    <div className="col-span-4 bg-[#f4f7fe] px-4 py-5 min-h-screen">
                        <HeaderComponent title="My Accounts" placeholder="Search" />

                        {/* List of account cards */}
                        <AccountCards />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccounts;
