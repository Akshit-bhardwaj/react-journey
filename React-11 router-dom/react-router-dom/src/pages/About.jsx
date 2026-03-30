import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>

        {/* Intro Section */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          We are a passionate team dedicated to building modern, scalable, and
          user-friendly web applications using the latest technologies like
          React and Tailwind CSS.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to simplify development and help developers build
              high-quality applications faster. We focus on clean code,
              performance, and great user experience.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We aim to become a leading platform that empowers developers
              worldwide by providing tools, resources, and knowledge to build
              amazing digital products.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We focus on writing clean, maintainable, and efficient code.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We constantly explore new technologies and improve our solutions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We believe teamwork and communication are key to success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutPage