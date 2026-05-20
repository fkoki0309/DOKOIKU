import React from 'react';

interface PeopleInputProps {
  people: number | string;
  setPeople: (val: number | string) => void;
}

export const PeopleInput: React.FC<PeopleInputProps> = ({ people, setPeople }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') { setPeople(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) setPeople(num);
  };

  const handleBlur = () => {
    if (people === '' || typeof people !== 'number' || people < 2) setPeople(2);
  };

  const adjustPeople = (amount: number) => {
    const current = typeof people === 'number' ? people : 2;
    setPeople(Math.max(2, current + amount));
  };

  return (
    <div className="mb-8">
      <label className="text-[14px] font-black text-gray-800 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>参加人数
      </label>
      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-2xl">
        <button onClick={() => adjustPeople(-1)} className="w-12 h-12 bg-white rounded-xl shadow-sm text-gray-400 font-black text-xl active:scale-95 transition-all flex items-center justify-center hover:text-[#FF7162]">
          −
        </button>
        <div className="flex items-center justify-center">
          <input type="number" inputMode="numeric" value={people} onChange={handleChange} onBlur={handleBlur} className="w-14 bg-transparent text-center text-[20px] font-black text-gray-800 outline-none placeholder-gray-300" placeholder="2" />
          <span className="text-[14px] text-gray-500 font-black ml-1">人</span>
        </div>
        <button onClick={() => adjustPeople(1)} className="w-12 h-12 bg-white rounded-xl shadow-sm text-gray-400 font-black text-xl active:scale-95 transition-all flex items-center justify-center hover:text-[#FF7162]">
          ＋
        </button>
      </div>
    </div>
  );
};