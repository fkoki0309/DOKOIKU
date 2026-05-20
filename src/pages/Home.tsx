import React from 'react';
import { useNavigate } from 'react-router-dom';
import KanpaiImage from '../assets/home.png';
// 作成した共通レイアウトをインポート
import { PageLayout } from '../components/common/PageLayout';

const Home = () => {
  const navigate = useNavigate();

  return (
    // step={0} で最初のドットを光らせる。戻るボタンは不要なので showBackButton は渡さない
    <PageLayout step={0}>
      
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
      <div className="pt-5 border-t border-gray-100 mt-auto">
        <h2 className="text-[15px] font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#A5D2C5] rounded-full"></span>使い方
        </h2>
        <div className="flex flex-col gap-2.5">
          {[
            { num: 1, text: '幹事がお店の条件を設定' },
            { num: 2, text: '参加者にURLをシェア' },
            { num: 3, text: 'みんなで直感スワイプ！' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
              <div className="w-7 h-7 rounded-full bg-[#FF7162] text-white flex items-center justify-center text-[13px] font-black shrink-0">{s.num}</div>
              <p className="text-[13px] text-gray-600 font-bold">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

    </PageLayout>
  );
};

export default Home;