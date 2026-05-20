import React from 'react';
import AppIcon from '../assets/icon.png';
import { useNavigate } from 'react-router-dom';

// ★追加：保存した飲み会画像をインポート（ファイル名は実際の名前・拡張子に合わせて変更してください）
import KanpaiImage from '../assets/home.png';

const DokoikuHomeScreen = () => {
  const navigate = useNavigate();

  return (
    // App.tsxの枠の中で綺麗に広がる設定
    <div className="flex-1 bg-[#F8F6F3] flex flex-col p-4 pt-6 overflow-y-auto">
      
      {/* グローバルヘッダー（カードの外側） */}
      <div className="relative flex justify-center items-center mb-6 min-h-[44px]">
        {/* アイコンとプロダクト名（中央配置） */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden shrink-0">
            <img 
              src={AppIcon} 
              alt="DOKOIKU ロゴ" 
              className="w-full h-full object-contain object-bottom scale-110 mix-blend-multiply" 
            />
          </div>
          <h1 className="text-xl font-black text-gray-900 tracking-wider">
            DOKOIKU
          </h1>
        </div>
      </div>

      {/* メインの設定カード */}
      <div className="bg-white rounded-[2rem] p-5 shadow-sm w-full mb-4">
        
        {/* プログレスバー（カード内の最上部に配置） */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A5D2C5]"></div> {/* ステップ0: アクティブ */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E1E8EE]"></div> {/* ステップ1: 非アクティブ */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#E1E8EE]"></div> {/* ステップ2: 非アクティブ */}
          </div>
        </div>

        {/* ★変更：UnsplashのURLから、インポートしたローカル画像に変更★ */}
        <div className="mb-6">
          <img 
            src={KanpaiImage} 
            alt="居酒屋での飲み会で楽しそうに乾杯する人々" 
            className="w-full aspect-video object-cover rounded-[1.5rem]"
          />
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col gap-3.5 mb-6">
          <button
            onClick={() => navigate('/setup')}
            className="w-full py-3.5 bg-[#FF7162] hover:bg-[#FF5D4C] text-white text-[15px] font-bold rounded-full shadow-[0_4px_12px_rgba(255,113,98,0.3)] transition-all active:scale-95">
            お店を決める（幹事）
          </button>
          
          <button className="w-full py-3.5 bg-white border-[1.5px] border-[#E1E8EE] hover:bg-gray-50 text-[#5C6B7A] text-[15px] font-bold rounded-full transition-all active:scale-95">
            招待URLから参加
          </button>
        </div>

        {/* 使い方ステップ */}
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
  );
};

export default DokoikuHomeScreen;