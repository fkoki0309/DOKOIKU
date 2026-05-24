import React from 'react';

interface ProgressBarProps {
  // 0: Home (アプリの説明)
  // 1: Setup (幹事の条件設定)
  // 2: GenreSwipe (ジャンルスワイプ)
  // 3: ShopSwipe & Result (お店スワイプ・決定)
  currentStep: number; 
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((step) => (
          <div 
            key={step} 
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              step <= currentStep ? 'bg-[#A5D2C5]' : 'bg-[#E1E8EE]'
            }`} 
          />
        ))}
      </div>
    </div>
  );
};