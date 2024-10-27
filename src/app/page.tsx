
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-orange-300">
      <h1 className="flex space-x-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg text-xl font-semibold">
        <Link 
          href="/About" 
          className="hover:text-blue-500 transition duration-300 relative group"
        >
          About
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link 
          href="/Contact" 
          className="hover:text-blue-500 transition duration-300 relative group"
        >
          Contact
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link 
          href="/WebApplication" 
          className="hover:text-blue-500 transition duration-300 relative group"
        >
          Service
          <span className="absolute left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </h1>
    </div>
  );
}
