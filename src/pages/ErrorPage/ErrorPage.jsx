import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center text-white">

        <h1 className="text-8xl font-extrabold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-white/80 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;