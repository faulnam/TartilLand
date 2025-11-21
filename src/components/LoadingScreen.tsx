import { useEffect, useState } from 'react';

function LoadingScreen() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-green-300 flex flex-col items-center justify-center">
      <div className="text-center animate-bounce">
        <div className="w-32 h-32 bg-white pixel-box mx-auto mb-8 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 pixel-box animate-pulse"></div>
        </div>
        <h1 className="pixel-text text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Tartil Land
        </h1>
        <p className="pixel-text text-xl text-white drop-shadow">
          Memuat Dunia Tartil{dots}
        </p>
      </div>
      <div className="mt-8 flex space-x-2">
        <div className="w-4 h-4 bg-white pixel-box animate-bounce"></div>
        <div className="w-4 h-4 bg-white pixel-box animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-white pixel-box animate-bounce delay-200"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
