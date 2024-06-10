import React from "react";

function Third() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen px-4 border-b-2">
      <div className="max-w-6xl w-full flex flex-col md:flex-row p-6">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-left text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Value <br /> proposition.
          </h1>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-purple-600 mx-8"></div>

        {/* Right Column */}
        <div className="flex-1 mt-8 md:mt-0">
          <p className="text-black text-left text-base md:text-lg">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text.
          </p>
          <div className="mt-6 text-left">
            <button className="px-6 md:px-8 py-3 bg-purple-600 text-white text-base md:text-lg font-bold rounded shadow-lg hover:bg-purple-700 focus:outline-none">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
