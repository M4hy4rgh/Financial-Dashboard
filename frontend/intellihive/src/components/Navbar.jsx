import React from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdAccountBalance, MdAccountCircle } from "react-icons/md";
import { FaMoneyBillTransfer, FaMoneyBills } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="min-h-screen flex justify-start items-start">
      <ul className="menu bg-base-200  w-64 h-screen absolute left-0">
        <h1 className="text-center text-3xl font-bold ">Intellihive</h1>
        <li>
          <a>
            <RiDashboardHorizontalFill />
            Dashboard
          </a>
        </li>
        <li>
          <a>
            <MdAccountBalance />
            My Accounts
          </a>
        </li>
        <li>
          <a>
            <FaMoneyBillTransfer />
            Transfer Money
          </a>
        </li>
        <li>
          <a>
            <FaMoneyBills />
            Pay Bills
          </a>
        </li>
        <li>
          <a>
            <IoMdSettings />
            Settings
          </a>
        </li>
        <li>
          <a>
            <MdAccountCircle />
            Profile
          </a>
        </li>
        <button className="btn btn-primary">
          <IoLogOut />
          Logout
        </button>
      </ul>
    </div>
  );
};


export default Navbar;
