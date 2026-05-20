import React from 'react';

interface BudgetSelectorProps {
  budget: string;
  setBudget: (val: string) => void;
}

export const BudgetSelector: React.FC<BudgetSelectorProps> = ({ budget, setBudget }) => {
  const budgetOptions = ['2000円以内', '3000円以内', '5000円以内', '指定なし'];

  return (
    <div className="mb-8">
      <label className="text-[14px] font-black text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>予算感
      </label>
      <div className="grid grid-cols-2 gap-3">
        {budgetOptions.map((price) => (
          <button 
            key={price} 
            onClick={() => setBudget(price)} 
            className={`py-3.5 rounded-2xl border-2 transition-all font-black text-[14px] ${budget === price ? 'border-[#FF7162] bg-[#FFF5F4] text-[#FF7162]' : 'border-gray-50 bg-gray-50 text-gray-400'}`}
          >
            {price}
          </button>
        ))}
      </div>
    </div>
  );
};