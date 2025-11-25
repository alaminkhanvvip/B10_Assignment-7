import React from 'react'

export default function Footer() {
  return (
    <footer className="absolute left-0 bg-[#06091a] text-white w-full pt-[70px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-left">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-300">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Services</a></li>
            <li><a href="#" className="hover:underline text-gray-300">About</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Contact</a></li>
          </ul>
        </div>
        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-xl bg-gray-100 text-black text-sm border-none outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-xl font-semibold text-black border-none shadow-inner"
              style={{
                boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)',
                background: 'rgb(231, 254, 41)',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500 px-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</div>
    </footer>
  )
}

