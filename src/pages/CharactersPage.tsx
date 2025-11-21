import { Heart, Sparkles, Award } from 'lucide-react';

function CharactersPage() {
  const characters = [
    {
      name: 'Azam',
      role: 'Tokoh Utama',
      color: 'from-blue-400 to-blue-600',
      emoji: '👦',
      description: 'Anak laki-laki yang cerdas dan bersemangat untuk belajar huruf hijaiyah. Azam adalah karakter yang kamu kendalikan dalam petualangan di Tartil Land.',
      traits: ['Rajin belajar', 'Pemberani', 'Suka bertanya'],
      skill: 'Belajar cepat dan mengingat dengan baik',
    },
    {
      name: 'Faul',
      role: 'Teman Setia',
      color: 'from-green-400 to-green-600',
      emoji: '👧',
      description: 'Sahabat terbaik Azam yang selalu memberikan dukungan dan semangat. Faul membantu Azam ketika menghadapi kesulitan dalam belajar.',
      traits: ['Ceria', 'Setia', 'Penuh semangat'],
      skill: 'Memberi motivasi dan tips belajar',
    },
    {
      name: 'Ustadzah Zahro',
      role: 'Guru Pembimbing',
      color: 'from-pink-400 to-pink-600',
      emoji: '👩‍🏫',
      description: 'Guru yang sabar dan bijaksana, mengajarkan metode Tartil dengan cara yang menyenangkan. Beliau memandu perjalanan pembelajaran dari Jilid 1 hingga 6.',
      traits: ['Sabar', 'Bijaksana', 'Inspiratif'],
      skill: 'Mengajar dengan penuh kasih sayang',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pixel-text text-5xl font-bold text-blue-900 mb-4">Karakter Tartil Land</h1>
          <p className="pixel-text text-lg text-blue-700">
            Kenali karakter-karakter yang akan menemanimu belajar di Tartil Land
          </p>
        </div>

        <div className="space-y-8">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`pixel-box bg-white/90 p-6 md:p-8 hover:scale-[1.02] transition-transform ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`w-32 h-32 bg-gradient-to-br ${character.color} pixel-box mx-auto mb-4 flex items-center justify-center character-card`}>
                    <span className="text-6xl">{character.emoji}</span>
                  </div>
                  <h2 className="pixel-text text-3xl font-bold text-blue-900 mb-2">
                    {character.name}
                  </h2>
                  <div className="inline-block pixel-box bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-1">
                    <p className="pixel-text text-sm font-bold text-white">{character.role}</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="mb-4">
                    <p className="pixel-text text-blue-800 leading-relaxed">
                      {character.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Heart className="text-pink-500" size={20} />
                      <h3 className="pixel-text font-bold text-blue-900">Sifat Khas</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="pixel-box bg-blue-100 text-blue-800 px-3 py-1 pixel-text text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="text-purple-500" size={20} />
                      <h3 className="pixel-text font-bold text-blue-900">Kemampuan Khusus</h3>
                    </div>
                    <p className="pixel-text text-blue-700">{character.skill}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pixel-box bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
          <div className="text-center">
            <Sparkles className="text-purple-600 mx-auto mb-4" size={48} />
            <h2 className="pixel-text text-3xl font-bold text-purple-900 mb-4">
              Karakter Tambahan Segera Hadir!
            </h2>
            <p className="pixel-text text-purple-700 max-w-2xl mx-auto">
              Kami sedang mengembangkan lebih banyak karakter menarik yang akan bergabung di Tartil Land.
              Nantikan update selanjutnya untuk bertemu dengan teman-teman baru!
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="pixel-box bg-white/90 p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-box mx-auto mb-3"></div>
            <h3 className="pixel-text font-bold text-blue-900 mb-2">Karakter NPC</h3>
            <p className="pixel-text text-sm text-blue-700">
              Temui berbagai NPC yang siap membantu perjalananmu
            </p>
          </div>

          <div className="pixel-box bg-white/90 p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 pixel-box mx-auto mb-3"></div>
            <h3 className="pixel-text font-bold text-blue-900 mb-2">Hewan Peliharaan</h3>
            <p className="pixel-text text-sm text-blue-700">
              Adopsi hewan lucu yang akan menemanimu belajar
            </p>
          </div>

          <div className="pixel-box bg-white/90 p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 pixel-box mx-auto mb-3"></div>
            <h3 className="pixel-text font-bold text-blue-900 mb-2">Kustomisasi</h3>
            <p className="pixel-text text-sm text-blue-700">
              Ubah penampilan karaktermu dengan berbagai kostum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersPage;
