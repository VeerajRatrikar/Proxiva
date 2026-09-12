import { useState, useEffect } from 'react';
import { Search, Clock, MapPin, Camera, ShieldCheck, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const TrackTaskPage = () => {
  const [searchParams] = useSearchParams();
  const [taskId, setTaskId] = useState(searchParams.get('id') || '');
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (searchParams.get('id')) {
      setIsTracking(true);
    }
  }, [searchParams]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskId.trim()) setIsTracking(true);
  };

  const handleQuickTrack = (id: string) => {
    setTaskId(id);
    setIsTracking(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {!isTracking ? (
        <section className="flex-grow flex flex-col items-center justify-center p-6 py-16">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Search className="w-7 h-7 text-blue-600" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">Track Your Task</h1>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Enter your Task ID to see live updates, partner location, and uploaded proof documents.
            </p>
            
            <form onSubmit={handleTrack} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="e.g. PXV-102938"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-medium tracking-wider uppercase text-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm"
              >
                Track Status
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-400 mb-2">Want to try a demo task?</p>
              <button 
                onClick={() => handleQuickTrack('PXV-102938')}
                className="inline-flex items-center text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
              >
                Track Demo Task (PXV-102938) <ArrowRight className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header / Meta */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    Proxiva Go
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">Booked Today, 10:15 AM</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Task #{taskId.toUpperCase() || 'PXV-102938'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1" /> Document Collection • Koramangala to Indiranagar, Bengaluru
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-amber-50 text-amber-700 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5" /> Partner On The Way
                </span>
                <button 
                  onClick={() => setIsTracking(false)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  Change Task
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left 2 Columns: Timeline & Proof */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Live Timeline Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center justify-between">
                    <span>Live Timeline</span>
                    <span className="text-xs font-normal text-slate-400">Auto-refreshing</span>
                  </h3>
                  
                  <div className="relative border-l-2 border-slate-100 ml-4 space-y-7 pb-2">
                    {/* Step 1 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <p className="font-semibold text-xs sm:text-sm text-slate-800">Task Confirmed & Escrow Paid</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">10:15 AM · ₹239 securely deposited</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <p className="font-semibold text-xs sm:text-sm text-slate-800">Partner Assigned</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">10:18 AM · Arun Kumar (4.9 ★) confirmed</p>
                    </div>

                    {/* Step 3 (Current) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 animate-pulse"></div>
                      <p className="font-bold text-xs sm:text-sm text-blue-600 flex items-center">
                        Partner On The Way to Location
                        <span className="ml-2 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">CURRENT</span>
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Estimated arrival in ~14 mins (Traffic: Normal)</p>
                    </div>

                    {/* Step 4 (Future) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-slate-200"></div>
                      <p className="font-medium text-xs sm:text-sm text-slate-400">Document Handover & OTP Verification</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Pending partner arrival</p>
                    </div>

                    {/* Step 5 (Future) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-slate-200"></div>
                      <p className="font-medium text-xs sm:text-sm text-slate-400">Completion Proof Uploaded & Escrow Released</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">3 photos + acknowledgment receipt</p>
                    </div>
                  </div>
                </div>

                {/* Proof Section */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-slate-500" /> Uploaded Proof & Media
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm text-slate-400">
                      <Camera className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700">Proof documents awaiting partner upload</p>
                    <p className="text-[11px] text-slate-400 mt-1 max-w-sm">
                      Geo-tagged photos of submitted documents and acknowledgment receipts will appear here as soon as the partner uploads them.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Partner & Map */}
              <div className="space-y-6">
                
                {/* Partner Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-sm">
                      AK
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Arun Kumar</h4>
                      <p className="text-xs text-slate-500 flex items-center mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1 text-green-600" />
                        Verified Task Partner
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 bg-slate-50 rounded-2xl p-3 mb-4 text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Rating</p>
                      <p className="text-xs font-bold text-slate-800">★ 4.9 (412)</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Vehicle</p>
                      <p className="text-xs font-bold text-slate-800">Honda Activa</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open('https://wa.me/919999999999?text=Hi%20Arun%2C%20regarding%20task%20PXV-102938', '_blank')}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> WhatsApp
                    </button>
                    <button 
                      onClick={() => alert('Dialing partner Arun Kumar (+91 98765 43210)...')}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5" /> Call
                    </button>
                  </div>
                </div>

                {/* Simulated Map View */}
                <div className="bg-[#0B1528] rounded-3xl p-4 text-white relative overflow-hidden shadow-sm border border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Live GPS Location</span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-800">Live</span>
                  </div>

                  <div className="h-44 bg-slate-900 rounded-2xl relative overflow-hidden border border-slate-800 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
                    
                    {/* Partner Pin */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-ping absolute"></div>
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg relative z-10"></div>
                      <span className="bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow mt-1">Partner: 1.4 km away</span>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-[11px] text-slate-400">Destination: Koramangala 4th Block</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}
    </div>
  );
};

export default TrackTaskPage;
