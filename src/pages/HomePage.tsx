import { Link } from 'react-router-dom';
import { ShieldCheck, Map, Camera, Clock, Users, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-proxiva-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-proxiva-blue via-proxiva-navy to-proxiva-navy"></div>
        <div className="section-container relative z-10 flex flex-col items-center text-center pt-24 pb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Can't go?<br />
            We go for <span className="text-proxiva-blue">you.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            From collecting documents and visiting offices to checking properties, coordinating technicians and handling everyday errands — Proxiva sends a trusted person for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/book" className="btn-primary text-lg flex items-center justify-center">
              Book a Task <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a href="#" className="bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1da851] transition-colors duration-200 flex items-center justify-center">
              Chat on WhatsApp
            </a>
            <Link to="/community-deals" className="btn-secondary text-lg flex items-center justify-center">
              Find Community Deals
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-proxiva-success" /> Verified Task Partners</div>
            <div className="flex items-center"><Map className="w-5 h-5 mr-2 text-proxiva-blue" /> Live Tracking</div>
            <div className="flex items-center"><Camera className="w-5 h-5 mr-2 text-proxiva-blue" /> Photo & Video Proof</div>
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-proxiva-success" /> Secure Payments</div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="bg-slate-50 py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* PROXIVA GO */}
            <div className="card-premium border-t-4 border-t-proxiva-blue">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-proxiva-blue w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-proxiva-navy mb-4">PROXIVA GO</h2>
              <p className="text-xl text-slate-600 mb-4 italic">"Can't be there? We can."</p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                A verified task partner physically goes and performs a legally and operationally delegable task on your behalf.
              </p>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-success" /> Document collection & submission</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-success" /> Office & government visits</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-success" /> Property physical verification</li>
              </ul>
              <Link to="/services" className="text-proxiva-blue font-semibold hover:underline flex items-center">
                Explore Personal Tasks <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* PROXIVA POOL */}
            <div className="card-premium border-t-4 border-t-proxiva-indigo">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-proxiva-indigo w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-proxiva-navy mb-4">PROXIVA POOL</h2>
              <p className="text-xl text-slate-600 mb-4 italic">"Need the same service as your neighbors?"</p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Aggregate similar requests from people in your community. Concentrated demand unlocks better rates and coordinated service.
              </p>
              <ul className="space-y-3 mb-8 text-slate-600">
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-indigo" /> AC servicing & deep cleaning</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-indigo" /> Car & bike wash pooling</li>
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 mr-3 text-proxiva-indigo" /> Pest control & maintenance</li>
              </ul>
              <Link to="/community-deals" className="text-proxiva-indigo font-semibold hover:underline flex items-center">
                Explore Community Deals <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
