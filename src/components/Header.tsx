import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-medical-900/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        } `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="SouthIndian OG" className="h-12 w-auto object-contain" />
            <div>
              <h1 className="text-xl font-bold font-heading leading-none text-white">SouthIndian OG</h1>
              <p className="text-[10px] text-gray-400 tracking-wider">DR. PRASHANTH G</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-heritage-gold transition-colors">Home</Link>
            <Link to="/care-programs" className="text-sm font-medium text-gray-300 hover:text-heritage-gold transition-colors">Care Programs</Link>
            <a href="https://www.youtube.com/@RealSouthindianOG" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-300 hover:text-heritage-gold transition-colors">YouTube</a>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-heritage-gold flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="text-sm font-medium hidden lg:block">{user.displayName?.split(' ')[0]}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-semibold transition-all"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-medical-900 border-b border-white/10 p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-300 hover:text-heritage-gold py-2">Home</Link>
            <Link to="/care-programs" className="text-gray-300 hover:text-heritage-gold py-2">Care Programs</Link>
            <a href="https://www.youtube.com/@RealSouthindianOG" className="text-gray-300 hover:text-heritage-gold py-2">YouTube</a>

            {user ? (
              <>
                <div className="flex items-center gap-3 py-2 border-t border-white/10 mt-2 pt-4">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-heritage-gold flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{user.displayName}</span>
                    <span className="text-xs text-gray-400">{user.email}</span>
                  </div>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 py-2"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-center py-3 bg-heritage-gold text-white rounded-lg font-semibold mt-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;