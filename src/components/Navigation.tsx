import { Home, BookOpen, Gamepad2, Image, Users, Mail, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ currentPage, onNavigate, isDarkMode, toggleDarkMode }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: BookOpen },
    { id: 'game', label: 'Game', icon: Gamepad2 },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'characters', label: 'Characters', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 pixel-border-b ${isDarkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 pixel-box flex items-center justify-center">
              <span className="text-white font-bold text-xl">TL</span>
            </div>
            <span className={`pixel-text font-bold text-xl ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
              Tartil Land
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`pixel-button px-4 py-2 flex items-center space-x-2 transition-all ${
                    currentPage === item.id
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-700'
                      : 'text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  <Icon size={16} />
                  <span className="pixel-text text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`pixel-button p-2 ${isDarkMode ? 'bg-slate-700 text-yellow-300' : 'bg-blue-100 text-blue-700'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden pb-2 flex flex-wrap gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`pixel-button px-3 py-1.5 flex items-center space-x-1 text-xs ${
                  currentPage === item.id
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : isDarkMode
                    ? 'text-slate-300 hover:bg-slate-700'
                    : 'text-blue-800 hover:bg-blue-100'
                }`}
              >
                <Icon size={14} />
                <span className="pixel-text">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
