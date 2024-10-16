import React from "react";
import { Link } from "react-router-dom";
import loginPic from "../assets/img/login.svg";
import intellihive from "../assets/logo/intellihive.svg";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: Logo and Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-12">
        <div className="mb-8">
          <img src={intellihive} alt="Intellihive" className=" w-60 " />
        </div>

        {/* Login Form */}
        <form className="space-y-6 w-3/4 max-w-sm">
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

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-lg px-4 py-2"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox " />
              <span className="text-sm">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-[#004A98] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <Link
            to="/"
            type="submit"
            className="btn bg-[#004A98] text-white w-full rounded-lg py-2"
          >
            Login
          </Link>

          {/* Sign-up link */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              href="#"
              className="text-[#004A98] font-medium hover:underline"
              to="/signup"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Right side: Blue section with picture */}
      <div className="hidden md:flex flex-col w-1/2 bg-[#004A98] rounded-3xl mx-8 my-4 items-center justify-center">
        <h1 className="text-3xl font-semibold text-white mb-28">
          Welcome to your Financial Dashboard
        </h1>
        <img
          src={loginPic}
          alt="Login illustration"
          className="w-3/4 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
