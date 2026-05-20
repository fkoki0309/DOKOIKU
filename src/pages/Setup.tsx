import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppIcon from '../assets/icon.png';

const Setup = () => {
  const navigate = useNavigate();
  
  const [people, setPeople] = useState<number | string>(2);
  const [budget, setBudget] = useState('3000円以内');
  
  const [selectedGenreCodes, setSelectedGenreCodes] = useState<string[]>(['G001', 'G008']);
  const [customKeywords, setCustomKeywords] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  
  const [genreError, setGenreError] = useState<string>('');

  const budgetOptions = ['2000円以内', '3000円以内', '5000円以内', '指定なし'];
  
  const genreOptions = [
    { code: 'G001', label: '居酒屋' },
    { code: 'G008', label: '焼肉' },
    { code: 'G004', label: '和食' },
    { code: 'G006', label: 'イタリアン' },
    { code: 'G007', label: '中華' },
    { code: 'G009', label: '韓国料理' },
    { code: 'G014', label: 'カフェ' },
    { code: 'G013', label: 'ラーメン' },
    { code: 'G002', label: 'バル' },
    { code: 'G005', label: '洋食' },
    { code: 'G010', label: 'アジアン' },
    { code: 'G016', label: 'お好み焼き' },
  ];

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') { setPeople(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) setPeople(num);
  };
  const handlePeopleBlur = () => {
    if (people === '' || typeof people !== 'number' || people < 2) setPeople(2);
  };
  const adjustPeople = (amount: number) => {
    const current = typeof people === 'number' ? people : 2;
    setPeople(Math.max(2, current + amount));
  };

  const getTotalSelectedCount = () => selectedGenreCodes.length + customKeywords.length;

  // ★変更：引数でメッセージを受け取れるように修正
  const showGenreError = (msg: string) => {
    setGenreError(msg);
    setTimeout(() => {
      setGenreError('');
    }, 3000);
  };

  const addMasterGenre = (code: string) => {
    setGenreError('');
    if (!selectedGenreCodes.includes(code)) {
      // ★追加：12個以上の場合はエラーを出して追加させない
      if (getTotalSelectedCount() >= 12) {
        showGenreError('選択できるジャンルは最大12個までです！');
        return;
      }
      setSelectedGenreCodes([...selectedGenreCodes, code]);
    }
  };

  const removeMasterGenre = (code: string) => {
    if (getTotalSelectedCount() <= 1) {
      showGenreError('最低でも1つのジャンルを選択してください！');
      return;
    }
    setSelectedGenreCodes(selectedGenreCodes.filter(c => c !== code));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (trimmed && !customKeywords.includes(trimmed)) {
      // ★追加：12個以上の場合はエラーを出して追加させない
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

  const handleSubmit = () => {
    console.log('genre:', selectedGenreCodes.join(','));
    console.log('keyword:', customKeywords.join(' '));
  };

  const selectedMasterGenres = genreOptions.filter(g => selectedGenreCodes.includes(g.code));
  const unselectedMasterGenres = genreOptions.filter(g => !selectedGenreCodes.includes(g.code));

  return (
    <div className="flex-1 bg-[#F8F6F3] flex flex-col p-4 pt-6 overflow-y-auto">
      <div className="flex items-center gap-4 mb-6 px-1">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-400 active:scale-95 transition-all shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
            <img src={AppIcon} alt="DOKOIKU ロゴ" className="w-full h-full object-contain object-bottom scale-110 mix-blend-multiply" />
          </div>
          <h1 className="text-xl font-black text-gray-900 tracking-wider">DOKOIKU</h1>
        </div>
      </div>

<div className="bg-white rounded-[2rem] p-6 shadow-sm w-full">
        
        {/* ★追加：インジケーター（ドット）: セットアップはステップ1 */}
        <div className="flex gap-2 mb-5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A5D2C5]"></div> {/* 0: アクティブ */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#A5D2C5]"></div> {/* 1: アクティブ */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#E1E8EE]"></div> {/* 2: 非アクティブ */}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-black text-gray-900 tracking-wider mb-2">条件をセット</h2>
          <p className="text-xs text-gray-400 font-bold">みんなでお店を絞り込みましょう！</p>
        </div>

        <div className="mb-8">
          <label className="text-[14px] font-black text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>参加人数
          </label>
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded-2xl">
            <button onClick={() => adjustPeople(-1)} className="w-12 h-12 bg-white rounded-xl shadow-sm text-gray-400 font-black text-xl active:scale-95 transition-all flex items-center justify-center hover:text-[#FF7162]">
              −
            </button>
            <div className="flex items-center justify-center">
              <input type="number" inputMode="numeric" value={people} onChange={handlePeopleChange} onBlur={handlePeopleBlur} className="w-14 bg-transparent text-center text-[20px] font-black text-gray-800 outline-none placeholder-gray-300" placeholder="2" />
              <span className="text-[14px] text-gray-500 font-black ml-1">人</span>
            </div>
            <button onClick={() => adjustPeople(1)} className="w-12 h-12 bg-white rounded-xl shadow-sm text-gray-400 font-black text-xl active:scale-95 transition-all flex items-center justify-center hover:text-[#FF7162]">
              ＋
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="text-[14px] font-black text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>予算感
          </label>
          <div className="grid grid-cols-2 gap-3">
            {budgetOptions.map((price) => (
              <button key={price} onClick={() => setBudget(price)} className={`py-3.5 rounded-2xl border-2 transition-all font-black text-[14px] ${budget === price ? 'border-[#FF7162] bg-[#FFF5F4] text-[#FF7162]' : 'border-gray-50 bg-gray-50 text-gray-400'}`}>
                {price}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {/* ★変更：ラベルの横に「(現在 〇/12)」のカウンターを追加 */}
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
              disabled={!inputText.trim() || getTotalSelectedCount() >= 12} // ★変更：上限時は追加ボタンも無効化
              className="bg-[#5C6B7A] disabled:bg-gray-200 text-white px-5 rounded-xl text-[13px] font-bold transition-all"
            >
              追加
            </button>
          </form>

          <div className="flex flex-wrap gap-2 mb-6 p-3 bg-gray-50 rounded-2xl min-h-[60px] relative">
            {selectedMasterGenres.map((genre) => (
              <button
                key={genre.code}
                onClick={() => removeMasterGenre(genre.code)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all bg-[#A5D2C5] text-white flex items-center gap-1 shadow-sm active:scale-95 ${genreError.includes('最低') ? 'animate-pulse' : ''}`}
              >
                {genre.label} <span className="text-white/80 text-lg leading-none ml-1">×</span>
              </button>
            ))}
            {customKeywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => removeCustomKeyword(keyword)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all bg-[#A5D2C5] text-white flex items-center gap-1 shadow-sm active:scale-95 ${genreError.includes('最低') ? 'animate-pulse' : ''}`}
              >
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
                    className={`px-3 py-1.5 rounded-full text-[13px] font-bold border-2 transition-all flex items-center gap-1 active:scale-95
                      ${getTotalSelectedCount() >= 12 
                        ? 'border-gray-50 bg-gray-50 text-gray-300 cursor-not-allowed' 
                        : 'border-gray-100 bg-white text-gray-500 hover:border-[#A5D2C5] hover:text-[#A5D2C5]'}`}
                  >
                    <span className="text-lg leading-none mb-0.5">＋</span> {genre.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
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
      </div>
    </div>
  );
};

export default Setup;