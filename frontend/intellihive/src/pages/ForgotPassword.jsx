import React from "react";
import { Link } from "react-router-dom";
import loginPic from "../assets/img/login.svg";
import intellihive from "../assets/logo/intellihive.svg";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Logo and Forgot Password Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-12">
        <div className="mb-8">
          <img src={intellihive} alt="Intellihive" className="w-60" />
        </div>

        {/* Forgot Password Form  Section*/}
        <form className="space-y-6 w-3/4 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Forgot Password?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg px-4 py-2"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn bg-[#004A98] text-white w-full rounded-lg py-2"
          >
            Send Reset Link
          </button>

          {/* Link to return to the login screen */}
          <div className="text-center text-sm mt-4">
            <Link
              to="/login"
              className="text-[#004A98] font-medium hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>

      {/* Right side: Blue section with picture */}
      <div className="hidden md:flex flex-col w-1/2 bg-[#004A98] rounded-3xl mx-8 my-4 items-center justify-center">
        <h1 className="text-3xl font-semibold text-white mb-28">
          Reset your password and get back on track
        </h1>
        <img
          src={loginPic}
          alt="Forgot Password illustration"
          className="w-3/4 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
