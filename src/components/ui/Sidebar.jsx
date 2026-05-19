import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { 
  Home, 
  Zap,
  Route,
  Mail,
  Moon, 
  Sun, 
  Menu, 
  X
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // ScrollSpy — smooth tracking using scroll position
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If at the very top, always Home
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // If at the very bottom, always last section
      if (window.innerHeight + scrollY >= document.body.scrollHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find which section is most visible
      let currentSection = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is "active" when its top crosses 40% of the viewport
          if (rect.top <= windowHeight * 0.4) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const menuItems = [
    { name: 'Home', path: '#home', icon: Home },
    { name: 'Skills', path: '#skills', icon: Zap },
    { name: 'Journey', path: '#journey', icon: Route },
    { name: 'Contact', path: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-base-100/80 backdrop-blur-md border-b border-base-300">
        <Link to="/" className="text-2xl font-black tracking-tighter text-accent">FD.</Link>
        <button 
          onClick={() => setIsMobileOpen(true)}
          className="btn btn-ghost btn-circle"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Slim Sidebar */}
      <aside 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`fixed left-0 top-0 h-full z-50 bg-base-100 border-r-2 border-base-content/10 transition-all duration-500 hidden lg:flex flex-col shadow-none ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-4 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <span className="text-accent-content font-black text-sm">FD</span>
          </div>
          <span className={`text-xl font-black tracking-tighter whitespace-nowrap transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            Feroja D.
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-x-hidden">
          {menuItems.map((item) => {
            const isActive = activeSection === item.path.substring(1);
            return (
              <a 
                key={item.path} 
                href={item.path} 
                className={`relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-accent text-accent-content font-bold' 
                    : 'text-base-content/50 hover:bg-base-200 hover:text-base-content'
                }`}
                title={item.name}
              >
                <item.icon size={20} className="shrink-0" />
                <span className={`whitespace-nowrap transition-all duration-300 text-sm ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="p-3 border-t border-base-300 bg-base-200/50">
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-4 px-4 py-3 rounded-2xl w-full hover:bg-base-300 transition-all group overflow-hidden"
            title="Ganti Tema"
          >
            <div className="shrink-0 transition-transform group-hover:rotate-12">
              {theme === 'dark' ? <Moon size={20} className="text-accent" /> : <Sun size={20} className="text-warning" />}
            </div>
            <span className={`whitespace-nowrap text-sm font-bold transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        ></div>
        
        <div className={`absolute left-0 top-0 h-full w-4/5 max-w-sm bg-base-100 transition-transform duration-500 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 flex items-center justify-between border-b border-base-300">
            <span className="text-2xl font-black tracking-tighter text-accent">FD.</span>
            <button 
              onClick={() => setIsMobileOpen(false)}
              className="btn btn-ghost btn-circle"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.path.substring(1);
              return (
                <a 
                  key={item.path} 
                  href={item.path} 
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    isActive 
                      ? 'bg-accent text-accent-content font-bold' 
                      : 'text-base-content/50 font-medium hover:bg-base-200 hover:text-base-content'
                  }`}
                >
                  <item.icon size={22} />
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-base-300">
            <button 
              onClick={toggleTheme}
              className="btn btn-block btn-outline rounded-2xl gap-3"
            >
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
