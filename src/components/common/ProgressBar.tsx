import React from 'react';

interface ProgressBarProps {
  currentStep: number; // 0=Home, 1=Setup, 2=Swipe
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-2">
        {[0, 1, 2].map((step) => (
          <div 
            key={step} 
            className={`w-2.5 h-2.5 rounded-full ${step <= currentStep ? 'bg-[#A5D2C5]' : 'bg-[#E1E8EE]'}`} 
          />
        ))}
      </div>
    </div>
  );
};
