import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">PROXIVA</span>
            </div>
            <p className="text-sm text-slate-400 font-bold tracking-widest uppercase">WE GO FOR YOU.</p>
            <p className="text-slate-400 max-w-sm">
              Your trusted personal task partner. More people. Better prices. One coordinated service.
            </p>
            <button className="flex items-center space-x-2 bg-transparent border border-slate-600 hover:border-slate-400 text-white px-5 py-2.5 rounded-full transition-colors text-sm font-medium">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-white transition-colors">Proxiva Go services</Link></li>
              <li><Link to="/community-deals" className="hover:text-white transition-colors">Community deals</Link></li>
              <li><Link to="/start-deal" className="hover:text-white transition-colors">Start a deal</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-white transition-colors">How it works</Link></li>
              <li><Link to="/trust-safety" className="hover:text-white transition-colors">Trust & safety</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help centre</Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Account</h3>
            <ul className="space-y-4">
              <li><Link to="/login" className="hover:text-white transition-colors">Login or sign up</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/track" className="hover:text-white transition-colors">Track a task</Link></li>
              <li><Link to="/book" className="hover:text-white transition-colors">Book a task</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-slate-500 max-w-4xl flex items-start gap-2">
              <Shield className="w-5 h-5 shrink-0 text-slate-600" />
              <span>
                Proxiva provides authorized task assistance where delegation is permitted. Some legal, government, financial, identity-verification and other activities may require personal appearance. Proxiva does not impersonate customers.
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <p>© 2026 Proxiva. Bengaluru, India.</p>
              <p>Demo data shown throughout.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

export default Footer;
