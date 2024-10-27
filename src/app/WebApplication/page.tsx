import React from 'react';

const WebApplication = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-6">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-400">
          Web Development
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-justify">
          Our web development team specializes in creating modern, responsive, and high-performance websites tailored to your business needs. We leverage the latest technologies to deliver exceptional user experiences and provide scalable solutions that grow with your business.
        </p>

        <h1 className="text-3xl font-semibold mb-4 text-center text-green-600 dark:text-green-300">
          App Development
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          Our app development services bring your ideas to life on mobile platforms. From planning and design to development and deployment, we create user-friendly and engaging mobile applications that keep your customers connected and your business thriving.
        </p>
      </div>
    </div>
  );
};

export default WebApplication;
