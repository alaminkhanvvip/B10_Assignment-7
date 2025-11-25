import React from 'react';
import bgShadow from '../assets/bg-shadow.png';

export default function Newsletter() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div
        className="relative w-[845px] h-[336px] flex flex-col items-center justify-center gap-[10px] p-6 rounded-[24px] border-2 border-white mx-[10px] my-0 overflow-hidden"
        style={{
          boxSizing: 'border-box',
          background: 'rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Blurred background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `url(${bgShadow}) center/cover no-repeat`,
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />
        {/* Content */}
        <div className="relative z-10 w-[561px] flex flex-col items-center justify-center mx-auto">
          <h1 className="text-black text-2xl font-bold mb-1">Subscribe to our Newsletter</h1>
          <p className="text-gray-700 mb-2">Get the latest updates and news right in your inbox!</p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-xl bg-gray-100 text-black text-base border-none outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-r-xl font-semibold text-black border-none shadow-inner"
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
    </div>
  );
}
