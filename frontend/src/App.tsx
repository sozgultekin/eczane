import { useState } from 'react'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Inventory from './Inventory'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <Auth />
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">+</div>
          <h1 className="text-xl font-bold text-slate-800">PharmSync</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition \${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            📊 Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition \${activeTab === 'inventory' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            📦 Stok ve Miad
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
          >
            🛒 POS (Satış)
          </button>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
          >
            👥 Hastalar (CRM)
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'inventory' && <Inventory />}
    </div>
  )
}

export default App
