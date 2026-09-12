import { Users, TrendingDown, MapPin, Search, ChevronRight } from 'lucide-react';

const CommunityDealsPage = () => {
  const deals = [
    {
      service: "AC Servicing",
      society: "Prestige Lakeside Habitat",
      individualPrice: 699,
      communityPrice: 499,
      participants: 17,
      nextUnlockAt: 20,
      nextPrice: 449,
      providerRating: 4.8,
      status: "price_unlocked"
    },
    {
      service: "Car Wash (Exterior + Interior)",
      society: "Sobha Dream Acres",
      individualPrice: 300,
      communityPrice: 199,
      participants: 24,
      nextUnlockAt: 30,
      nextPrice: 179,
      providerRating: 4.6,
      status: "provider_confirmed"
    },
    {
      service: "Pest Control (2BHK)",
      society: "Brigade Metropolis",
      individualPrice: 899,
      communityPrice: 649,
      participants: 11,
      nextUnlockAt: 15,
      nextPrice: 599,
      providerRating: 4.9,
      status: "open"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-proxiva-navy text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-proxiva-indigo via-proxiva-navy to-proxiva-navy"></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 inline-block border border-indigo-500/30">
              Proxiva Pool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Save More Together</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We combine local demand in your apartment or neighborhood to negotiate better pricing for recurring services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-proxiva-indigo hover:bg-indigo-600">Start a New Deal</button>
              <button className="btn-secondary bg-white/10 text-white hover:bg-white/20 border border-white/20">How it Works</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-12 relative z-20 pb-20">
        <div className="section-container">
          
          {/* Filters Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center flex-1 min-w-[280px] bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
              <Search className="text-slate-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Search deals or societies..." 
                className="bg-transparent border-none outline-none w-full text-slate-700"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <button className="whitespace-nowrap px-4 py-2 bg-proxiva-navy text-white rounded-lg text-sm font-medium">All Deals</button>
              <button className="whitespace-nowrap px-4 py-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-medium">My Society</button>
              <button className="whitespace-nowrap px-4 py-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-medium">AC & Appliances</button>
              <button className="whitespace-nowrap px-4 py-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-medium">Cleaning</button>
            </div>
          </div>

          {/* Warning/Note about demo data */}
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-8 text-sm flex items-start">
            <span className="font-bold mr-2">Note:</span> 
            Prices shown are example demo data for Bengaluru societies. Real pricing unlocks based on actual provider negotiations.
          </div>

          {/* Deals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, idx) => (
              <div key={idx} className="card-premium flex flex-col p-0 overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-indigo-50 text-proxiva-indigo px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Users className="w-3 h-3 mr-1" /> {deal.participants} Joined
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      ★ {deal.providerRating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-proxiva-navy mb-2">{deal.service}</h3>
                  <div className="flex items-center text-slate-500 mb-6 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                    {deal.society}
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Individual Price</p>
                        <p className="text-sm text-slate-400 line-through">₹{deal.individualPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-proxiva-indigo font-semibold mb-1">Current Pool Price</p>
                        <p className="text-2xl font-bold text-proxiva-navy">₹{deal.communityPrice}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-slate-500">Next unlock at {deal.nextUnlockAt} people</span>
                        <span className="text-proxiva-success font-semibold flex items-center">
                          <TrendingDown className="w-3 h-3 mr-1" /> Drops to ₹{deal.nextPrice}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div 
                          className="bg-proxiva-indigo h-1.5 rounded-full" 
                          style={{ width: `${(deal.participants / deal.nextUnlockAt) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto px-6 pb-6">
                  <button className="w-full py-3 bg-proxiva-indigo text-white font-semibold rounded-xl hover:bg-indigo-600 transition-colors flex items-center justify-center">
                    Join Deal <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default CommunityDealsPage;
