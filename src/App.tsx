import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Setup from './pages/Setup.tsx';

function App() {
  return (
    <BrowserRouter>
      {/* スマホサイズに固定するための外枠（ラッパー） */}
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-md min-h-screen bg-white shadow-lg flex flex-col relative overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setup" element={<Setup />} />
            {/* 今後、ここに /room/:id などを追加していきます */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;