import React from "react";

const Loader = ({text}) => {
    return (
        <div className="flex justify-center items-center min-h-screen space-x-2">
            <span className="loading loading-spinner loading-lg bg-[#112D4E]"></span>
            <p className="text-lg font-semibold text-[#112D4E]"> 
                {text ? text : "Loading..."}
            </p>
        </div>
    );
};

export default Loader;
