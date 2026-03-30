import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
            <p className="text-sm text-gray-400">
              Building modern, scalable, and high-performance web applications
              using React and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Docs</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Tutorials</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Ghaziabad, India</li>
              <li>📞 +91 9876543210</li>
              <li>✉️ info@mybrand.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-sm text-gray-500">
            © 2026 MyBrand. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
            <span className="hover:text-white cursor-pointer">GitHub</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer