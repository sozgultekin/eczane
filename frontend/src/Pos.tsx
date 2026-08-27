import React, { useState } from 'react';

export default function Pos() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Parol 500mg Tablet', price: 24.50, rx: false },
    { id: 2, name: 'Kan Sulandırıcı (Warfarin)', price: 150.00, rx: true }
  ]);
  const [showWarning, setShowWarning] = useState(false);

  const addInteractionDrug = () => {
    setShowWarning(true);
    setCart([...cart, { id: 3, name: 'Aspirin 100mg (Etkileşim Riski)', price: 15.00, rx: false }]);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 font-sans h-screen overflow-hidden">
      <header className="bg-white border-b border-slate-200 px-8 py-3 flex justify-between items-center shadow-sm z-10">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Hızlı Satış (POS)</h2>
          <p className="text-xs text-slate-500">PharmSync Hızlı Barkod ve Sepet Sistemi</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right mr-4">
            <div className="text-sm font-bold text-slate-700">Kasiyer: Ecz. Ahmet</div>
            <div className="text-xs text-slate-500">Tarih: 27 Ekim 2026</div>
          </div>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-200">
            Kasa İşlemleri
          </button>
        </div>
      </header>

      {/* KRİTİK İLAÇ ETKİLEŞİM UYARISI */}
      {showWarning && (
        <div className="bg-red-600 text-white p-4 font-bold flex justify-between items-center animate-pulse">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="text-lg">KRİTİK İLAÇ ETKİLEŞİMİ TESPİT EDİLDİ! (AI UYARISI)</h3>
              <p className="text-sm font-medium opacity-90">Hastanın profilinde / sepetinde bulunan 'Warfarin' ile eklediğiniz 'Aspirin' birlikte kullanıldığında yüksek MİDE KANAMASI riski oluşturur!</p>
            </div>
          </div>
          <button onClick={() => setShowWarning(false)} className="px-4 py-2 bg-white text-red-600 rounded-lg text-sm hover:bg-red-50">Uyarıyı Yoksay (Sorumluluk Bende)</button>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Search & Products */}
        <div className="flex-1 flex flex-col border-r border-slate-200 bg-white">
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-slate-400">🔍</span>
              </div>
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-500 rounded-xl text-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 placeholder-slate-400 font-medium" 
                placeholder="İlaç Adı, Barkod okutun veya Hasta TCKN girin... (F2)"
                autoFocus
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Hızlı Ekle & Yapay Zeka Testi</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
              {/* Interaction Test Button */}
              <div onClick={addInteractionDrug} className="bg-white border-2 border-red-200 rounded-xl p-4 cursor-pointer hover:border-red-500 hover:shadow-md transition">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">💊</div>
                  <h4 className="font-bold text-slate-800 text-sm">Aspirin (Test)</h4>
                  <p className="text-red-500 font-bold text-xs mt-1">Etkileşim Uyarısını Gör</p>
                </div>
              </div>

              {/* Product Cards */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">💊</div>
                  <h4 className="font-bold text-slate-800 text-sm">Parol 500mg</h4>
                  <p className="text-blue-600 font-bold mt-1">₺24.50</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">🧴</div>
                  <h4 className="font-bold text-slate-800 text-sm">Bepanthol Krem</h4>
                  <p className="text-blue-600 font-bold mt-1">₺85.90</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Cart / Checkout */}
        <div className="w-96 flex flex-col bg-white">
          <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex justify-between items-center">
            <div>
              <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Aktif Satış</p>
              <h3 className="text-lg font-bold text-emerald-900">Ahmet Özdemir (Kayıtlı)</h3>
            </div>
            <button className="text-emerald-700 text-sm hover:underline font-medium">Değiştir</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div className="flex-1">
                  <h4 className={`font-bold ${item.name.includes('Aspirin') ? 'text-red-600' : 'text-slate-800'}`}>{item.name}</h4>
                  {item.rx && <span className="inline-block px-2 py-0.5 mt-1 bg-blue-100 text-blue-700 text-[10px] rounded font-bold">REÇETELİ</span>}
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-slate-800">₺{item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between items-end mb-6">
              <span className="text-lg font-bold text-slate-700">Genel Toplam</span>
              <span className="text-4xl font-black text-slate-900 tracking-tight">
                ₺{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 transition flex justify-center items-center gap-2">
                💳 Kart
              </button>
              <button className="py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition flex justify-center items-center gap-2 text-lg">
                💵 Nakit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
