import React from "react";
import { Link } from "react-router-dom";

import signup from "../assets/img/signup.svg";
import intellihive from "../assets/logo/intellihive.svg";

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Logo and Sign-Up Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-12">
        <div className="mb-8">
          <img src={intellihive} alt="Intellihive" className="w-60" />
        </div>

        {/* Sign-Up Form */}
        <form className="space-y-6 w-3/4 max-w-sm">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full rounded-lg px-4 py-2"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg px-4 py-2"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full rounded-lg px-4 py-2"
              required
            />
          </div>

          {/* Repeat Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Repeat Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Repeat your password"
              className="input input-bordered w-full rounded-lg px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-[#004A98] text-white w-full rounded-lg py-2"
          >
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#004A98] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right side: Blue section with picture */}
      <div className="hidden md:flex flex-col w-1/2 bg-[#004A98] rounded-3xl mx-8 my-4 items-center justify-center">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Create your Financial Dashboard
        </h1>
        <img src={signup} alt="Sign-Up illustration" className="w-full " />
      </div>
    </div>
  );
};

export default SignUp;
