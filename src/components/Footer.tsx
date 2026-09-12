import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-proxiva-navy text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-proxiva-blue rounded-lg flex items-center justify-center text-white font-bold text-xl italic tracking-tighter">
                P
              </div>
              <span className="font-bold text-xl tracking-tight text-white">PROXIVA</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              "We Go For You."<br />
              Your trusted personal task partner in Bengaluru.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Proxiva GO</Link></li>
              <li><Link to="/community-deals" className="hover:text-white transition-colors">Proxiva POOL</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help & FAQ</Link></li>
              <li><Link to="/trust" className="hover:text-white transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Proxiva. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
