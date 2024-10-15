import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  PayBills,
  Profile,
  Settings,
  Transactions,
  TransferMoney,
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
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

