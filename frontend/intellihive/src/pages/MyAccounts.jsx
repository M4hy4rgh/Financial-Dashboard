import React from "react";
import { Navbar } from "../components/index";
import { AccountCards, HeaderComponent } from "../components";

const MyAccounts = () => {
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
