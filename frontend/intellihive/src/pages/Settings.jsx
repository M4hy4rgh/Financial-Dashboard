import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [currency, setCurrency] = useState("USD"); // Default currency
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSaveSettings = () => {
    // Logic to save settings
    alert("Settings saved successfully!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Logic to change the password
      alert("Password changed successfully!");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div
      className={`min-h-screen grid grid-cols-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Fixed Navbar */}
      <div className="col-span-1 min-w-[10rem] max-w-[10rem] bg-[#f4f7fe] h-full">
        <Navbar />
      </div>

      {/* Settings Content */}
      <div className="col-span-4 px-8 py-5">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>

        

        {/* Currency Preferences */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-5">
          <h2 className="text-lg font-semibold mb-4">Currency Preferences</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="select select-bordered w-full rounded-lg px-4 py-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </select>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-5">
          <h2 className="text-lg font-semibold mb-4">Display Settings</h2>
          <div className="flex items-center">
            <label className="mr-4 text-sm">Dark Mode</label>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggleDarkMode}
              className="toggle toggle-primary"
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-5">
          <h2 className="text-lg font-semibold mb-4">
            Notification Preferences
          </h2>
          <div className="flex items-center">
            <label className="mr-4 text-sm">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="toggle toggle-primary"
            />
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-5">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                placeholder="Enter your current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                placeholder="Enter your new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input input-bordered w-full rounded-lg px-4 py-2"
                placeholder="Confirm your new password"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#004A98] text-white py-2 px-4 rounded-lg mt-4"
            >
              Change Password
            </button>
          </form>
        </div>

        {/* Save Settings Button */}
        <div className="flex">
          <button
            onClick={handleSaveSettings}
            className="btn bg-[#004A98] text-white py-2 px-4 rounded-lg"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
