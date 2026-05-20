import React from 'react';
import AppIcon from '../assets/icon.png';

const DokoikuHomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      <div className="w-full max-w-[375px] min-h-[100dvh] sm:min-h-[812px] bg-[#F8F6F3] relative overflow-x-hidden overflow-y-auto shadow-2xl sm:rounded-[2.5rem] flex flex-col p-4 sm:pt-10">
        
        <div className="bg-white rounded-[2rem] p-5 shadow-sm w-full mt-4 mb-4">
          
          <div className="flex gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A5D2C5]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E1E8EE]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#E1E8EE]"></div>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-14 h-14 flex items-center justify-center overflow-hidden shrink-0">
              <img 
                src={AppIcon} 
                alt="DOKOIKU ロゴ" 
                className="w-full h-full object-contain object-bottom scale-110" 
              />
            </div>
            <h1 className="text-xl font-black text-gray-900 tracking-wider">
              DOKOIKU
            </h1>
          </div>

          <div className="mb-6">
            <img 
              src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400&h=225" 
              alt="楽しく食事をする人々" 
              className="w-full aspect-video object-cover rounded-[1.5rem]"
            />
          </div>

          <div className="flex flex-col gap-3.5 mb-6">
            <button className="w-full py-3.5 bg-[#FF7162] hover:bg-[#FF5D4C] text-white text-[15px] font-bold rounded-full shadow-[0_4px_12px_rgba(255,113,98,0.3)] transition-all active:scale-95">
              お店を決める（幹事）
            </button>
            
            <button className="w-full py-3.5 bg-white border-[1.5px] border-[#E1E8EE] hover:bg-gray-50 text-[#5C6B7A] text-[15px] font-bold rounded-full transition-all active:scale-95">
              招待URLから参加
            </button>
          </div>

          <div className="pt-5 border-t border-gray-100">
            <h2 className="text-[15px] font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>
              使い方
            </h2>
            
            <div className="flex flex-col gap-2.5">
              {/* Step 1 */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                <div className="w-7 h-7 rounded-full bg-[#FF7162] text-white flex items-center justify-center text-[13px] font-black shrink-0">1</div>
                <p className="text-[13px] text-gray-600 font-bold">幹事がお店の条件を設定</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                <div className="w-7 h-7 rounded-full bg-[#FF7162] text-white flex items-center justify-center text-[13px] font-black shrink-0">2</div>
                <p className="text-[13px] text-gray-600 font-bold">参加者にURLをシェア</p>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                <div className="w-7 h-7 rounded-full bg-[#FF7162] text-white flex items-center justify-center text-[13px] font-black shrink-0">3</div>
                <p className="text-[13px] text-gray-600 font-bold">みんなで直感スワイプ！</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DokoikuHomeScreen;