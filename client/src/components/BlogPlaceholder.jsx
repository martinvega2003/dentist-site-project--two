import React from "react";
import { FaTooth, FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogPlaceholder = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center px-6">
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-blue-300 text-6xl opacity-20">
        <FaTooth />
      </div>
      <div className="absolute top-20 right-16 text-blue-300 text-7xl opacity-20">
        <FaSmile />
      </div>
      <div className="absolute bottom-10 right-10 text-blue-300 text-6xl opacity-20">
        <FaTooth />
      </div>

      {/* Content */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Blog Placeholder</h1>
        <p className="text-gray-700 text-lg mb-6">
          This is a placeholder page for blog articles. Stay tuned for updates!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default BlogPlaceholder;
