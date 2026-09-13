import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Radar, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="proxiva-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
                <linearGradient id="proxiva-swoop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
              <path d="M8 6C8 3.79086 9.79086 2 12 2H26C31.5228 2 36 6.47715 36 12C36 17.5228 31.5228 22 26 22H18V32C18 34.2091 16.2091 36 14 36H12C9.79086 36 8 34.2091 8 32V6Z" fill="url(#proxiva-logo-grad)" />
              <path d="M8 24C12 24 14 28 18 28C22 28 24 24 28 24" stroke="url(#proxiva-swoop-grad)" strokeWidth="3" strokeLinecap="round" />
              <g transform="translate(20, 7)">
                <path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 15 6 15C6 15 12 10.5 12 6C12 2.68629 9.31371 0 6 0Z" fill="white" />
                <circle cx="6" cy="5.5" r="2" fill="#1E3A8A" />
              </g>
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">PROXIVA</span>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link 
              to="/" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/services') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/community-deals" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/community-deals') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Community Deals
            </Link>
            <a 
              href="/#how-it-works" 
              className="text-xs font-semibold tracking-wide text-slate-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <Link 
              to="/pricing" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/pricing') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link 
              to="/help" 
              className={`text-xs font-semibold tracking-wide transition-colors ${isActive('/help') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              Help
            </Link>
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link 
              to="/track" 
              className="flex items-center text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Radar className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
              Track Task
            </Link>
            <Link 
              to="/login" 
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/book" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Services
          </Link>
          <Link 
            to="/community-deals" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Community Deals
          </Link>
          <a 
            href="/#how-it-works" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            How It Works
          </a>
          <Link 
            to="/pricing" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Pricing
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            About
          </Link>
          <Link 
            to="/help" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Help
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link 
              to="/track" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="flex items-center px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Radar className="w-4 h-4 mr-2 text-slate-400" /> Track Task
            </Link>
            <Link 
              to="/login" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Login
            </Link>
            <Link 
              to="/book" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-full transition-colors text-sm shadow-sm"
            >
              Book Now <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
