import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppIcon from '../../assets/icon_v2.png';

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center items-center mb-6 min-h-[44px]">
      {showBackButton && (
        <button 
          onClick={() => navigate(-1)} 
          className="absolute left-0 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-400 active:scale-95 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
          <img src={AppIcon} alt="DOKOIKU ロゴ" className="w-full h-full object-contain object-bottom scale-110 mix-blend-multiply" />
        </div>
        <h1 className="text-xl font-black text-gray-900 tracking-wider">PITAMESHI</h1>
      </div>
    </div>
  );
};