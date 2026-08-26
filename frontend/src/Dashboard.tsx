import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">+</div>
          <h1 className="text-xl font-bold text-slate-800">PharmSync</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg font-medium">
            📊 Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">
            📦 Stok ve Miad
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">
            🛒 POS (Satış)
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">
            👥 Hastalar (CRM)
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">Günaydın, Ecz. Ahmet</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">Güven Eczanesi</span>
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Bugünkü Ciro</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">₺14,850</h3>
              <p className="text-sm text-emerald-600 font-medium mt-2">↑ %12 dünden fazla</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Reçete Sayısı</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">78</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Aktif Hastalar</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">1,845</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Aylık Abonelik (Gönderilecek)</p>
              <h3 className="text-3xl font-bold text-blue-600 mt-2">14 Paket</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Low Stock Alerts */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">Kritik Stok Uyarıları</h3>
                <button className="text-blue-600 text-sm font-medium">Tümünü Gör</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-100">
                  <div>
                    <p className="font-bold text-slate-800">Amoxicillin 500mg</p>
                    <p className="text-sm text-slate-500">Kalan: 12 Kutu</p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg">Sipariş Ver</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div>
                    <p className="font-bold text-slate-800">Paracetamol 500mg</p>
                    <p className="text-sm text-slate-500">Kalan: 25 Kutu</p>
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-lg">İncele</button>
                </div>
              </div>
            </div>

            {/* Expiring Medicine */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">Yaklaşan Miad (Son 30 Gün)</h3>
                <button className="text-blue-600 text-sm font-medium">Rapor Al</button>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm font-medium text-slate-500 border-b border-slate-200">
                    <th className="pb-3">İlaç Adı</th>
                    <th className="pb-3">Miad Tarihi</th>
                    <th className="pb-3">Adet</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-medium text-slate-800">Cetirizine 10mg</td>
                    <td className="py-3 text-red-600 font-medium">15 Kas 2026</td>
                    <td className="py-3">45</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-slate-800">Vitamin C 1000mg</td>
                    <td className="py-3 text-orange-500 font-medium">30 Kas 2026</td>
                    <td className="py-3">120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
