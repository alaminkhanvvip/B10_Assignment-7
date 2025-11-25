import React, { useEffect } from 'react';

export default function FancyAlert({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white border border-yellow-200 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center animate-bounce-in">
        <div className="text-3xl mb-2">🎉</div>
        <div className="font-bold text-lg text-gray-800 mb-1">{message}</div>
        <button
          className="mt-2 px-4 py-1 bg-[#e7fe29] rounded-lg font-semibold text-black border border-[#1313131A] hover:bg-yellow-200 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Add a simple bounce-in animation
// In your global CSS (e.g., App.css), add:
// @keyframes bounce-in { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); } }
// .animate-bounce-in { animation: bounce-in 0.5s; } 