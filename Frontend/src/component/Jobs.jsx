import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Jobs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="max-w-2xl bg-base-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Careers at Finolex</h2>
          <p className="mb-4">
            Join our team and help build the future of digital learning.
          </p>
          <p className="mb-2">📌 Current Openings:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Content Manager</li>
            <li>Library Assistant</li>
          </ul>
          <p className="mt-4">
            Send your resume to:{" "}
            <span className="text-blue-500">careers@finolexhub.com</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Jobs;
