import React, { useState } from 'react';

interface GenreSelectorProps {
  selectedCodes: string[];
  setSelectedCodes: (codes: string[]) => void;
  customKeywords: string[];
  setCustomKeywords: (keywords: string[]) => void;
}

const genreOptions = [
  { code: 'G001', label: '居酒屋' }, { code: 'G008', label: '焼肉' },
  { code: 'G004', label: '和食' }, { code: 'G006', label: 'イタリアン' },
  { code: 'G007', label: '中華' }, { code: 'G009', label: '韓国料理' },
  { code: 'G014', label: 'カフェ' }, { code: 'G013', label: 'ラーメン' },
  { code: 'G002', label: 'バル' }, { code: 'G005', label: '洋食' },
  { code: 'G010', label: 'アジアン' }, { code: 'G016', label: 'お好み焼き' },
];

export const GenreSelector: React.FC<GenreSelectorProps> = ({
  selectedCodes, setSelectedCodes, customKeywords, setCustomKeywords
}) => {
  const [inputText, setInputText] = useState('');
  const [genreError, setGenreError] = useState('');

  const getTotalSelectedCount = () => selectedCodes.length + customKeywords.length;

  const showGenreError = (msg: string) => {
    setGenreError(msg);
    setTimeout(() => setGenreError(''), 3000);
  };

  const addMasterGenre = (code: string) => {
    setGenreError('');
    if (!selectedCodes.includes(code)) {
      if (getTotalSelectedCount() >= 12) {
        showGenreError('選択できるジャンルは最大12個までです！');
        return;
      }
      setSelectedCodes([...selectedCodes, code]);
    }
  };

  const removeMasterGenre = (code: string) => {
    if (getTotalSelectedCount() <= 1) {
      showGenreError('最低でも1つのジャンルを選択してください！');
      return;
    }
    setSelectedCodes(selectedCodes.filter(c => c !== code));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (trimmed && !customKeywords.includes(trimmed)) {
      if (getTotalSelectedCount() >= 12) {
        showGenreError('選択できるジャンルは最大12個までです！');
        return;
      }
      setGenreError('');
      setCustomKeywords([...customKeywords, trimmed]);
      setInputText('');
    }
  };

  const removeCustomKeyword = (keyword: string) => {
    if (getTotalSelectedCount() <= 1) {
      showGenreError('最低でも1つのジャンルを選択してください！');
      return;
    }
    setCustomKeywords(customKeywords.filter(k => k !== keyword));
  };

  const selectedMasterGenres = genreOptions.filter(g => selectedCodes.includes(g.code));
  const unselectedMasterGenres = genreOptions.filter(g => !selectedCodes.includes(g.code));

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <label className="text-[14px] font-black text-gray-800 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>食べたいジャンル
          <span className="text-[11px] text-gray-400 font-bold bg-gray-100 px-2 py-0.5 rounded-md ml-1">
            {getTotalSelectedCount()}/12
          </span>
        </label>
        <span className={`text-[11px] font-bold text-[#FF7162] transition-opacity duration-300 ${genreError ? 'opacity-100' : 'opacity-0'}`}>
          {genreError}
        </span>
      </div>

      <form onSubmit={handleAddCustom} className="flex gap-2 mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="例: 餃子、個室、激辛"
          className="flex-1 bg-gray-50 border-2 border-gray-50 focus:border-[#A5D2C5] focus:bg-white rounded-xl px-4 py-3 text-[13px] font-bold outline-none transition-all placeholder-gray-300"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || getTotalSelectedCount() >= 12}
          className="bg-[#5C6B7A] disabled:bg-gray-200 text-white px-5 rounded-xl text-[13px] font-bold transition-all"
        >
          追加
        </button>
      </form>

      <div className="flex flex-wrap gap-2 mb-6 p-3 bg-gray-50 rounded-2xl min-h-[60px] relative">
        {selectedMasterGenres.map((genre) => (
          <button key={genre.code} onClick={() => removeMasterGenre(genre.code)} className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all bg-[#A5D2C5] text-white flex items-center gap-1 shadow-sm active:scale-95 ${genreError.includes('最低') ? 'animate-pulse' : ''}`}>
            {genre.label} <span className="text-white/80 text-lg leading-none ml-1">×</span>
          </button>
        ))}
        {customKeywords.map((keyword) => (
          <button key={keyword} onClick={() => removeCustomKeyword(keyword)} className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all bg-[#A5D2C5] text-white flex items-center gap-1 shadow-sm active:scale-95 ${genreError.includes('最低') ? 'animate-pulse' : ''}`}>
            {keyword} <span className="text-white/80 text-lg leading-none ml-1">×</span>
          </button>
        ))}
        {getTotalSelectedCount() === 0 && (
          <span className="text-gray-400 text-sm font-bold m-auto">最低1つ選択してください</span>
        )}
      </div>

      {unselectedMasterGenres.length > 0 && (
        <div>
          <p className="text-[12px] text-gray-400 font-bold mb-3">おすすめから追加</p>
          <div className="flex flex-wrap gap-2">
            {unselectedMasterGenres.map((genre) => (
              <button
                key={genre.code}
                onClick={() => addMasterGenre(genre.code)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-bold border-2 transition-all flex items-center gap-1 active:scale-95 ${getTotalSelectedCount() >= 12 ? 'border-gray-50 bg-gray-50 text-gray-300 cursor-not-allowed' : 'border-gray-100 bg-white text-gray-500 hover:border-[#A5D2C5] hover:text-[#A5D2C5]'}`}
              >
                <span className="text-lg leading-none mb-0.5">＋</span> {genre.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};