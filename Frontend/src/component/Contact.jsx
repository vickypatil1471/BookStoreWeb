import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5001/contact", {
        name,
        email,
        message,
      });

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message"+error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="max-w-screen-2xl mx-auto px-6 md:px-20 mt-28 mb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact <span className="text-pink-500">Us</span>
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you ✉️
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT INFO */}
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about books, courses, or anything else?  
              Reach out and we’ll respond shortly.
            </p>

            <div className="space-y-2 text-gray-700">
              <p>📍 Finolex College, Ratnagiri, Maharashtra</p>
              <p>📧 support@finolexhub.com</p>
              <p>📞 +91 7972204257</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
          >
            <h2 className="text-2xl font-semibold mb-2">Send a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
