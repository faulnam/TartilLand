import { Sparkles, Star, Play } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <Star className="star star-1 text-yellow-300" size={20} />
          <Star className="star star-2 text-yellow-400" size={16} />
          <Star className="star star-3 text-yellow-300" size={18} />
        </div>

        <div className="text-center mb-12 relative z-10">
          <div className="inline-block pixel-box bg-gradient-to-r from-green-400 to-blue-500 p-8 mb-6">
            <h1 className="pixel-text text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Selamat Datang di
            </h1>
            <h1 className="pixel-text text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-2">
              Tartil Land
            </h1>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <Sparkles className="text-yellow-300 animate-pulse" size={24} />
              <p className="pixel-text text-xl md:text-2xl text-yellow-100">
                Belajar Huruf Hijaiyah Sambil Bermain!
              </p>
              <Sparkles className="text-yellow-300 animate-pulse" size={24} />
            </div>
          </div>

          <button
            onClick={() => onNavigate('game')}
            className="pixel-button bg-gradient-to-r from-pink-500 to-orange-500 text-white text-2xl px-12 py-6 hover:scale-110 transition-transform animate-bounce-slow"
          >
            <div className="flex items-center space-x-3">
              <Play size={32} />
              <span className="pixel-text font-bold">Main Sekarang</span>
            </div>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="pixel-box bg-white/90 p-6 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-blue-400 pixel-box mx-auto mb-4"></div>
            <h3 className="pixel-text text-xl font-bold text-blue-900 mb-2">6 Jilid Tartil</h3>
            <p className="pixel-text text-sm text-blue-700">
              Belajar bertahap dari Jilid 1 hingga 6 dengan metode Tartil yang mudah dipahami
            </p>
          </div>

          <div className="pixel-box bg-white/90 p-6 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-green-400 pixel-box mx-auto mb-4"></div>
            <h3 className="pixel-text text-xl font-bold text-green-900 mb-2">Dunia Pixel 2D</h3>
            <p className="pixel-text text-sm text-green-700">
              Jelajahi Tartil Land yang imut dengan grafis pixel-art retro yang ramah anak
            </p>
          </div>

          <div className="pixel-box bg-white/90 p-6 hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-pink-400 pixel-box mx-auto mb-4"></div>
            <h3 className="pixel-text text-xl font-bold text-pink-900 mb-2">Karakter Lucu</h3>
            <p className="pixel-text text-sm text-pink-700">
              Bertemu Azam, Faul, dan Ustadzah Zahro yang siap menemani perjalanan belajarmu
            </p>
          </div>
        </div>

        <div className="pixel-box bg-gradient-to-br from-blue-100 to-green-100 p-8 text-center">
          <h2 className="pixel-text text-3xl font-bold text-blue-900 mb-4">Tentang Tartil Land</h2>
          <p className="pixel-text text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed">
            Tartil Land adalah game edukasi islami yang mengajarkan huruf hijaiyah dengan cara yang menyenangkan dan interaktif.
            Pemain akan menjelajahi dunia mini bergaya pixel 2D dan mengunjungi enam rumah pembelajaran yang mewakili Jilid Tartil 1–6.
            Mari belajar membaca Al-Quran dengan benar sejak dini!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
