import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hair Salon</h2>
          <p className="text-gray-300">
            Your trusted beauty partner for hair, skin, and spa care. Step into elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Problems</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <ul className="text-gray-300 space-y-1">
            <li>Sun – Thu: 10:00 AM – 8:00 PM</li>
            <li>Friday: 3:00 PM – 8:00 PM</li>
            <li>Saturday: Closed</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">📍 123 Beauty St, Dhaka</p>
          <p className="text-gray-300">📞 +880 1234 567890</p>
          <p className="text-gray-300">✉️ info@glamoursalon.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} Hair Salon. All rights reserved.
      </div>
    </footer>
  );
}
