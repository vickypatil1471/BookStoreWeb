import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 mb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Contact <span className="text-pink-500">Us</span>
      </h1>

      <p className="text-lg text-center mb-10">
        We'd love to hear from you! ✉️
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>
            Have questions about books, courses, or anything else? Reach out to
            us and we’ll get back to you soon.
          </p>

          <div className="space-y-2">
            <p>📍 Finolex College, Ratnagiri, Maharashtra</p>
            <p>📧 Email: support@finolexhub.com</p>
            <p>📞 Phone: +91 7972204257</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-200 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded-md outline-none"
            ></textarea>

            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
