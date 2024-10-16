import React from "react";
import { Link } from "react-router-dom";

// Icon imports for visual indicators in the menu
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdAccountBalance, MdAccountCircle } from "react-icons/md";
import { FaMoneyBillTransfer, FaMoneyBills } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

// Importing the logo
import intellihive from "../assets/logo/intellihive.svg";

const Navbar = () => {
  return (
    
    // Sidebar container - Fixed to the left side of the screen
    <div className="fixed min-h-screen flex justify-start items-start ">
      <ul className="menu bg-white w-72 h-screen absolute left-0 shadow-md">
        <img src={intellihive} alt="intellihive" className="w-44 m-8" />

        {/* Menu items */}
        <li>
          <Link to="/" className="py-4 text-base">
            <RiDashboardHorizontalFill />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/my-accounts" className="py-4 text-base">
            <MdAccountBalance />
            My Accounts
          </Link>
        </li>
        <li>
          <Link to="/transfer-money" className="py-4 text-base">
            <FaMoneyBillTransfer />
            Transfer Money
          </Link>
        </li>
        <li>
          <Link to="/pay-bills" className="py-4 text-base">
            <FaMoneyBills />
            Pay Bills
          </Link>
        </li>
        <li>
          <Link to="/settings" className="py-4 text-base">
            <IoMdSettings />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/profile" className="py-4 text-base">
            <MdAccountCircle />
            Profile
          </Link>
        </li>
        <Link
          className="btn bg-transparent border-red-500 w-40 absolute bottom-0 m-5 text-red-500"
          to="/login"
        >
          <IoLogOut />
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
