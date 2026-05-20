import React from 'react';
import { Header } from './Header';
import { ProgressBar } from './ProgressBar';

interface PageLayoutProps {
  children: React.ReactNode;
  step: number;
  showBackButton?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, step, showBackButton = false }) => {
  return (
    <div className="flex-1 bg-[#F8F6F3] flex flex-col p-4 pt-6 overflow-y-auto">
      <Header showBackButton={showBackButton} />
      <div className="bg-white rounded-[2rem] p-5 shadow-sm w-full mb-4 flex-1 flex flex-col relative">
        <ProgressBar currentStep={step} />
        {/* ここに各ページ固有の中身（イラストやフォーム）が入る */}
        {children}
      </div>
    </div>
  );
};