// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-700 dark:text-blue-400">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          We are a dedicated team focused on delivering innovative solutions in web and app development. Our mission is to create impactful digital experiences that help businesses thrive in today's fast-paced digital landscape.
        </p>
        <p className="text-lg leading-relaxed">
          Our team of experts is committed to excellence, leveraging cutting-edge technology to turn your vision into reality with precision, style, and a client-centered approach.
        </p>
      </div>
    </div>
  );
};

export default About;

