import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Send, FileText, Star, Clock, Users, Shield, MessageCircle, FileCheck, CheckSquare, Radar, Building, Wrench, Package } from 'lucide-react';

export default function HomePage() {
  const openWhatsApp = () => {
    window.open('https://wa.me/919999999999?text=Hi%20Proxiva%2C%20I%20need%20help%20with%20a%20task', '_blank');
  };

  return (
    <div className="bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-6">
                <span>✨</span>
                <span>Bengaluru · Proxiva Go & Proxiva Pool</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                Can't go?<br />
                We go for <span className="text-blue-600">you.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-normal">
                From collecting documents and visiting offices to checking properties, coordinating technicians and handling everyday errands — Proxiva sends a trusted person for you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                <Link 
                  to="/book" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-full transition-colors flex items-center justify-center text-sm shadow-sm"
                >
                  Book a Task <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button 
                  onClick={openWhatsApp}
                  className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-6 py-3 rounded-full transition-colors flex items-center justify-center text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>

              <div className="mb-10">
                <Link to="/community-deals" className="text-sm font-medium text-slate-600 hover:text-blue-600 inline-flex items-center transition-colors">
                  Find Community Deals
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-slate-200/60">
                {['Verified Task Partners', 'Live Tracking', 'Photo & Video Proof', 'Secure Payments', 'Transparent Pricing'].map((badge) => (
                  <div key={badge} className="flex items-center text-xs font-medium text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mr-1.5 shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphic Preview Widget */}
            <div className="relative">
              {/* Floating Top-Right Badge: Pool nearby */}
              <div className="absolute -top-4 right-2 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Pool nearby</p>
                  <p className="font-semibold text-slate-900 text-xs">AC service · 17 joined</p>
                  <p className="text-xs font-medium text-green-600 mt-0.5">₹699 → ₹499 unlocked</p>
                </div>
              </div>

              {/* Main Card Container */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-slate-100 relative">
                {/* Simulated Map Container */}
                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 rounded-2xl h-64 relative overflow-hidden p-4 mb-5 border border-blue-700/50">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  
                  {/* Route dashed curve */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-36 border-2 border-white/40 border-dashed rounded-full transform -rotate-12" />
                  </div>

                  {/* Top-Left Location Tag */}
                  <div className="relative inline-flex items-center bg-white text-slate-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 mr-1.5" />
                    Varthur pickup
                  </div>

                  {/* ETA Tag */}
                  <div className="absolute bottom-4 right-4 bg-white text-slate-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm flex items-center">
                    <Send className="w-3.5 h-3.5 text-blue-600 mr-1.5" />
                    ETA 18 min
                  </div>
                </div>

                {/* Partner Details Card */}
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                        AK
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-xs">Arun Kumar · Task Partner</p>
                        <p className="text-[11px] text-slate-500 flex items-center mt-0.5">
                          Verified · <Star className="w-3 h-3 text-amber-400 fill-amber-400 mx-1" /> 4.9 · 412 tasks
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      On the way
                    </span>
                  </div>

                  {/* Status Timeline */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/60">
                    <div className="flex items-center text-xs font-medium text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2.5 shrink-0" />
                      Task confirmed
                    </div>
                    <div className="flex items-center text-xs font-medium text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2.5 shrink-0" />
                      Partner assigned
                    </div>
                    <div className="flex items-center text-xs font-medium text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-slate-300 mr-2.5 shrink-0" />
                      Reached location
                    </div>
                    <div className="flex items-center text-xs font-medium text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-slate-300 mr-2.5 shrink-0" />
                      Proof uploaded
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card: Proof Card */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Proof card</p>
                  <p className="font-semibold text-slate-900 text-xs">Documents submitted</p>
                  <p className="text-[11px] font-medium text-slate-500 mt-0.5">3 photos · 1 receipt · OTP confirmed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE OFFERINGS (Proxiva Go vs Pool) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Proxiva Go Card */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-between">
              <div>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                  PROXIVA GO
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Can't be there? We can.</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
                  A verified task partner physically goes and performs a legally and operationally delegable task on your behalf — document collection, office and admin visits, property visits, physical verification, service-centre runs, technician coordination and more.
                </p>
                <ul className="space-y-3.5 mb-10">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Authorization captured before the visit</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Live location and status updates</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Photo, video and receipt proof on completion</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors inline-block text-sm">
                  Explore Proxiva Go
                </Link>
              </div>
            </div>

            {/* Proxiva Pool Card */}
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 hover:border-slate-200 transition-colors flex flex-col justify-between">
              <div>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                  PROXIVA POOL
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Need the same service as your neighbours?</h2>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
                  We aggregate similar requests from one apartment, gated community, office campus or neighbourhood. Concentrated demand unlocks better negotiated rates and one coordinated service window.
                </p>
                <ul className="space-y-3.5 mb-10">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">AC servicing, deep cleaning, pest control, car wash and more</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">Price tiers drop as more neighbours join</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">One provider, one day, one coordinated schedule</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link to="/community-deals" className="bg-slate-200/80 hover:bg-slate-300 text-slate-800 font-medium px-6 py-2.5 rounded-full transition-colors inline-block text-sm">
                  Explore Proxiva Pool
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">PROXIVA GO</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Tasks we can take off your hands</h2>
            <p className="text-sm sm:text-base text-slate-600">Every task is handled by a verified partner, tracked live and closed with photo or video proof.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Document Collection',
                desc: 'A verified partner collects or submits your documents where delegation is permitted.',
                price: '₹199+',
                icon: FileText
              },
              {
                title: 'Office & Government Visits',
                desc: 'Admin and office visits handled on your behalf with proof at every step.',
                price: '₹299+',
                icon: Building
              },
              {
                title: 'Repair Pickup & Drop',
                desc: 'Device or appliance dropped at the service centre and brought back.',
                price: '₹199+',
                icon: Wrench
              },
              {
                title: 'Return & Exchange Assistant',
                desc: 'Returns, exchanges and store visits completed for you.',
                price: '₹199+',
                icon: Package
              },
              {
                title: 'Property Visit',
                desc: 'Walkthrough of a flat, plot or office with photos and video proof.',
                price: '₹499+',
                icon: MapPin
              },
              {
                title: 'Technician Coordination',
                desc: 'Someone present at home to receive and supervise a technician.',
                price: '₹299+',
                icon: Clock
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-bold text-slate-900">{service.price}</span>
                  <Link to="/book" className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-1.5 rounded-full font-medium text-xs transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center font-bold text-sm text-slate-700 hover:text-blue-600 transition-colors">
              See all services <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY DEALS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">PROXIVA POOL</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Save More Together</h2>
            <p className="text-sm sm:text-base text-slate-600">Proxiva combines demand from your apartment or neighbourhood and coordinates one service window at a better negotiated rate.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Deal 1 */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Car Wash & Detailing</h3>
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Price unlocked</span>
                </div>
                <p className="text-slate-500 text-xs mb-5 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Sobha Dream Acres · Block B
                </p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-blue-600">₹199</span>
                  <span className="text-sm text-slate-400 line-through">₹300</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">Save ₹101</span>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-600 h-full rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> 24 joined</span>
                    <span className="text-slate-600">Best price unlocked</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-medium text-slate-500 pt-3 border-t border-slate-100 mb-6">
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" /> 4.8 provider</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> 2d left</span>
                </div>
              </div>

              <Link to="/community-deals" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-full transition-colors flex items-center justify-center text-sm">
                Join Deal <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Deal 2 */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">Sofa & Carpet Cleaning</h3>
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Provider confirmed</span>
                </div>
                <p className="text-slate-500 text-xs mb-5 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Mantri Espana · Tower 2
                </p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-blue-600">₹749</span>
                  <span className="text-sm text-slate-400 line-through">₹999</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">Save ₹250</span>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-600 h-full rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> 21 joined</span>
                    <span className="text-slate-600">Best price unlocked</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-medium text-slate-500 pt-3 border-t border-slate-100 mb-6">
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" /> 4.9 provider</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> 1d left</span>
                </div>
              </div>

              <Link to="/community-deals" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-full transition-colors flex items-center justify-center text-sm">
                Join Deal <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Deal 3 */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-900">AC Service</h3>
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Price unlocked</span>
                </div>
                <p className="text-slate-500 text-xs mb-5 flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Prestige Lakeside Habitat · Tower 4
                </p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-black text-blue-600">₹499</span>
                  <span className="text-sm text-slate-400 line-through">₹699</span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">Save ₹200</span>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-2">
                    <div className="bg-blue-600 h-full rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" /> 17 joined</span>
                    <span className="text-slate-600">3 more → ₹447</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-medium text-slate-500 pt-3 border-t border-slate-100 mb-6">
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 mr-1" /> 4.7 provider</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> 3d left</span>
                </div>
              </div>

              <Link to="/community-deals" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-full transition-colors flex items-center justify-center text-sm">
                Join Deal <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
          
          <p className="text-center text-xs text-slate-400 mb-8">Example pricing shown for demonstration. Not a guaranteed rate.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/community-deals" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-full transition-colors flex items-center justify-center text-sm">
              Find community deals
            </Link>
            <Link to="/community-deals" className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-7 py-3 rounded-full transition-colors flex items-center justify-center text-sm">
              Start a deal in my society
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-slate-500 font-bold tracking-wider uppercase text-xs mb-3 block">HOW IT WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Two simple journeys</h2>
            <p className="text-sm sm:text-base text-slate-600">One for the task only you needed to be present for. One for the service your whole block needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left: Personal Task */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">Proxiva Go</span>
                  <h3 className="text-xl font-bold text-slate-900">Personal Task</h3>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    'Tell us your task',
                    'Select a service',
                    'Enter location',
                    'Pick date & time',
                    'Upload documents if required',
                    'Review price',
                    'Pay',
                    'Track to completion'
                  ].map((step, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-7 h-7 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3.5">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link to="/book" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-6 py-2.5 rounded-xl transition-colors inline-block text-sm">
                  Book a task
                </Link>
              </div>
            </div>

            {/* Right: Community Deal */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">Proxiva Pool</span>
                  <h3 className="text-xl font-bold text-slate-900">Community Deal</h3>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    'Find the service',
                    'Choose your society',
                    'See local demand',
                    'Join the pool',
                    'Invite neighbours',
                    'Price tier unlocks',
                    'Book & pay',
                    'Appointment, track, review'
                  ].map((step, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <div className="w-7 h-7 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mr-3.5">
                        {i + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Link to="/community-deals" className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-6 py-2.5 rounded-xl transition-colors inline-block text-sm">
                  Browse deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & SAFETY */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <span className="text-slate-400 font-bold tracking-wider uppercase text-xs mb-3 block">TRUST & SAFETY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                Authorized assistance —<br />never impersonation
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed font-normal">
                Proxiva provides authorized task assistance where delegation is permitted. Every custom task is classified before it is accepted.
              </p>
              
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-xl px-3.5 py-2 flex items-center text-xs font-medium text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mr-2 shrink-0"></div>
                  Proxy eligible
                </div>
                <div className="bg-amber-950/60 border border-amber-800/80 rounded-xl px-3.5 py-2 flex items-center text-xs font-medium text-amber-400">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2 shrink-0"></div>
                  Authorization required
                </div>
                <div className="bg-rose-950/60 border border-rose-800/80 rounded-xl px-3.5 py-2 flex items-center text-xs font-medium text-rose-400">
                  <div className="w-2 h-2 rounded-full bg-rose-400 mr-2 shrink-0"></div>
                  Personal appearance required
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                Some legal, government, financial, identity-verification and other activities may require personal appearance. Proxiva does not impersonate customers.
              </p>

              <div>
                <Link to="/about" className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-6 py-2.5 rounded-xl transition-colors inline-block text-xs">
                  Read trust & safety
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Verified partners', desc: 'ID and background checks before a partner takes a task.', icon: Shield },
                { title: 'Live GPS tracking', desc: 'See where your partner is at every stage.', icon: Radar },
                { title: 'Photo & video proof', desc: 'Visual proof attached to every completed task.', icon: FileCheck },
                { title: 'OTP confirmation', desc: 'Handovers confirmed with a one-time code.', icon: CheckSquare }
              ].map((feature, i) => (
                <div key={i} className="bg-[#111C35] rounded-2xl p-6 border border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 rounded-3xl p-10 md:p-14 text-center shadow-xl text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Something needs doing across town today?
            </h2>
            <p className="text-sm md:text-base text-blue-100 max-w-2xl mx-auto mb-8 font-normal">
              Book a verified task partner in minutes, or gather your neighbours and unlock a better price on the service everyone needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/book" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-7 py-3 rounded-full transition-colors text-sm shadow-sm">
                Book a task
              </Link>
              <Link to="/community-deals" className="border border-white/40 hover:bg-white/10 text-white font-medium px-7 py-3 rounded-full transition-colors text-sm">
                Find community deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
