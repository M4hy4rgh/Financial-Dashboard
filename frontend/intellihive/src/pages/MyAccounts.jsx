import React, { useState, useEffect } from "react";
import { Navbar } from "../components/index";
import { AccountCards, HeaderComponent, Loader } from "../components";
import axios from 'axios';

const MyAccounts = () => {
    const [myAccountData, setMyAccountData] = useState([]);
    const [userId, setUserId] = useState("1");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccountData = async () => {
            try {
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
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchAccountData();
    }, [userId]);

    useEffect(() => {
        console.log("account ", myAccountData);
    }, [myAccountData]);

    // if (loading) return <Loader text={"Loading..."} />;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="min-h-screen bg-base-100">
                <div className="grid grid-cols-5 ">
                    <div className="col-span-1 min-w-[10rem] max-w-[10rem]">
                        <Navbar />
                    </div>

                    {/* Heading */}
                    <div className="min-h-screen col-span-4 flex flex-col gap-8 px-6 py-5 ">
                        <HeaderComponent title="My Accounts" placeholder="Search" />

                        {/* List of account cards */}
                        {loading ? <Loader text={"Loading..."} /> : <AccountCards data={myAccountData} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyAccounts;
