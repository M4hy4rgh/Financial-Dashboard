import React, { useState } from "react";
import Navbar from "../components/Navbar";

const PayBills = () => {
  const [billType, setBillType] = useState("Utilities");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Account");
  const [account, setAccount] = useState("Account 1");
  const [successMessage, setSuccessMessage] = useState("");

  // Sample data for accounts and payment history
  const accounts = ["Checking", "Credit", "Saving"];
  const paymentHistory = [
    {
      id: 1,
      date: "2024-09-15",
      type: "Utilities",
      amount: "$50",
      status: "Paid",
    },
    {
      id: 2,
      date: "2024-09-20",
      type: "Internet",
      amount: "$75",
      status: "Paid",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for processing payment should go here
    setSuccessMessage(
      `Successfully paid ${amount} for ${billType} using ${account}!`
    );
    // Reset the form
    setAmount("");
    setAccount("Account 1");
  };

  return (
    <div className="flex min-h-screen  bg-[#f4f7fe]">
      {/* Fixed Navbar on the left */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-1 p-6 ml-64">
        <div className="bg-white p-6 rounded-lg shadow-md ml-9 mr-4 my-5">
          <h2 className="text-lg font-semibold mb-4">Pay Bills</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-4">
            {/* Bill Type Selector */}
            <div className="col-span-5 md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bill Type <span className="text-red-500">*</span>
              </label>
              <select
                value={billType}
                onChange={(e) => setBillType(e.target.value)}
                className="select select-bordered w-full rounded-lg px-4 py-2"
                required
              >
                <option value="Utilities">Utilities</option>
                <option value="Rent">Rent</option>
                <option value="Internet">Internet</option>
                <option value="Phone">Phone</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>

            {/* Amount Input */}
            <div className="col-span-5 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                placeholder="Enter amount to pay"
                required
              />
            </div>

            {/* Account Selector */}
            <div className="col-span-5 md:col-span-3 ">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Account <span className="text-red-500">*</span>
              </label>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="select select-bordered w-full rounded-lg px-4 py-2"
              >
                {accounts.map((acc, index) => (
                  <option key={index} value={acc}>
                    {acc}
                  </option>
                ))}
              </select>
            </div>

            {/* Payment Method Selector */}
            <div className="col-span-5 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method <span className="text-red-500">*</span>
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="select select-bordered w-full rounded-lg px-4 py-2"
              >
                <option value="Account">Account</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-5">
              <button
                type="submit"
                className="btn bg-[#004A98] text-white py-2 px-4 rounded-lg"
              >
                Pay Bill
              </button>
            </div>
          </form>

          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </div>

        {/* Auto Bill Payment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md ml-9 mr-4 my-5">
          <h2 className="text-lg font-semibold mb-4">Auto Bill Payments</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Utilities</td>
                <td className="px-6 py-4 whitespace-nowrap">$50</td>
                <td className="px-6 py-4 whitespace-nowrap">Monthly</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Internet</td>
                <td className="px-6 py-4 whitespace-nowrap">$75</td>
                <td className="px-6 py-4 whitespace-nowrap">Monthly</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment History Section */}
        <div className="bg-white p-6 rounded-lg shadow-md ml-9 mr-4 my-5">
          <h2 className="text-lg font-semibold mb-4">Payment History</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayBills;
