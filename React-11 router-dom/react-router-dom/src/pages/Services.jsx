import React from "react";
function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Building responsive and modern websites using React, Tailwind, and modern tools.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      desc: "Designing clean, user-friendly interfaces with great user experience.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      desc: "Creating scalable backend systems with APIs, databases, and authentication.",
      icon: "⚙️",
    },
    {
      title: "Mobile App Development",
      desc: "Building cross-platform mobile apps using React Native.",
      icon: "📱",
    },
    {
      title: "Performance Optimization",
      desc: "Improving app speed, SEO, and overall performance.",
      icon: "⚡",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support, bug fixing, and feature updates for your applications.",
      icon: "🛠️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          We provide a wide range of modern development services to help you
          build scalable and high-quality digital products.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


export default ServicesPage