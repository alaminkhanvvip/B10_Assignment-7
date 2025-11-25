import React, { useState } from 'react';
import FancyAlert from './FancyAlert';

const PLAYER_IMAGES = Array.from(
  { length: 24 },
  (_, i) => `https://placehold.co/600x400?text=Player+${i + 1}`
);

const FLAG = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';

const PLACEHOLDER_PLAYERS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Player ${i + 1}`,
  role: 'All-Rounder',
  country: 'USA',
  flag: FLAG,
  rating: Math.floor(Math.random() * 5) + 1,
  price: 100000,
  image: PLAYER_IMAGES[i % PLAYER_IMAGES.length],
}));

export default function Players({ coin, setCoin, selectedPlayers, setSelectedPlayers }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showSelected, setShowSelected] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, PLACEHOLDER_PLAYERS.length));
  };

  const handleChoosePlayer = (player) => {
    if (coin >= player.price && !selectedPlayers.some((p) => p.id === player.id)) {
      setCoin((prev) => {
        const newCoin = prev - player.price;
        localStorage.setItem('coin', newCoin);
        return newCoin;
      });
      setSelectedPlayers((prev) => [...prev, player]);
      setAlertMessage(`${player.name} added to your team!`);
      setShowAlert(true);
    }
  };

  const handleRemovePlayer = (player) => {
    setSelectedPlayers((prev) => prev.filter((p) => p.id !== player.id));
    setCoin((prev) => {
      const newCoin = prev + player.price;
      localStorage.setItem('coin', newCoin);
      return newCoin;
    });
    setAlertMessage(`${player.name} removed from your team!`);
    setShowAlert(true);
  };

  const handleShowAvailable = () => setShowSelected(false);
  const handleShowSelected = () => setShowSelected(true);

  const playersToShow = showSelected ? selectedPlayers : PLACEHOLDER_PLAYERS.slice(0, visibleCount);

  return (
    <div className="w-full px-4 py-6">
      <FancyAlert show={showAlert} message={alertMessage} onClose={() => setShowAlert(false)} />
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-bold leading-[35px] text-left text-[#131313] font-sora">
          {showSelected ? 'Selected Players' : 'Available Players'}
        </h2>
        <div className="flex">
          <button
            className={`px-6 py-2 font-semibold text-[16px] border border-[#1313131A] rounded-l-[12px] ${
              !showSelected ? 'bg-[#e7fe29]' : 'bg-white'
            }`}
            onClick={handleShowAvailable}
          >
            Available
          </button>
          <button
            className={`px-6 py-2 font-semibold text-[16px] border-t border-b border-r border-[#1313131A] rounded-r-[12px] ${
              showSelected ? 'bg-[#e7fe29]' : 'bg-white'
            }`}
            onClick={handleShowSelected}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {/* Player cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {playersToShow.length === 0 && (
          <div className="col-span-3 text-center text-gray-500 py-8">No players to show.</div>
        )}
        {playersToShow.map((player) => (
          <div
            key={player.id}
            className="bg-white rounded-2xl shadow-lg flex flex-col items-center border border-gray-100 p-0 overflow-hidden transition-transform hover:scale-105"
          >
            {/* Top image - full card width */}
            <div className="w-full h-36 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            {/* Card body */}
            <div className="w-full flex flex-col items-center px-4 py-3">
              {/* Profile and name */}
              <div className="flex items-center gap-2 mt-2 mb-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" fill="#e7fe29" />
                  <rect x="6" y="14" width="12" height="6" rx="3" fill="#e7fe29" />
                </svg>
                <span className="font-bold text-lg text-[#131313]">{player.name}</span>
              </div>
              {/* Flag and country */}
              <div className="flex items-center gap-2 mb-1">
                <img src={player.flag} alt="flag" className="w-6 h-4 rounded-sm" />
                <span className="text-sm text-gray-600">{player.country}</span>
              </div>
              {/* Role and Info */}
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-xs font-semibold text-[#131313] bg-[#e7fe29] px-3 py-1 rounded-full">
                  {player.role}
                </span>
                <button className="ml-auto px-2 py-1 text-xs rounded bg-gray-100 font-semibold">
                  Info
                </button>
              </div>
              {/* Rating and stars */}
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-sm font-semibold text-gray-700">Rating:</span>
                <span className="flex items-center ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      fill={i < player.rating ? '#FFD700' : '#E0E0E0'}
                      viewBox="0 0 24 24"
                    >
                      <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
                    </svg>
                  ))}
                </span>
              </div>
              {/* Price and Choose/Remove Player */}
              <div className="flex items-center justify-between w-full mb-2 mt-2">
                <span className="font-bold text-[#b8860b]">
                  {player.price.toLocaleString()} coin
                </span>
                {!showSelected && (
                  <button
                    className="ml-2 px-4 py-1.5 rounded-lg font-semibold text-black bg-[#e7fe29] border border-[#1313131A] disabled:opacity-50"
                    disabled={
                      coin < player.price || selectedPlayers.some((p) => p.id === player.id)
                    }
                    onClick={() => handleChoosePlayer(player)}
                  >
                    {selectedPlayers.some((p) => p.id === player.id) ? 'Chosen' : 'Choose Player'}
                  </button>
                )}
                {showSelected && (
                  <button
                    className="ml-2 px-4 py-1.5 rounded-lg font-semibold text-white bg-red-500 border border-[#1313131A] hover:bg-red-600 transition"
                    onClick={() => handleRemovePlayer(player)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* See More button */}
      {!showSelected && visibleCount < PLACEHOLDER_PLAYERS.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-lg font-semibold text-black"
            style={{
              background: 'rgb(231, 254, 41)',
              boxSizing: 'border-box',
              border: '1px solid rgba(19, 19, 19, 0.1)',
            }}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
