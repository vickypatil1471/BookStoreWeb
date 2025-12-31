import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Press() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="max-w-2xl bg-base-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Press Kit</h2>
          <p className="mb-4">
            Welcome to the Finolex Knowledge Hub press resources.
          </p>
          <p className="mb-2">
            Here you can find our brand assets, logos, and latest announcements.
          </p>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>📄 Company Overview PDF</li>
            <li>🖼️ Logo Pack</li>
            <li>📰 Latest News & Updates</li>
          </ul>
          <p className="mt-4">
            For media inquiries, contact:{" "}
            <span className="text-blue-500">press@finolexhub.com</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Press;
