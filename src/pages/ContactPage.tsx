import { useState } from 'react';
import { Mail, Send, Instagram, Youtube, Github, MessageCircle } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="pixel-text text-5xl font-bold text-blue-900 mb-4">Hubungi Kami</h1>
          <p className="pixel-text text-lg text-blue-700">
            Ada pertanyaan atau saran? Kami senang mendengar dari Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="pixel-box bg-white/90 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="text-blue-500" size={32} />
              <h2 className="pixel-text text-2xl font-bold text-blue-900">Kirim Pesan</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="pixel-text text-sm font-bold text-blue-900 block mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pixel-box px-4 py-2 pixel-text focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="pixel-text text-sm font-bold text-blue-900 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pixel-box px-4 py-2 pixel-text focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label className="pixel-text text-sm font-bold text-blue-900 block mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pixel-box px-4 py-2 pixel-text focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="pixel-button bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 w-full flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
              >
                <Send size={20} />
                <span className="pixel-text font-bold">Kirim Pesan</span>
              </button>

              {isSubmitted && (
                <div className="pixel-box bg-green-100 border-2 border-green-500 p-4 text-center">
                  <p className="pixel-text text-green-800 font-bold">
                    Pesan berhasil dikirim! Terima kasih!
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="pixel-box bg-gradient-to-br from-blue-100 to-purple-100 p-8">
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="text-purple-600" size={32} />
                <h2 className="pixel-text text-2xl font-bold text-purple-900">Sosial Media</h2>
              </div>
              <p className="pixel-text text-purple-700 mb-6">
                Ikuti kami di media sosial untuk update terbaru Tartil Land!
              </p>

              <div className="space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 w-full flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
                >
                  <Instagram size={20} />
                  <span className="pixel-text font-bold">Instagram</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 w-full flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
                >
                  <Youtube size={20} />
                  <span className="pixel-text font-bold">YouTube</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 w-full flex items-center justify-center space-x-3 hover:scale-105 transition-transform"
                >
                  <Github size={20} />
                  <span className="pixel-text font-bold">GitHub</span>
                </a>
              </div>
            </div>

            <div className="pixel-box bg-gradient-to-br from-green-100 to-blue-100 p-8">
              <h3 className="pixel-text text-xl font-bold text-blue-900 mb-3">Informasi Tim</h3>
              <div className="space-y-2">
                <p className="pixel-text text-sm text-blue-800">
                  <span className="font-bold">Tim:</span> Mahasiswa Informatika
                </p>
                <p className="pixel-text text-sm text-blue-800">
                  <span className="font-bold">Tujuan:</span> Pendidikan Islam Digital
                </p>
                <p className="pixel-text text-sm text-blue-800">
                  <span className="font-bold">Status:</span> Aktif Dikembangkan
                </p>
              </div>
            </div>

            <div className="pixel-box bg-gradient-to-br from-yellow-100 to-orange-100 p-6 text-center">
              <p className="pixel-text text-sm text-orange-800">
                <span className="font-bold">Catatan:</span> Kami membaca setiap pesan yang masuk dan akan merespons sesegera mungkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
