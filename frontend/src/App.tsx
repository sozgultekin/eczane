import { useState } from 'react'
import Auth from './Auth'
import Dashboard from './Dashboard'

function App() {
  // Demo amaciyla direkt Dashboard acilmasi icin true yapildi.
  // Gercek uygulamada kullanici login oldugunda true'ya cekilecek.
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Auth />}
    </div>
  )
}

export default App
