import { BookOpen, Heart, Target, Users } from 'lucide-react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pixel-text text-5xl font-bold text-blue-900 mb-4">Tentang Tartil Land</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="pixel-box bg-white/90 p-8 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <Heart className="text-pink-500 flex-shrink-0" size={32} />
            <div>
              <h2 className="pixel-text text-2xl font-bold text-blue-900 mb-3">Misi Kami</h2>
              <p className="pixel-text text-blue-800 leading-relaxed">
                Tartil Land dikembangkan untuk membantu anak-anak belajar huruf hijaiyah dengan cara yang menyenangkan,
                interaktif, dan berbasis metode Tartil. Kami percaya bahwa belajar membaca Al-Quran harus menjadi
                pengalaman yang menyenangkan dan berkesan bagi setiap anak.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 mb-6">
            <Target className="text-orange-500 flex-shrink-0" size={32} />
            <div>
              <h2 className="pixel-text text-2xl font-bold text-blue-900 mb-3">Tujuan</h2>
              <p className="pixel-text text-blue-800 leading-relaxed">
                Memberikan pengalaman belajar Al-Quran yang interaktif dan menyenangkan melalui game edukasi
                bergaya pixel-art yang ramah anak, sehingga meningkatkan minat dan motivasi anak dalam
                mempelajari huruf hijaiyah dengan benar.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <BookOpen className="text-blue-500 flex-shrink-0" size={32} />
            <div>
              <h2 className="pixel-text text-2xl font-bold text-blue-900 mb-3">Metode Tartil</h2>
              <p className="pixel-text text-blue-800 leading-relaxed mb-4">
                Metode Tartil adalah sistem pembelajaran Al-Quran yang telah terbukti efektif, dengan pendekatan
                bertahap dari dasar hingga mahir. Setiap jilid dirancang khusus untuk membangun fondasi yang kuat
                dalam membaca Al-Quran dengan benar.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { jilid: 1, desc: 'Pengenalan huruf hijaiyah dasar' },
                  { jilid: 2, desc: 'Huruf bersambung dan harokat' },
                  { jilid: 3, desc: 'Tanwin dan sukun' },
                  { jilid: 4, desc: 'Mad dan tasydid' },
                  { jilid: 5, desc: 'Waqaf dan qalqalah' },
                  { jilid: 6, desc: 'Bacaan gharib dan tartil sempurna' },
                ].map((item) => (
                  <div key={item.jilid} className="pixel-box bg-gradient-to-br from-blue-50 to-green-50 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-blue-500 pixel-box flex items-center justify-center">
                        <span className="pixel-text text-white font-bold">{item.jilid}</span>
                      </div>
                      <span className="pixel-text font-bold text-blue-900">Jilid {item.jilid}</span>
                    </div>
                    <p className="pixel-text text-sm text-blue-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pixel-box bg-gradient-to-br from-purple-100 to-pink-100 p-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Users className="text-purple-600" size={32} />
            <h2 className="pixel-text text-3xl font-bold text-purple-900">Karakter Utama</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 pixel-box mx-auto mb-3 flex items-center justify-center">
                <span className="pixel-text text-4xl text-white">👦</span>
              </div>
              <h3 className="pixel-text text-xl font-bold text-blue-900 mb-2">Azam</h3>
              <p className="pixel-text text-sm text-blue-700">
                Tokoh utama yang bersemangat belajar huruf hijaiyah dan menjelajahi Tartil Land
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 pixel-box mx-auto mb-3 flex items-center justify-center">
                <span className="pixel-text text-4xl text-white">👧</span>
              </div>
              <h3 className="pixel-text text-xl font-bold text-green-900 mb-2">Faul</h3>
              <p className="pixel-text text-sm text-green-700">
                Teman setia Azam yang selalu memberi semangat dan motivasi dalam belajar
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 pixel-box mx-auto mb-3 flex items-center justify-center">
                <span className="pixel-text text-4xl text-white">👩‍🏫</span>
              </div>
              <h3 className="pixel-text text-xl font-bold text-pink-900 mb-2">Ustadzah Zahro</h3>
              <p className="pixel-text text-sm text-pink-700">
                Guru pembimbing yang sabar dan bijaksana, siap membantu setiap langkah pembelajaran
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
