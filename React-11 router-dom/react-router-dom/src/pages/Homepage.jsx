import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Modern Web Apps Faster 
          </h2>
          <p className="mt-4 text-gray-600">
            Create beautiful, responsive, and scalable applications using React
            and Tailwind CSS. This homepage is clean, modern, and production-ready.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl">💻</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Fast Performance</h4>
            <p className="text-gray-600 text-sm">
              Optimized UI with smooth performance and fast rendering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
            <p className="text-gray-600 text-sm">
              Works perfectly on mobile, tablet, and desktop devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Modern UI</h4>
            <p className="text-gray-600 text-sm">
              Clean and modern interface built with Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


export default HomePage