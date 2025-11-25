import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar({ coin }) {
  return (
    <nav className="flex items-center justify-between py-2 px-8 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-6" />
      </div>
      {/* Menu */}
      <ul className="flex list-none gap-8 m-0 p-0 w-3/5 justify-end">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Fixture</li>
        <li className="cursor-pointer">Teams</li>
        <li className="cursor-pointer">Schedules</li>
      </ul>
      {/* Coin */}
      <div className="flex items-center gap-2 py-1.5 px-4 bg-[#fffbe6] rounded-full border border-[#b8860b]">
        <span className="font-semibold text-[#b8860b]">{coin} Coin</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#b8860b" strokeWidth="1.5" fill="#FFEB3B" />
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#B8860B" fontWeight="bold">¢</text>
        </svg>
      </div>
    </nav>
  )
}
