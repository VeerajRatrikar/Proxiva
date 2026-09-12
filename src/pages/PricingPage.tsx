import { useState } from 'react';
import { CheckCircle2, Info, Calculator, ArrowRight, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  // Proxiva Go Calculator state
  const [distanceKm, setDistanceKm] = useState(6);
  const [waitingMinutes, setWaitingMinutes] = useState(30);
  const [isUrgent, setIsUrgent] = useState(false);

  // Proxiva Pool Calculator state
  const [poolService, setPoolService] = useState('ac');
  const [neighborsCount, setNeighborsCount] = useState(15);

  // Go Calculation
  const baseFee = 199;
  const distanceFee = distanceKm > 5 ? (distanceKm - 5) * 10 : 0;
  const waitingFee = waitingMinutes > 30 ? Math.ceil((waitingMinutes - 30) / 30) * 50 : 0;
  const urgencyFee = isUrgent ? 100 : 0;
  const totalGoCost = baseFee + distanceFee + waitingFee + urgencyFee;

  // Pool Calculation
  const poolData: Record<string, { name: string; base: number; minPrice: number; discountPerNeighbor: number }> = {
    ac: { name: 'AC Servicing', base: 699, minPrice: 449, discountPerNeighbor: 12 },
    cleaning: { name: 'Deep Sofa Cleaning', base: 999, minPrice: 699, discountPerNeighbor: 15 },
    carwash: { name: 'Car Wash & Detailing', base: 300, minPrice: 179, discountPerNeighbor: 6 },
    pest: { name: 'Pest Control (2BHK)', base: 899, minPrice: 599, discountPerNeighbor: 15 },
  };

  const currentPool = poolData[poolService] || poolData.ac;
  const calculatedDiscount = Math.min(neighborsCount * currentPool.discountPerNeighbor, currentPool.base - currentPool.minPrice);
  const poolPrice = Math.max(currentPool.base - calculatedDiscount, currentPool.minPrice);
  const totalSavings = currentPool.base - poolPrice;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0B1528] text-white pt-16 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-3 inline-block">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Fair, Clear, Predictable</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            No hidden fees. Pay only for the task, distance, and time — or pool with your society to unlock group discounts.
          </p>
        </div>
      </section>

      {/* Pricing Comparison Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Proxiva GO Pricing */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    PROXIVA GO
                  </span>
                  <span className="text-xs font-bold text-slate-400">On-demand</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Personal Task</h2>
                <p className="text-slate-500 text-sm mb-6">For single on-demand tasks across the city.</p>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900">₹199</span>
                    <span className="text-slate-500 text-sm font-medium">base fee</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Includes first 5 km & 30 min waiting time</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Distance Fee</span>
                      <span className="text-xs text-slate-500">₹10/km after first 5 km</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Waiting Time</span>
                      <span className="text-xs text-slate-500">₹50 per 30 minutes (first 30 mins free)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Urgency Fee</span>
                      <span className="text-xs text-slate-500">+₹100 for tasks required within 2 hours</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Link to="/book" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center text-sm shadow-sm">
                Book a Task <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Proxiva POOL Pricing */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    PROXIVA POOL
                  </span>
                  <span className="text-xs font-bold text-green-600">Up to 40% Off</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Community Deal</h2>
                <p className="text-slate-500 text-sm mb-6">Aggregated demand in apartments and societies.</p>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-indigo-600">Volume</span>
                    <span className="text-slate-500 text-sm font-medium">tiered pricing</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Direct bulk negotiations passed 100% to residents</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Dynamic Tier Drops</span>
                      <span className="text-xs text-slate-500">Every 5 neighbours unlocks the next lower price</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Zero Coordination Burden</span>
                      <span className="text-xs text-slate-500">One coordinated schedule, one trusted service provider</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 text-sm block">Verified Professionals</span>
                      <span className="text-xs text-slate-500">Background-verified local providers with 4.7★+ rating</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Link to="/community-deals" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center text-sm shadow-sm">
                Explore Community Deals <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculators Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Estimator</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Calculate Your Exact Costs</h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
              Use our live calculators to estimate a personal task or see your society's pool savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proxiva Go Calculator */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Proxiva Go Task Estimator
              </h3>

              <div className="space-y-5 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Estimated Distance</span>
                    <span className="text-blue-600 font-bold">{distanceKm} km</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={distanceKm} 
                    onChange={(e) => setDistanceKm(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 km</span>
                    <span>5 km (Free)</span>
                    <span>30 km</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Waiting / Queue Time</span>
                    <span className="text-blue-600 font-bold">{waitingMinutes} mins</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="180" 
                    step="15"
                    value={waitingMinutes} 
                    onChange={(e) => setWaitingMinutes(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>0 mins</span>
                    <span>30 mins (Free)</span>
                    <span>180 mins</span>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={isUrgent} 
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                    <span className="text-xs font-medium text-slate-700">Urgent delivery (within 2 hours, +₹100)</span>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 mb-6">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Base Fare:</span>
                  <span className="font-semibold text-slate-700">₹{baseFee}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Distance ({distanceKm} km):</span>
                  <span className="font-semibold text-slate-700">+₹{distanceFee}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Waiting ({waitingMinutes} mins):</span>
                  <span className="font-semibold text-slate-700">+₹{waitingFee}</span>
                </div>
                {isUrgent && (
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Urgency surcharge:</span>
                    <span className="font-semibold text-slate-700">+₹100</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">Estimated Total:</span>
                  <span className="text-2xl font-black text-blue-600">₹{totalGoCost}</span>
                </div>
              </div>

              <Link to="/book" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-full transition-colors flex items-center justify-center text-xs shadow-sm">
                Book This Estimate
              </Link>
            </div>

            {/* Proxiva Pool Calculator */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
                Community Pool Savings Calculator
              </h3>

              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Select Service</label>
                  <select 
                    value={poolService} 
                    onChange={(e) => setPoolService(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="ac">AC Servicing (Original: ₹699)</option>
                    <option value="cleaning">Deep Sofa Cleaning (Original: ₹999)</option>
                    <option value="carwash">Car Wash & Detailing (Original: ₹300)</option>
                    <option value="pest">Pest Control 2BHK (Original: ₹899)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Neighbours in Pool</span>
                    <span className="text-indigo-600 font-bold">{neighborsCount} joined</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="35" 
                    value={neighborsCount} 
                    onChange={(e) => setNeighborsCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>1 resident</span>
                    <span>15 residents</span>
                    <span>35 residents</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 mb-6">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Regular Individual Price:</span>
                  <span className="font-semibold text-slate-400 line-through">₹{currentPool.base}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Pool Tier Discount:</span>
                  <span className="font-bold text-green-600 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" /> -₹{totalSavings}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">You Pay Per Unit:</span>
                  <span className="text-2xl font-black text-indigo-600">₹{poolPrice}</span>
                </div>
              </div>

              <Link to="/community-deals" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-full transition-colors flex items-center justify-center text-xs shadow-sm">
                View Active Society Pools
              </Link>
            </div>

          </div>

          <div className="mt-12 bg-blue-50/60 border border-blue-100 rounded-2xl p-5 flex items-start text-xs text-slate-600 leading-relaxed">
            <Info className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-800">Secure Escrow Protection:</strong> Payments are held safely until completion proof (timestamped photos, receipts, or OTP) is approved. In case of cancellation before partner dispatch, 100% full refund is credited instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
