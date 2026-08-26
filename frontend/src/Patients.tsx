import React from 'react';

export default function Patients() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Hastalar ve CRM</h2>
          <p className="text-sm text-slate-500">Hasta Profilleri, Reçeteler ve Abonelikler (PillPack)</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition">
            SMS Kampanyası Oluştur
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            + Yeni Hasta Kaydı
          </button>
        </div>
      </header>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-blue-100 font-medium mb-1">Toplam Kayıtlı Hasta</h3>
            <p className="text-4xl font-black">1,845</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 font-medium mb-1">Aylık Abonelik (Kutu) Alanlar</h3>
            <p className="text-4xl font-black text-slate-800">142</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 font-medium mb-1">Bu Hafta İlacı Bitecekler</h3>
            <p className="text-4xl font-black text-orange-500">28</p>
            <p className="text-xs text-slate-400 mt-2">Otomatik hatırlatma SMS'leri devrede.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-4">
            <input 
              type="text" 
              placeholder="Hasta Adı, TCKN veya Telefon ile Ara..." 
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4">Hasta Adı / Soyadı</th>
                <th className="p-4">İletişim</th>
                <th className="p-4">Aktif Reçeteler (Kronik)</th>
                <th className="p-4 text-center">Durum / Uyarı</th>
                <th className="p-4 text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {/* Patient 1 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">AO</div>
                    <div>
                      <p className="font-bold text-slate-800">Ahmet Özdemir</p>
                      <p className="text-xs text-slate-500">TC: 12345678901</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p>0555 123 45 67</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">Lisinopril</span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">Metformin</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-medium text-xs">
                    ⚠️ 3 Gün Sonra İlacı Bitiyor
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition mr-2 text-xs font-medium">Refill (Yenile)</button>
                  <button className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded hover:bg-slate-100 transition text-xs font-medium">SMS At</button>
                </td>
              </tr>

              {/* Patient 2 */}
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold">AY</div>
                    <div>
                      <p className="font-bold text-slate-800">Ayşe Yılmaz</p>
                      <p className="text-xs text-slate-500">TC: 98765432109</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <p>0532 987 65 43</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">📦 Kutu Aboneliği (Aylık)</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium text-xs">
                    ✓ Kutu Yola Çıktı
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded hover:bg-slate-100 transition text-xs font-medium">Profili Gör</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
