import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GamePage from './pages/GamePage';
import GalleryPage from './pages/GalleryPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  setTimeout(() => {
    if (isLoading) setIsLoading(false);
  }, 2500);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'game':
        return <GamePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'characters':
        return <CharactersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-sky-100 via-blue-50 to-green-50'}`}>
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <footer className={`py-6 text-center pixel-text text-sm ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-blue-900 text-blue-100'}`}>
        <p>© 2025 Tartil Land | All Rights Reserved</p>
        <p className="text-xs mt-1 opacity-75">Dikembangkan oleh Mahasiswa Informatika – Untuk Pendidikan Islam Digital</p>
      </footer>
    </div>
  );
}

export default App;
