import React from 'react';

export default function Store() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">OTC E-Ticaret Pazar Yeri</h2>
          <p className="text-sm text-slate-500">Hastaların mobil uygulamadan sipariş vereceği Online Mağazanız</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          + Yeni Ürün Listele
        </button>
      </header>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-indigo-100 font-medium mb-1">Aylık Online Satış</h3>
            <p className="text-4xl font-black">₺45,200</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 font-medium mb-1">Bekleyen Siparişler</h3>
            <div className="flex items-end gap-3 mt-1">
              <p className="text-4xl font-black text-orange-500">12</p>
              <button className="mb-1 text-sm font-bold text-blue-600 hover:underline">Siparişleri Gör</button>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-800 mb-4">Yayındaki Ürünler (Dermokozmetik & Vitamin)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-40 bg-slate-100 flex items-center justify-center text-5xl">🧴</div>
            <div className="p-4">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Dermokozmetik</span>
              <h4 className="font-bold text-slate-800 mt-2">La Roche-Posay Güneş Kremi</h4>
              <p className="text-sm text-slate-500 mt-1">Stok: 45 Adet</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-black text-lg text-slate-800">₺450.00</span>
                <button className="text-blue-600 text-sm font-medium hover:underline">Düzenle</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-40 bg-orange-50 flex items-center justify-center text-5xl">💊</div>
            <div className="p-4">
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Vitamin</span>
              <h4 className="font-bold text-slate-800 mt-2">Pharmaton Kapsül (30'lu)</h4>
              <p className="text-sm text-slate-500 mt-1">Stok: 128 Adet</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-black text-lg text-slate-800">₺290.00</span>
                <button className="text-blue-600 text-sm font-medium hover:underline">Düzenle</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
