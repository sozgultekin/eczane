import React from 'react';

export default function Inventory() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Stok ve Miad (Envanter)</h2>
          <p className="text-sm text-slate-500">Güven Eczanesi İlaç ve Stok Takip Modülü</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition">
            Stok Girişi Yap
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            + Yeni İlaç Ekle
          </button>
        </div>
      </header>

      <div className="p-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-4">
            <input 
              type="text" 
              placeholder="İlaç Adı veya Barkod ile Ara..." 
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Tüm İlaçlar</option>
              <option>Kritik Stoklar</option>
              <option>Miadı Yaklaşanlar</option>
            </select>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4">Barkod</th>
                <th className="p-4">İlaç Adı</th>
                <th className="p-4">Etken Madde</th>
                <th className="p-4 text-right">Satış Fiyatı</th>
                <th className="p-4 text-center">Toplam Stok</th>
                <th className="p-4 text-center">En Yakın Miad</th>
                <th className="p-4 text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {/* Dummy Row 1 (Normal Stock) */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4 font-mono text-xs text-slate-500">8699536000001</td>
                <td className="p-4 font-bold text-slate-800">Majezik 100mg Tablet</td>
                <td className="p-4">Flurbiprofen</td>
                <td className="p-4 text-right font-medium">₺75.50</td>
                <td className="p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">145</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-slate-600">12 Haz 2027</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline">Düzenle</button>
                </td>
              </tr>

              {/* Dummy Row 2 (Low Stock & Expiring soon) */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4 font-mono text-xs text-slate-500">8699514000021</td>
                <td className="p-4 font-bold text-slate-800">Amoxicillin 500mg Kapsül</td>
                <td className="p-4">Amoksisilin</td>
                <td className="p-4 text-right font-medium">₺42.00</td>
                <td className="p-4 text-center">
                  {/* Kritik Stok Uyarısı */}
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full font-bold">12</span>
                </td>
                <td className="p-4 text-center">
                  {/* Miad Uyarısı */}
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-lg font-bold">15 Kas 2026 (Kritik)</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline">Düzenle</button>
                </td>
              </tr>

              {/* Dummy Row 3 (Normal) */}
              <tr className="hover:bg-slate-50 transition">
                <td className="p-4 font-mono text-xs text-slate-500">8699541000033</td>
                <td className="p-4 font-bold text-slate-800">Lansor 30mg Kapsül</td>
                <td className="p-4">Lansoprazol</td>
                <td className="p-4 text-right font-medium">₺112.90</td>
                <td className="p-4 text-center">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold">85</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-slate-600">01 Oca 2028</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-blue-600 hover:underline">Düzenle</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
