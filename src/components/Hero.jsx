import React from 'react';
import bgShadow from '../assets/bg-shadow.png';
import bannerMain from '../assets/banner-main.png';

export default function Hero({ setCoin }) {
  const handleClaim = () => {
    setCoin((prev) => {
      const newCoin = prev + 1000000;
      localStorage.setItem('coin', newCoin);
      return newCoin;
    });
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] w-full text-center box-border border border-[rgba(19,19,19,0.1)] rounded-[24px]"
      style={{ background: 'rgb(19, 19, 19)' }}
    >
      <img
        src={bgShadow}
        alt="Shadow Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0 rounded-[24px]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center py-12">
        <img
          src={bannerMain}
          alt="Banner Main"
          className="mx-auto mb-6 max-w-xs sm:max-w-md"
        />
        <h1 className="text-white text-2xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-white text-[13px] opacity-60 mb-6">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleClaim}
          className="px-8 py-3 text-black font-semibold text-base rounded-[12px] shadow-inner"
          style={{
            borderRadius: '12px',
            boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)',
            background: 'rgb(231, 254, 41)',
          }}
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
} 