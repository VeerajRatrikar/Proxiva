import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Radar, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-secondary to-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-brand-primary" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-navy">PROXIVA</span>
          </Link>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Services</Link>
            <Link to="/community-deals" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Community Deals</Link>
            <Link to="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">About</Link>
            <Link to="/help" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Help</Link>
          </div>

          {/* Right: Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/track" className="flex items-center text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">
              <Radar className="w-4 h-4 mr-1.5" />
              Track Task
            </Link>
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors px-3 py-2">
              Login
            </Link>
            <Link to="/book" className="bg-brand-primary hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg absolute w-full left-0">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary rounded-lg">Home</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary rounded-lg">Services</Link>
          <Link to="/community-deals" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary rounded-lg">Community Deals</Link>
          <Link to="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary rounded-lg">How It Works</Link>
          <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-primary rounded-lg">Pricing</Link>
          <hr className="my-2 border-gray-100" />
          <Link to="/track" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">
            <Radar className="w-5 h-5 mr-3 text-slate-400" /> Track Task
          </Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Login</Link>
          <div className="mt-4 px-3">
            <Link to="/book" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center items-center bg-brand-primary hover:bg-blue-700 text-white font-medium py-3 rounded-full transition-colors">
              Book Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
