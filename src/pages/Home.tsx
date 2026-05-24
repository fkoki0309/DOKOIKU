import React from 'react';
import { useNavigate } from 'react-router-dom';
import KanpaiImage from '../assets/home.png';
import { PageLayout } from '../components/common/PageLayout';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout step={0}>
      
      <div className="mb-5">
        <img src={KanpaiImage} alt="みんなで楽しく飲み会" className="w-full aspect-video object-cover rounded-[1.5rem] shadow-sm" />
      </div>

      <div className="text-center mb-8 px-2">
        <h2 className="text-[22px] font-black text-gray-800 mb-3 leading-tight tracking-tight">
          「今日どこ行く？」を<br />
          <span className="text-[#FF7162] relative inline-block mt-1">
            スワイプで楽しく決める！
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#A5D2C5]/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="text-[13px] text-gray-500 font-bold leading-relaxed mt-4">
          幹事の「お店探し」の負担をゼロに。<br />
          みんなの好みが<strong className="text-[#FF7162]">ピタッ</strong>と合うお店が、<br />
          ゲーム感覚で簡単に見つかります🍻
        </p>
      </div>

      <div className="flex flex-col gap-3.5 mb-10">
        <button onClick={() => navigate('/setup')} className="w-full py-4 bg-[#FF7162] text-white text-[16px] font-bold rounded-full shadow-[0_4px_12px_rgba(255,113,98,0.3)] transition-all active:scale-95">
          部屋を作ってお誘い（幹事）
        </button>
        <button className="w-full py-4 bg-white border-2 border-gray-100 text-gray-500 text-[15px] font-bold rounded-full transition-all active:scale-95">
          招待URLから参加する
        </button>
      </div>

      {/* お店決定までの流れ */}
      <div className="pt-6 border-t-2 border-dashed border-gray-100 mt-auto mb-2">
        <h2 className="text-[17px] font-black text-gray-800 mb-5 flex items-center gap-2">
          <span className="w-1.5 h-4 bg-[#FF7162] rounded-full"></span>
          お店決定までの流れ
        </h2>

        <div className="flex flex-col gap-3">
          <div className="bg-gray-50 p-4 rounded-2xl flex gap-3">
            <div className="w-6 h-6 rounded-full bg-[#A5D2C5] text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">1</div>
            <div>
              <h3 className="text-[14px] font-black text-gray-800">条件をセット</h3>
              <p className="text-[11px] text-gray-500 font-bold mt-0.5">幹事が予算や人数を設定します。</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-2xl flex gap-3">
            <div className="w-6 h-6 rounded-full bg-[#A5D2C5] text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">2</div>
            <div>
              <h3 className="text-[14px] font-black text-gray-800">ジャンルをスワイプ！</h3>
              <p className="text-[11px] text-gray-500 font-bold mt-0.5">和食？中華？まずは食べたい気分を一致！</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl flex gap-3">
            <div className="w-6 h-6 rounded-full bg-[#A5D2C5] text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">3</div>
            <div>
              <h3 className="text-[14px] font-black text-gray-800">お店をスワイプ！</h3>
              <p className="text-[11px] text-gray-500 font-bold mt-0.5">絞り込まれたお店から行きたい場所を投票。</p>
            </div>
          </div>

          <div className="bg-[#FFF5F4] p-4 rounded-2xl flex gap-3 border border-[#FFE8E6]">
            <div className="w-6 h-6 rounded-full bg-[#FF7162] text-white flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5 shadow-sm">4</div>
            <div>
              <h3 className="text-[14px] font-black text-[#FF7162]">マッチしてお店決定🎉</h3>
              <p className="text-[11px] text-[#FF7162]/80 font-bold mt-0.5">全員一致したお店で乾杯！</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;