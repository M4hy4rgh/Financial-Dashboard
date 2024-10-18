import React from "react";
import { SlMagnifier } from "react-icons/sl";

const HeaderComponent = ({ title, placeholder }) => {
    return (
        <div className="col-span-4">
            {/* Heading */}
            <div className="flex justify-between items-center py-3">
                <h1 className="font-sans font-bold text-lg">{title}</h1>
                <div className="relative w-full max-w-md">
                    {/* Magnifier Icon */}
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                        <SlMagnifier />
                    </span>
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="input input-bordered w-full pl-10 rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
