import { Shield, FileText, Building2, Smartphone, Package, Home, Wrench, Clock, ShoppingBag, Truck, MapPin } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Document Collection",
      price: "₹199+",
      description: "Submit or collect important documents from offices, colleges, or individuals.",
      icon: <FileText className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Office & Govt Visits",
      price: "₹299+",
      description: "We stand in line and handle the paperwork at government or private offices.",
      icon: <Building2 className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Repair Pickup & Drop",
      price: "₹199+",
      description: "Get your laptop, phone, or appliances picked up and dropped at the service center.",
      icon: <Smartphone className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Return & Exchange Assistant",
      price: "₹199+",
      description: "Hassle-free e-commerce or physical store returns handled by our partners.",
      icon: <Package className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Property Visit",
      price: "₹499+",
      description: "Physical verification of properties with live video, photos, and status reports.",
      icon: <Home className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Technician Coordination",
      price: "₹299+",
      description: "We wait at your home and supervise the technician so you don't have to.",
      icon: <Wrench className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Queue & Appointment",
      price: "₹199+",
      description: "We hold your spot in queues for tickets, admissions, or appointments.",
      icon: <Clock className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Local Purchase & Pickup",
      price: "₹199+",
      description: "Buy items from local stores that don't offer delivery and get them dropped off.",
      icon: <ShoppingBag className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Courier & Parcel",
      price: "₹199+",
      description: "Send or receive important parcels across the city with secure handling.",
      icon: <Truck className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Event & Venue Visit",
      price: "₹399+",
      description: "Scout venues for weddings or events before making a booking.",
      icon: <MapPin className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Physical Verification",
      price: "Custom",
      description: "Verify business addresses, assets, or local operations.",
      icon: <Shield className="w-8 h-8 text-proxiva-blue" />
    },
    {
      title: "Business Visit",
      price: "Custom",
      description: "Routine operational checks and administrative tasks for your business.",
      icon: <Building2 className="w-8 h-8 text-proxiva-blue" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-proxiva-navy mb-4">Proxiva GO Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a personal task and we'll assign a verified partner to get it done.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-premium flex flex-col h-full group hover:border-proxiva-blue/30">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-proxiva-navy bg-slate-100 px-3 py-1 rounded-full text-sm">
                    {service.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-proxiva-navy mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                <button className="w-full py-3 px-4 bg-slate-50 text-proxiva-blue font-semibold rounded-xl border border-slate-200 hover:bg-proxiva-blue hover:text-white hover:border-proxiva-blue transition-all duration-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-proxiva-navy py-20 text-center text-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-4">Don't see your task listed?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            We handle a wide variety of custom tasks. Tell us what you need and we'll let you know if we can help.
          </p>
          <button className="btn-primary">
            Request Custom Task
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
