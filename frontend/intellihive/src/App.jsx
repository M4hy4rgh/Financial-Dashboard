import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  PayBills,
  Profile,
  Settings,
  Transactions,
  TransferMoney,
  MyAccounts,
  SignUp,
  Login,
  ForgotPassword,
} from "./pages/index";
import Navbar from "./components/Navbar";


import "./App.css";

function App() {

  return (
    <Router>
      <div className="">
        <div className="">
          {/* Adjust margin to match navbar width */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pay-bills" element={<PayBills />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/my-accounts" element={<MyAccounts />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

