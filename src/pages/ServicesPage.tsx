import { Link } from 'react-router-dom';
import { FileText, Building2, Smartphone, Package, Home, Wrench, Clock, ShoppingBag, Truck, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Document Collection",
      price: "₹199+",
      description: "Submit or collect important documents from offices, colleges, banks, or individuals with proof.",
      icon: FileText
    },
    {
      title: "Office & Govt Visits",
      price: "₹299+",
      description: "Stand in line, submit forms, and follow up at municipal, administrative, or private offices.",
      icon: Building2
    },
    {
      title: "Repair Pickup & Drop",
      price: "₹199+",
      description: "Device, gadget, or appliance dropped at authorized service centers and brought back securely.",
      icon: Smartphone
    },
    {
      title: "Return & Exchange Assistant",
      price: "₹199+",
      description: "Hassle-free e-commerce returns or physical store product exchanges completed for you.",
      icon: Package
    },
    {
      title: "Property Visit",
      price: "₹499+",
      description: "Physical walkthrough of flats, plots, or commercial spaces with live photos, video, and notes.",
      icon: Home
    },
    {
      title: "Technician Coordination",
      price: "₹299+",
      description: "Someone trusted present at home to supervise technicians, carpenters, or repairmen.",
      icon: Wrench
    },
    {
      title: "Queue & Appointment Assistance",
      price: "₹199+",
      description: "Wait in physical queues for token numbers, tickets, OPD visits, or registration counters.",
      icon: Clock
    },
    {
      title: "Local Purchase & Errands",
      price: "₹199+",
      description: "Pick up specialty goods, medicines, or items from offline shops that don't offer delivery.",
      icon: ShoppingBag
    },
    {
      title: "Urgent Intercity / City Courier",
      price: "₹199+",
      description: "Point-to-point same-day high-priority delivery with OTP confirmed handover.",
      icon: Truck
    },
    {
      title: "Venue & Event Scouting",
      price: "₹399+",
      description: "Physical inspection of banquets, venues, and party halls with 360-degree footage.",
      icon: MapPin
    },
    {
      title: "Physical Verification",
      price: "Custom",
      description: "On-ground operational checks, address verification, and asset inspection.",
      icon: Shield
    },
    {
      title: "Business Admin Errand",
      price: "Custom",
      description: "Routine operational errands and vendor coordination for startups and small businesses.",
      icon: Building2
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 pt-16 pb-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            PROXIVA GO
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">Personal Task Services</h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            A trusted verified person physically goes for you. Every task is tracked live, covered by safety protocols, and concluded with photo/video proof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full text-xs">
                        {service.price}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-green-700 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified Partner
                    </span>
                    <Link 
                      to="/book" 
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-4 py-1.5 rounded-full text-xs transition-colors flex items-center"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Custom Task CTA Banner */}
      <section className="bg-[#0B1528] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">Need a custom errand or task done?</h2>
          <p className="text-sm text-slate-300 mb-8 max-w-xl mx-auto">
            If your task is legally delegable, Proxiva can handle it. Describe what you need and our dispatch team will assess and quote instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/book" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-xs shadow-sm">
              Request Custom Task
            </Link>
            <button 
              onClick={() => window.open('https://wa.me/919999999999?text=Hi%20Proxiva%2C%20I%20have%20a%20custom%20task', '_blank')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-3 rounded-full transition-colors text-xs"
            >
              Ask on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
