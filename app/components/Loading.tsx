import React from "react";

function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-2 py-6 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded mb-4"></div>
            <div className="h-64 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
