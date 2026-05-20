import { useState } from 'react';
import { MapPin, DollarSign, Users, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Setup() {
  const navigate = useNavigate();
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState('4000');
  const [count, setCount] = useState('4');

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!area) return alert('エリアを入力してください！');
    
    // TODO: ここでSupabaseにデータを送り、ルームIDを発行する
    alert(`ルームを作成します\nエリア: ${area}\n予算: 〜${budget}円\n人数: ${count}人`);
  };

  return (
    <div className="flex-1 flex flex-col p-6">
      {/* ヘッダー部 */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-full text-gray-600">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-gray-800">条件を設定</h2>
        <div className="w-10"></div> {/* 左右対称にするためのダミー */}
      </div>

      {/* 入力フォーム */}
      <form onSubmit={handleCreateRoom} className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          {/* エリア入力 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 flex items-center gap-1">
              <MapPin className="w-4 h-4 text-orange-500" /> どこで集まる？
            </label>
            <input
              type="text"
              placeholder="例：新宿駅, 渋谷"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-gray-800"
            />
          </div>

          {/* 予算選択 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-orange-500" /> 予算の上限は？
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-gray-800 appearance-none"
            >
              <option value="2000">〜2,000円 (ランチ目安)</option>
              <option value="4000">〜4,000円 (通常の飲み会)</option>
              <option value="6000">〜6,000円 (ちょっと贅沢)</option>
            </select>
          </div>

          {/* 人数選択 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 flex items-center gap-1">
              <Users className="w-4 h-4 text-orange-500" /> 何人で遊ぶ？
            </label>
            <select
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-gray-800 appearance-none"
            >
              <option value="2">2人</option>
              <option value="4">3〜4人</option>
              <option value="6">5〜6人</option>
              <option value="10">7人以上</option>
            </select>
          </div>
        </div>

        {/* ルーム作成ボタン */}
        <button
          type="submit"
          className="w-full py-4 bg-gray-800 text-white font-bold text-lg rounded-2xl shadow-lg transition-all duration-200 active:scale-95 mt-8 hover:bg-gray-900"
        >
          ルームを作成する
        </button>
      </form>
    </div>
  );
}