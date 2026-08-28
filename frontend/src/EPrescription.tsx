import React, { useState } from 'react';

export default function EPrescription() {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 'REC-2026-991',
      patientName: 'Ayşe Yılmaz',
      tckn: '12345678901',
      doctorName: 'Uzm. Dr. Kemal T.',
      hospital: 'Şehir Hastanesi Kardiyoloji',
      status: 'Hasta Yolda',
      drugs: ['Beloc ZOK 50mg (2 Kutu)', 'Coraspin 100mg (1 Kutu)']
    },
    {
      id: 'REC-2026-992',
      patientName: 'Mehmet Demir',
      tckn: '98765432109',
      doctorName: 'Op. Dr. Selin K.',
      hospital: 'Özel Güven Hastanesi',
      status: 'Eczanede',
      drugs: ['Augmentin 1000mg', 'Parol 500mg']
    }
  ]);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 font-sans">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Doktor e-Reçete Entegrasyonu</h2>
          <p className="text-sm text-slate-500">Hastanedeki doktorun yazdığı reçeteler anında sisteminize düşer</p>
        </div>
        <div className="flex gap-3">
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-lg animate-pulse">
            🟢 E-Nabız Bağlantısı Aktif
          </span>
        </div>
      </header>

      <div className="p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Bölgedeki Hastanelerden Gelen Yeni Reçeteler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prescriptions.map((rx, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`p-4 border-b border-slate-100 flex justify-between items-center ${rx.status === 'Hasta Yolda' ? 'bg-orange-50' : 'bg-emerald-50'}`}>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${rx.status === 'Hasta Yolda' ? 'bg-orange-200 text-orange-800' : 'bg-emerald-200 text-emerald-800'}`}>
                  {rx.status}
                </span>
                <span className="text-xs font-bold text-slate-500">{rx.id}</span>
              </div>
              <div className="p-6">
                <h4 className="font-black text-xl text-slate-800">{rx.patientName}</h4>
                <p className="text-sm text-slate-500 mb-4">TC: {rx.tckn}</p>
                
                <div className="bg-slate-50 p-3 rounded-lg mb-4 border border-slate-100">
                  <p className="text-xs font-bold text-blue-600 mb-1">YAZAN DOKTOR:</p>
                  <p className="text-sm font-medium text-slate-700">{rx.doctorName}</p>
                  <p className="text-xs text-slate-500">{rx.hospital}</p>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-slate-500">REÇETE İÇERİĞİ:</p>
                  {rx.drugs.map((drug, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <span className="text-blue-500">💊</span>
                      <span className="text-sm font-medium text-slate-700">{drug}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-200">
                  İlaçları Hazırla (Kasa'ya Aktar)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
