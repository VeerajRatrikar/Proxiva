import { Link } from 'react-router-dom';
import { MessageCircle, Shield } from 'lucide-react';

export default function Footer() {
  const openWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Proxiva%2C%20I%20need%20help%20with%20a%20task', '_blank');
  };

  return (
    <footer className="bg-[#050A18] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none tracking-tighter">p</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">PROXIVA</span>
            </div>
            
            <p className="text-[11px] text-slate-400 font-bold tracking-widest uppercase">WE GO FOR YOU.</p>
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Your trusted personal task partner. More people. Better prices. One coordinated service.
            </p>
            
            <div className="pt-2">
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-transparent border border-slate-700 hover:border-slate-500 text-white px-4 py-2 rounded-full transition-colors text-xs font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3 text-xs">
              <li><Link to="/services" className="hover:text-white transition-colors">Proxiva Go services</Link></li>
              <li><Link to="/community-deals" className="hover:text-white transition-colors">Community deals</Link></li>
              <li><Link to="/community-deals" className="hover:text-white transition-colors">Start a deal</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Trust & safety</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help centre</Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Account</h3>
            <ul className="space-y-3 text-xs">
              <li><Link to="/login" className="hover:text-white transition-colors">Login or sign up</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/track" className="hover:text-white transition-colors">Track a task</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book a task</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex flex-col gap-5">
            <p className="text-[11px] text-slate-500 max-w-4xl flex items-start gap-2 leading-relaxed">
              <Shield className="w-4 h-4 shrink-0 text-slate-600 mt-0.5" />
              <span>
                Proxiva provides authorized task assistance where delegation is permitted. Some legal, government, financial, identity-verification and other activities may require personal appearance. Proxiva does not impersonate customers.
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
              <p>© 2026 Proxiva. Bengaluru, India.</p>
              <p>Demo data shown throughout.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
