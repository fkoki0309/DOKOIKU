import React, { useState } from 'react';
import { PageLayout } from '../components/common/PageLayout';

// 作成した3つのコンポーネントをインポート
import { PeopleInput } from '../components/setup/PeopleInput';
import { BudgetSelector } from '../components/setup/BudgetSelector';
import { GenreSelector } from '../components/setup/GenreSelector';

const Setup = () => {
  // API送信に必要な「最終データ」だけをここで管理する
  const [people, setPeople] = useState<number | string>(2);
  const [budget, setBudget] = useState('3000円以内');
  const [selectedGenreCodes, setSelectedGenreCodes] = useState<string[]>(['G001', 'G008']);
  const [customKeywords, setCustomKeywords] = useState<string[]>([]);

  const handleSubmit = () => {
    // ここでAPIにデータを送ったり、スワイプ画面へ遷移する
    console.log({
      people,
      budget,
      genre: selectedGenreCodes.join(','),
      keyword: customKeywords.join(' '),
    });
  };

  return (
    <PageLayout step={1} showBackButton={true}>
      
      <div className="mb-8 text-center">
        <h2 className="text-[18px] font-black text-gray-900 tracking-wider mb-2">条件をセット</h2>
        <p className="text-[12px] text-gray-400 font-bold">みんなでお店を絞り込みましょう！</p>
      </div>

      {/* 各コンポーネントに状態と更新関数を渡すだけ！ */}
      <PeopleInput people={people} setPeople={setPeople} />
      
      <BudgetSelector budget={budget} setBudget={setBudget} />
      
      <GenreSelector 
        selectedCodes={selectedGenreCodes} 
        setSelectedCodes={setSelectedGenreCodes}
        customKeywords={customKeywords}
        setCustomKeywords={setCustomKeywords}
      />

      {/* アクションボタン */}
      <div className="flex flex-col gap-3 mt-auto">
        <button 
          onClick={handleSubmit}
          className="w-full py-4 bg-[#FF7162] hover:bg-[#FF5D4C] text-white text-[16px] font-bold rounded-full shadow-[0_4px_12px_rgba(255,113,98,0.3)] transition-all active:scale-95"
        >
          部屋を作成して招待
        </button>
        <p className="text-center text-[11px] text-gray-300 font-bold">
          URLをシェアしてスワイプを開始！
        </p>
      </div>

    </PageLayout>
  );
};

export default Setup;