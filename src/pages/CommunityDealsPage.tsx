import { useState } from 'react';
import { Users, TrendingDown, MapPin, Search, ChevronRight, X, Share2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface Deal {
  id: string;
  service: string;
  category: string;
  society: string;
  individualPrice: number;
  communityPrice: number;
  participants: number;
  nextUnlockAt: number;
  nextPrice: number;
  providerRating: number;
  status: string;
  scheduleDate: string;
}

const initialDeals: Deal[] = [
  {
    id: "PXD-4411",
    service: "AC Deep Servicing & Gas Check",
    category: "Appliances",
    society: "Prestige Lakeside Habitat · Tower 4",
    individualPrice: 699,
    communityPrice: 499,
    participants: 17,
    nextUnlockAt: 20,
    nextPrice: 447,
    providerRating: 4.8,
    status: "price_unlocked",
    scheduleDate: "Saturday, 20 Sep 2026"
  },
  {
    id: "PXD-2089",
    service: "Foam Car Wash & Detailing",
    category: "Automotive",
    society: "Sobha Dream Acres · Block B",
    individualPrice: 300,
    communityPrice: 199,
    participants: 24,
    nextUnlockAt: 30,
    nextPrice: 179,
    providerRating: 4.6,
    status: "provider_confirmed",
    scheduleDate: "Sunday, 21 Sep 2026"
  },
  {
    id: "PXD-3104",
    service: "Deep Sofa & Carpet Shampooing",
    category: "Cleaning",
    society: "Mantri Espana · Tower 2",
    individualPrice: 999,
    communityPrice: 749,
    participants: 21,
    nextUnlockAt: 25,
    nextPrice: 699,
    providerRating: 4.9,
    status: "price_unlocked",
    scheduleDate: "Friday, 19 Sep 2026"
  },
  {
    id: "PXD-5520",
    service: "Complete 2BHK Pest Control",
    category: "Cleaning",
    society: "Brigade Metropolis · Apex Block",
    individualPrice: 899,
    communityPrice: 649,
    participants: 12,
    nextUnlockAt: 15,
    nextPrice: 599,
    providerRating: 4.7,
    status: "open",
    scheduleDate: "Sunday, 21 Sep 2026"
  }
];

const CommunityDealsPage = () => {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalDeal, setActiveModalDeal] = useState<Deal | null>(null);
  const [isStartDealModalOpen, setIsStartDealModalOpen] = useState(false);
  const [joinedSuccess, setJoinedSuccess] = useState(false);
  const [newDealService, setNewDealService] = useState('');
  const [newDealSociety, setNewDealSociety] = useState('');

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.service.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          deal.society.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                            (selectedCategory === 'appliances' && deal.category === 'Appliances') ||
                            (selectedCategory === 'cleaning' && deal.category === 'Cleaning') ||
                            (selectedCategory === 'automotive' && deal.category === 'Automotive');
    return matchesSearch && matchesCategory;
  });

  const handleJoinDeal = (deal: Deal) => {
    setDeals(prev => prev.map(d => {
      if (d.id === deal.id) {
        return { ...d, participants: d.participants + 1 };
      }
      return d;
    }));
    setJoinedSuccess(true);
    setTimeout(() => {
      setJoinedSuccess(false);
      setActiveModalDeal(null);
    }, 2000);
  };

  const handleCreateDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDealService || !newDealSociety) return;

    const newDeal: Deal = {
      id: `PXD-${Math.floor(1000 + Math.random() * 9000)}`,
      service: newDealService,
      category: 'Cleaning',
      society: newDealSociety,
      individualPrice: 599,
      communityPrice: 449,
      participants: 1,
      nextUnlockAt: 5,
      nextPrice: 399,
      providerRating: 4.8,
      status: 'open',
      scheduleDate: 'Next Weekend'
    };

    setDeals([newDeal, ...deals]);
    setIsStartDealModalOpen(false);
    setNewDealService('');
    setNewDealSociety('');
    alert(`Deal created successfully! Share link: https://proxiva.in/deal/${newDeal.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0B1528] text-white pt-16 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-indigo-500/20 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block border border-indigo-500/30">
              Proxiva Pool
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Save More Together</h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed font-normal">
              We aggregate neighbourhood demand into a single coordinated service window. Concentrated demand unlocks tiered volume discounts.
            </p>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setIsStartDealModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm shadow-sm"
              >
                Start a Deal in My Society
              </button>
              <a 
                href="/#how-it-works"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-medium px-6 py-2.5 rounded-full transition-colors text-sm"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-8 relative z-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-8 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center flex-1 min-w-[260px] bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
              <Search className="text-slate-400 w-4 h-4 mr-2.5" />
              <input 
                type="text" 
                placeholder="Search deals (e.g. AC, Sobha, PXD-4411)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-xs sm:text-sm text-slate-700 placeholder-slate-400"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCategory === 'all' ? 'bg-[#0B1528] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                All Deals
              </button>
              <button 
                onClick={() => setSelectedCategory('appliances')}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCategory === 'appliances' ? 'bg-[#0B1528] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                AC & Appliances
              </button>
              <button 
                onClick={() => setSelectedCategory('cleaning')}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCategory === 'cleaning' ? 'bg-[#0B1528] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Home & Cleaning
              </button>
              <button 
                onClick={() => setSelectedCategory('automotive')}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCategory === 'automotive' ? 'bg-[#0B1528] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Car & Vehicle
              </button>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {deal.status === 'price_unlocked' ? 'Price Unlocked' : 'Open Pool'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ★ {deal.providerRating} provider
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{deal.service}</h3>
                  <div className="flex items-center text-slate-500 mb-5 text-xs">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                    <span className="truncate">{deal.society}</span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
                    <div className="flex justify-between items-baseline mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-semibold block">Individual</span>
                        <span className="text-sm text-slate-400 line-through">₹{deal.individualPrice}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-blue-600 uppercase font-bold block">Pool Price</span>
                        <span className="text-2xl font-black text-slate-900">₹{deal.communityPrice}</span>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-slate-200/60">
                      <div className="flex justify-between text-[11px] mb-1.5 font-medium">
                        <span className="text-slate-600 flex items-center">
                          <Users className="w-3 h-3 mr-1 text-blue-600" /> {deal.participants} joined
                        </span>
                        <span className="text-green-600 font-semibold flex items-center">
                          <TrendingDown className="w-3 h-3 mr-1" /> Next: ₹{deal.nextPrice} @ {deal.nextUnlockAt}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${Math.min(100, (deal.participants / deal.nextUnlockAt) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button 
                    onClick={() => setActiveModalDeal(deal)}
                    className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center text-xs shadow-sm"
                  >
                    View Details & Join <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Deal Details Modal */}
      {activeModalDeal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setActiveModalDeal(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {activeModalDeal.id}
              </span>
              <span className="text-xs text-slate-400">Scheduled: {activeModalDeal.scheduleDate}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{activeModalDeal.service}</h3>
            <p className="text-xs text-slate-500 mb-6 flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" /> {activeModalDeal.society}
            </p>

            <div className="bg-blue-50/60 rounded-2xl p-4 mb-6 border border-blue-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-600 font-medium">Current Pool Price:</span>
                <span className="text-2xl font-black text-blue-600">₹{activeModalDeal.communityPrice}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>Original single booking:</span>
                <span className="line-through">₹{activeModalDeal.individualPrice}</span>
              </div>
              <p className="text-xs text-green-700 font-semibold mt-2 pt-2 border-t border-blue-200/60 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                You save ₹{activeModalDeal.individualPrice - activeModalDeal.communityPrice} with your neighbours!
              </p>
            </div>

            <div className="space-y-2 mb-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>One coordinated technician window (no waiting around all day)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Verified technician with 4.8★ background rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Escrow held safely until service completed</span>
              </div>
            </div>

            {joinedSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 text-center py-3 rounded-2xl font-semibold text-xs animate-in fade-in">
                🎉 Successfully joined pool! Confirmation sent to your phone.
              </div>
            ) : (
              <div className="flex gap-3">
                <button 
                  onClick={() => handleJoinDeal(activeModalDeal)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors text-xs shadow-sm"
                >
                  Join Pool for ₹{activeModalDeal.communityPrice}
                </button>
                <button 
                  onClick={() => alert(`Share link copied: https://proxiva.in/deal/${activeModalDeal.id}`)}
                  className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors flex items-center justify-center text-xs"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Start Deal Modal */}
      {isStartDealModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsStartDealModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-2">Start a Deal in Your Society</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Create a pooled service deal, share the WhatsApp link with your residents' group, and unlock group pricing.
            </p>

            <form onSubmit={handleCreateDeal} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                <input 
                  type="text" 
                  placeholder="e.g. Sofa Cleaning, Water Tank Wash, Pest Control"
                  value={newDealService}
                  onChange={(e) => setNewDealService(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Apartment / Gated Community Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Prestige Lakeside Habitat, Tower 2"
                  value={newDealSociety}
                  onChange={(e) => setNewDealSociety(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition-colors text-xs shadow-sm"
                >
                  Create & Get Shareable Invite Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default CommunityDealsPage;
