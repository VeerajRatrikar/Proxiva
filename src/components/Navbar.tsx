import { Link } from 'react-router-dom';
import { Menu, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-proxiva-blue rounded-xl flex items-center justify-center text-white font-bold text-2xl italic tracking-tighter">
              P
            </div>
            <span className="font-bold text-2xl tracking-tight text-proxiva-navy">PROXIVA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors">Services</Link>
            <Link to="/community-deals" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors">Community Deals</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors">Pricing</Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-slate-500 text-sm">
              <MapPin className="w-4 h-4 mr-1 text-proxiva-blue" />
              Bengaluru
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <Link to="/track" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors flex items-center">
              <Search className="w-4 h-4 mr-1" /> Track
            </Link>
            <Link to="/login" className="text-slate-600 hover:text-proxiva-blue font-medium transition-colors">Login</Link>
            <Link to="/book" className="btn-primary py-2 px-5 text-sm">Book Now</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-proxiva-navy focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/services" className="block text-slate-600 hover:text-proxiva-blue font-medium">Services</Link>
            <Link to="/community-deals" className="block text-slate-600 hover:text-proxiva-blue font-medium">Community Deals</Link>
            <Link to="/how-it-works" className="block text-slate-600 hover:text-proxiva-blue font-medium">How It Works</Link>
            <Link to="/pricing" className="block text-slate-600 hover:text-proxiva-blue font-medium">Pricing</Link>
            <div className="border-t border-slate-100 pt-4 mt-4">
              <Link to="/login" className="block text-slate-600 hover:text-proxiva-blue font-medium mb-4">Login</Link>
              <Link to="/book" className="block text-center btn-primary w-full">Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
