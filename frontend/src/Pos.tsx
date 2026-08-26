import React from 'react';

export default function Pos() {
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
            <div className="text-xs text-slate-500">Tarih: 26 Ekim 2026</div>
          </div>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-200">
            Kasa İşlemleri
          </button>
        </div>
      </header>

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
            <h3 className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Hızlı Ekle (Sık Satılanlar)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">🩹</div>
                  <h4 className="font-bold text-slate-800 text-sm">Yara Bandı (10'lu)</h4>
                  <p className="text-blue-600 font-bold mt-1">₺15.00</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">🧴</div>
                  <h4 className="font-bold text-slate-800 text-sm">Bepanthol Krem</h4>
                  <p className="text-blue-600 font-bold mt-1">₺85.90</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:shadow-md transition">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">💊</div>
                  <h4 className="font-bold text-slate-800 text-sm">Majezik 100mg</h4>
                  <p className="text-blue-600 font-bold mt-1">₺75.50</p>
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
              <h3 className="text-lg font-bold text-emerald-900">Perakende Müşteri</h3>
            </div>
            <button className="text-emerald-700 text-sm hover:underline font-medium">Hasta Seç (F3)</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {/* Cart Item 1 */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Parol 500mg Tablet</h4>
                  <p className="text-xs text-slate-400">8699514000000</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-slate-800">₺24.50</span>
                  <div className="flex items-center gap-2 mt-2 bg-slate-100 rounded-lg p-1">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-blue-600">-</button>
                    <span className="text-sm font-bold w-4 text-center">1</span>
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-blue-600">+</button>
                  </div>
                </div>
              </div>
              
              {/* Cart Item 2 */}
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">Amoxicillin 500mg Kapsül</h4>
                  <p className="text-xs text-slate-400">8699514000021</p>
                  <span className="inline-block px-2 py-0.5 mt-1 bg-blue-100 text-blue-700 text-[10px] rounded font-bold">REÇETELİ</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-slate-800">₺84.00</span>
                  <div className="flex items-center gap-2 mt-2 bg-slate-100 rounded-lg p-1">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-blue-600">-</button>
                    <span className="text-sm font-bold w-4 text-center">2</span>
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-slate-600 hover:text-blue-600">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between text-slate-500 text-sm mb-2">
              <span>Ara Toplam</span>
              <span>₺108.50</span>
            </div>
            <div className="flex justify-between text-slate-500 text-sm mb-4">
              <span>KDV (%8)</span>
              <span>₺8.68</span>
            </div>
            <div className="flex justify-between items-end mb-6">
              <span className="text-lg font-bold text-slate-700">Genel Toplam</span>
              <span className="text-4xl font-black text-slate-900 tracking-tight">₺117.18</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:border-slate-400 transition flex justify-center items-center gap-2">
                💳 Kredi Kartı
              </button>
              <button className="py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition flex justify-center items-center gap-2 text-lg">
                💵 Nakit (F12)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
