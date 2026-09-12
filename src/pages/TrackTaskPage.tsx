import { useState } from 'react';
import { Search, CheckCircle, Clock, MapPin, User, Camera, ShieldCheck } from 'lucide-react';

const TrackTaskPage = () => {
  const [taskId, setTaskId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskId.trim()) setIsTracking(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {!isTracking ? (
        <section className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-proxiva-blue" />
            </div>
            <h1 className="text-2xl font-bold text-proxiva-navy mb-2">Track Your Task</h1>
            <p className="text-slate-500 mb-8">Enter your Task ID (e.g., PXV-102938) to see live updates and partner location.</p>
            
            <form onSubmit={handleTrack} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="PXV-XXXXXX"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-proxiva-blue focus:border-proxiva-blue text-center font-medium tracking-wider uppercase"
              />
              <button type="submit" className="w-full btn-primary py-3">
                Track Status
              </button>
            </form>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="section-container max-w-4xl">
            
            {/* Header / Meta */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-proxiva-navy">Task #{taskId.toUpperCase() || 'PXV-102938'}</h1>
                <p className="text-slate-500">Document Collection • Koramangala, Bengaluru</p>
              </div>
              <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold flex items-center">
                <Clock className="w-4 h-4 mr-2" /> In Progress
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column: Timeline & Details */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Timeline Card */}
                <div className="card-premium">
                  <h3 className="text-lg font-bold text-proxiva-navy mb-6">Live Status</h3>
                  
                  <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-4">
                    {/* Step 1 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-proxiva-success"></div>
                      <p className="font-semibold text-slate-800">Task Booked</p>
                      <p className="text-sm text-slate-500">10:15 AM</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-proxiva-success"></div>
                      <p className="font-semibold text-slate-800">Partner Assigned</p>
                      <p className="text-sm text-slate-500">10:18 AM</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-proxiva-success"></div>
                      <p className="font-semibold text-slate-800">Reached Location</p>
                      <p className="text-sm text-slate-500">10:42 AM</p>
                    </div>
                    {/* Step 4 (Current) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-proxiva-blue ring-4 ring-blue-50"></div>
                      <p className="font-semibold text-proxiva-blue">Task In Progress</p>
                      <p className="text-sm text-proxiva-blue font-medium">LIVE</p>
                    </div>
                    {/* Step 5 (Future) */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-200"></div>
                      <p className="font-medium text-slate-400">Task Completed & Proof Uploaded</p>
                    </div>
                  </div>
                </div>

                {/* Proof Section (Placeholder) */}
                <div className="card-premium">
                  <h3 className="text-lg font-bold text-proxiva-navy mb-4 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-slate-400" /> Live Proof
                  </h3>
                  <div className="bg-slate-100 rounded-xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-300">
                    <Camera className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-slate-500">Photos or videos will appear here once the partner uploads them.</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Partner & Map */}
              <div className="space-y-6">
                
                {/* Partner Card */}
                <div className="card-premium bg-proxiva-navy text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-3">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold">Rahul M.</p>
                        <p className="text-sm text-slate-300 flex items-center">
                          <ShieldCheck className="w-4 h-4 mr-1 text-proxiva-success" /> Verified Partner
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-slate-400">Rating</span>
                    <span className="font-semibold text-yellow-400">★ 4.9</span>
                  </div>
                  <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                    Contact Partner
                  </button>
                </div>

                {/* Map Placeholder */}
                <div className="card-premium p-2 h-64 relative overflow-hidden bg-slate-100 border border-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                    <MapPin className="w-8 h-8 mb-2 text-slate-300" />
                    <span className="font-medium">Live Map View</span>
                    <span className="text-xs mt-1">Partner is 1.2km away</span>
                  </div>
                  {/* Decorative map elements */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-proxiva-blue rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
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
