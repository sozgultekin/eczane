import { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Eczaneme Giriş Yap' : 'Yeni Eczane Kaydı'}
          </h2>
          <p className="text-gray-500 mt-2">PharmSync - Yeni Nesil Sağlık Ekosistemi</p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Eczane Adı</label>
                <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Örn: Güven Eczanesi" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Adınız</label>
                  <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Soyadınız</label>
                  <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
            <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="eczaci@ornek.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Şifre</label>
            <input type="password" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>

          <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-red-600 hover:text-red-500 font-medium"
          >
            {isLogin ? 'Henüz hesabınız yok mu? Kayıt olun.' : 'Zaten hesabınız var mı? Giriş yapın.'}
          </button>
        </div>
      </div>
    </div>
  );
}
