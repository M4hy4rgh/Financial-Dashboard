import React from "react";
import { Navbar } from "../components";
import profilePic from "../assets/img/profilePic.jpg";

const Profile = () => {
    return (
        <div className="min-h-screen grid grid-cols-5">
            <div className="col-span-1 min-w-[10rem] max-w-[10rem] h-full">
                <Navbar />
            </div>

            {/* Profile Content */}
            <div className="col-span-4 px-8 py-5">
                {/* Profile Header */}
                <div className="flex items-center mt-5 mb-8">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-[#004A98] mr-4"
                    />
                    <div>
                        <h1 className="text-2xl font-semibold">Negin Heidari</h1>
                        <p className="text-gray-600">negin@intelliware.com</p>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-5">
                    <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            First Name:
                        </label>
                        <p className="text-gray-800">Negin</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Last Name:
                        </label>
                        <p className="text-gray-800">Heidari</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number:
                        </label>
                        <p className="text-gray-800">(123) 456-7890</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Address:
                        </label>
                        <p className="text-gray-800">123 Main St, City, Country</p>
                    </div>
                </div>

                {/* Edit Profile */}
                <div className="flex space-x-4 mb-5">
                    <button className="btn bg-[#004A98] text-white py-2 px-4 rounded-lg">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
