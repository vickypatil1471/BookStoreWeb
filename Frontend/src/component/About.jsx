import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 mb-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About <span className="text-pink-500">Finolex Knowledge Hub</span>
      </h1>

      <p className="text-lg text-center mb-10">
        Your digital library to explore, learn, and grow every day 📚
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p>
            Finolex Knowledge Hub is an online book store and learning platform
            created for students and readers of Finolex College. Our mission is
            to make quality books and courses easily accessible for everyone.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
          <p>
            We aim to encourage continuous learning by providing free and paid
            resources that help students build skills and achieve their goals.
          </p>
        </div>

        <div className="bg-base-200 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>📘 Wide range of books & courses</li>
            <li>🎓 Special focus on students</li>
            <li>💡 Easy to use platform</li>
            <li>🚀 Learn something new every day</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
