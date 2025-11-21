import { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

function GamePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="pixel-text text-5xl font-bold text-blue-900 mb-4">Bermain Tartil Land</h1>
          <p className="pixel-text text-lg text-blue-700">
            Arahkan karakter Azam menjelajahi Tartil Land dan belajar huruf hijaiyah dari Jilid 1 hingga 6!
          </p>
        </div>

        <div className="pixel-box bg-gradient-to-br from-blue-900 to-purple-900 p-4 mb-6">
          <div className="relative bg-gradient-to-br from-sky-300 to-green-300 pixel-box overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 pixel-box mx-auto mb-4 animate-pulse"></div>
                <h2 className="pixel-text text-3xl font-bold text-white drop-shadow-lg mb-2">
                  Game Canvas
                </h2>
                <p className="pixel-text text-white drop-shadow mb-4">
                  Area game akan ditampilkan di sini
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 pixel-box"></div>
                  <div className="w-16 h-16 bg-green-500 pixel-box"></div>
                  <div className="w-16 h-16 bg-pink-500 pixel-box"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 pixel-box bg-black/50 px-3 py-2">
              <span className="pixel-text text-white text-sm">Jilid: 1 | Level: 1</span>
            </div>

            <div className="absolute top-4 right-4 pixel-box bg-black/50 px-3 py-2">
              <span className="pixel-text text-yellow-300 text-sm">★ 0</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="pixel-box bg-black/70 p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-pink-500 pixel-box"></div>
                  <p className="pixel-text text-white text-sm">
                    Ustadzah Zahro: Selamat datang di Tartil Land! Mari kita mulai belajar huruf Alif...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="pixel-box bg-white/90 p-6">
            <h3 className="pixel-text text-xl font-bold text-blue-900 mb-4">Kontrol Game</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`pixel-button flex items-center space-x-2 px-6 py-3 ${
                  isPlaying ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                }`}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="pixel-text">{isPlaying ? 'Pause' : 'Start'}</span>
              </button>

              <button className="pixel-button bg-blue-500 text-white px-6 py-3 flex items-center space-x-2">
                <RotateCcw size={20} />
                <span className="pixel-text">Reset</span>
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`pixel-button px-6 py-3 flex items-center space-x-2 ${
                  isMuted ? 'bg-gray-500 text-white' : 'bg-purple-500 text-white'
                }`}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span className="pixel-text">{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>
          </div>

          <div className="pixel-box bg-white/90 p-6">
            <h3 className="pixel-text text-xl font-bold text-blue-900 mb-4">Panduan Bermain</h3>
            <ul className="space-y-2">
              <li className="pixel-text text-sm text-blue-700">→ Gunakan tombol panah untuk bergerak</li>
              <li className="pixel-text text-sm text-blue-700">→ Tekan SPASI untuk berinteraksi</li>
              <li className="pixel-text text-sm text-blue-700">→ Kunjungi rumah untuk belajar huruf</li>
              <li className="pixel-text text-sm text-blue-700">→ Kumpulkan bintang dan selesaikan level</li>
            </ul>
          </div>
        </div>

        <div className="pixel-box bg-gradient-to-r from-green-100 to-blue-100 p-6">
          <h3 className="pixel-text text-2xl font-bold text-blue-900 mb-4 text-center">
            Peta Tartil Land
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((jilid) => (
              <div
                key={jilid}
                className="pixel-box bg-white p-4 text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className={`w-16 h-16 ${
                  jilid === 1 ? 'bg-blue-500' :
                  jilid === 2 ? 'bg-green-500' :
                  jilid === 3 ? 'bg-yellow-500' :
                  jilid === 4 ? 'bg-orange-500' :
                  jilid === 5 ? 'bg-pink-500' :
                  'bg-purple-500'
                } pixel-box mx-auto mb-2`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="pixel-text text-2xl text-white font-bold">{jilid}</span>
                  </div>
                </div>
                <p className="pixel-text text-sm font-bold text-blue-900">Rumah Jilid {jilid}</p>
                <p className="pixel-text text-xs text-blue-600">
                  {jilid === 1 ? 'Terbuka' : 'Terkunci'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
