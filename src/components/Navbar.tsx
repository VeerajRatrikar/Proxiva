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
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2563EB"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M11 9H17.5C21.0899 9 24 11.9101 24 15.5C24 19.0899 21.0899 22 17.5 22H11V9ZM14 12V19H17.5C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12H14Z" fill="white"/>
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
