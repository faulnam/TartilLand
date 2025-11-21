import { Download, ZoomIn } from 'lucide-react';
import { useState } from 'react';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, title: 'Peta Tartil Land', color: 'from-blue-400 to-green-400' },
    { id: 2, title: 'Rumah Jilid 1', color: 'from-green-400 to-teal-400' },
    { id: 3, title: 'Belajar Huruf Alif', color: 'from-purple-400 to-pink-400' },
    { id: 4, title: 'Karakter Azam', color: 'from-blue-500 to-blue-600' },
    { id: 5, title: 'Karakter Faul', color: 'from-green-500 to-green-600' },
    { id: 6, title: 'Ustadzah Zahro', color: 'from-pink-500 to-pink-600' },
    { id: 7, title: 'Mini Game', color: 'from-orange-400 to-red-400' },
    { id: 8, title: 'Sertifikat Jilid', color: 'from-yellow-400 to-orange-400' },
    { id: 9, title: 'Masjid Tartil', color: 'from-teal-400 to-cyan-400' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pixel-text text-5xl font-bold text-blue-900 mb-4">Gallery</h1>
          <p className="pixel-text text-lg text-blue-700">
            Lihat tangkapan layar dan artwork dari Tartil Land
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="pixel-box bg-white p-4 hover:scale-105 transition-transform cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className={`relative bg-gradient-to-br ${item.color} pixel-box aspect-video mb-3 overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/30 pixel-box mx-auto mb-2"></div>
                    <p className="pixel-text text-white text-sm drop-shadow">Screenshot {item.id}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>

              <h3 className="pixel-text font-bold text-blue-900 mb-2">{item.title}</h3>

              <button className="pixel-button bg-blue-500 text-white px-3 py-1.5 text-sm w-full flex items-center justify-center space-x-2">
                <Download size={14} />
                <span className="pixel-text">Download</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="pixel-box bg-gradient-to-br from-purple-100 to-pink-100 p-6">
            <h3 className="pixel-text text-2xl font-bold text-purple-900 mb-4">Wallpaper</h3>
            <p className="pixel-text text-purple-700 mb-4">
              Download wallpaper Tartil Land untuk perangkatmu!
            </p>
            <div className="space-y-2">
              <button className="pixel-button bg-purple-500 text-white px-4 py-2 w-full flex items-center justify-center space-x-2">
                <Download size={16} />
                <span className="pixel-text">Desktop (1920x1080)</span>
              </button>
              <button className="pixel-button bg-purple-500 text-white px-4 py-2 w-full flex items-center justify-center space-x-2">
                <Download size={16} />
                <span className="pixel-text">Mobile (1080x1920)</span>
              </button>
            </div>
          </div>

          <div className="pixel-box bg-gradient-to-br from-blue-100 to-green-100 p-6">
            <h3 className="pixel-text text-2xl font-bold text-blue-900 mb-4">Character Sprites</h3>
            <p className="pixel-text text-blue-700 mb-4">
              Download sprite karakter untuk proyekmu (non-komersial)
            </p>
            <div className="space-y-2">
              <button className="pixel-button bg-blue-500 text-white px-4 py-2 w-full flex items-center justify-center space-x-2">
                <Download size={16} />
                <span className="pixel-text">Azam Sprite Pack</span>
              </button>
              <button className="pixel-button bg-green-500 text-white px-4 py-2 w-full flex items-center justify-center space-x-2">
                <Download size={16} />
                <span className="pixel-text">Faul Sprite Pack</span>
              </button>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="pixel-box bg-white p-6 max-w-4xl w-full">
              <div className={`bg-gradient-to-br ${galleryItems[selectedImage - 1].color} pixel-box aspect-video mb-4`}>
                <div className="w-full h-full flex items-center justify-center">
                  <p className="pixel-text text-white text-2xl drop-shadow-lg">
                    {galleryItems[selectedImage - 1].title}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="pixel-text text-xl font-bold text-blue-900">
                  {galleryItems[selectedImage - 1].title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="pixel-button bg-red-500 text-white px-4 py-2"
                >
                  <span className="pixel-text">Tutup</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
