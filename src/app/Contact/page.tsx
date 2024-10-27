// pages/contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed">
          We’d love to hear from you! Whether you have a question about our services, need assistance, 
          or just want to talk, our team is here to help. Reach out to us anytime, and we’ll do our best 
          to get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
