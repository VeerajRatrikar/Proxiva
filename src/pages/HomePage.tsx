import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Navigation, Map, FileText, Star, Clock, Users, Shield, MessageCircle, FileCheck, ArrowUpRight, CheckSquare } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 bg-brand-gray/30 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-brand-primary px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                <span>✨</span>
                <span>Bengaluru · Proxiva Go & Proxiva Pool</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Can't go?<br />
                We go for <span className="text-brand-primary">you.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From collecting documents and visiting offices to checking properties, coordinating technicians and handling everyday errands — Proxiva sends a trusted person for you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <Link to="/book" className="w-full sm:w-auto bg-brand-primary hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center shadow-md">
                  Book a Task <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <button className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-5 h-5 text-green-500 mr-2" />
                  Chat on WhatsApp
                </button>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {['Verified Task Partners', 'Live Tracking', 'Photo & Video Proof', 'Secure Payments', 'Transparent Pricing'].map((badge) => (
                  <div key={badge} className="flex items-center text-sm font-medium text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary mr-1.5" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Graphic */}
            <div className="relative hidden md:block">
              {/* Floating Overlay - Pool */}
              <div className="absolute -top-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-start gap-4">
                <div className="bg-brand-secondary p-2 rounded-lg">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-primary mb-1 uppercase tracking-wider">👥 Pool nearby</p>
                  <p className="font-semibold text-slate-900 text-sm">AC service · 17 joined</p>
                  <p className="text-sm font-medium text-green-600 mt-0.5">₹699 → ₹499 unlocked</p>
                </div>
              </div>

              {/* Main Map Card */}
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] border-4 border-white">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Route Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-brand-primary/50 border-dashed rounded-full" />
                </div>

                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center">
                  <MapPin className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm font-medium">Varthur pickup</span>
                </div>
                
                <div className="absolute top-6 right-6 bg-brand-primary rounded-full px-4 py-2">
                  <span className="text-white text-sm font-bold">✈ ETA 18 min</span>
                </div>

                {/* Partner Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                        AK
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">Arun Kumar · Task Partner</p>
                        <p className="text-xs text-slate-500 flex items-center">
                          Verified · <Star className="w-3 h-3 text-yellow-400 mx-1 fill-yellow-400" /> 4.9 · 412 tasks
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      On the way
                    </span>
                  </div>
                  
                  {/* Timeline */}
                  <div className="flex justify-between items-center relative mt-2">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-100 -z-10" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white box-content shadow-sm" />
                      <span className="text-[10px] font-semibold text-slate-700">Task confirmed</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white box-content shadow-sm" />
                      <span className="text-[10px] font-semibold text-slate-700">Partner assigned</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-slate-200 rounded-full border-2 border-white box-content shadow-sm" />
                      <span className="text-[10px] font-medium text-slate-400">Reached location</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-3 h-3 bg-slate-200 rounded-full border-2 border-white box-content shadow-sm" />
                      <span className="text-[10px] font-medium text-slate-400">Proof uploaded</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card - Proof */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-start gap-4">
                <div className="bg-green-50 p-2 rounded-lg">
                  <FileCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Proof card</p>
                  <p className="font-semibold text-slate-900 text-sm">Documents submitted</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">3 photos · 1 receipt · OTP confirmed</p>
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
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 hover:border-brand-primary/30 transition-colors">
              <span className="inline-block bg-white border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 shadow-sm">
                PROXIVA GO
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Can't be there? We can.</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A verified task partner physically goes and performs a legally and operationally delegable task on your behalf — document collection, office and admin visits, property visits, physical verification, service-centre runs, technician coordination and more.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Authorization captured before the visit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Live location and status updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Photo, video and receipt proof on completion</span>
                </li>
              </ul>
              <Link to="/services" className="inline-flex items-center font-semibold text-brand-primary hover:text-blue-700">
                Explore Proxiva Go <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Proxiva Pool Card */}
            <div className="bg-brand-secondary/50 rounded-3xl p-8 lg:p-12 border border-blue-100 hover:border-brand-primary/30 transition-colors">
              <span className="inline-block bg-white border border-blue-200 text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 shadow-sm">
                PROXIVA POOL
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Need the same service as your neighbours?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We aggregate similar requests from one apartment, gated community, office campus or neighbourhood. Concentrated demand unlocks better negotiated rates and one coordinated service window.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">AC servicing, deep cleaning, pest control, car wash and more</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">Price tiers drop as more neighbours join</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">One provider, one day, one coordinated schedule</span>
                </li>
              </ul>
              <Link to="/community-deals" className="inline-flex items-center font-semibold text-brand-primary hover:text-blue-700">
                Explore Proxiva Pool <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-brand-gray/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">PROXIVA GO</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Tasks we can take off your hands</h2>
            <p className="text-lg text-slate-600">Every task is handled by a verified partner, tracked live and closed with photo or video proof.</p>
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
                icon: Navigation
              },
              {
                title: 'Repair Pickup & Drop',
                desc: 'Device or appliance dropped at the service centre and brought back.',
                price: '₹199+',
                icon: Map
              },
              {
                title: 'Return & Exchange Assistant',
                desc: 'Returns, exchanges and store visits completed for you.',
                price: '₹199+',
                icon: ArrowUpRight
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
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-bold text-lg text-slate-900">{service.price}</span>
                  <Link to="/book" className="text-brand-primary font-semibold hover:text-blue-700">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center font-bold text-slate-700 hover:text-brand-primary transition-colors">
              See all services <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY DEALS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-indigo font-bold tracking-wider uppercase text-sm mb-4 block">PROXIVA POOL</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Save More Together</h2>
            <p className="text-lg text-slate-600">Proxiva combines demand from your apartment or neighbourhood and coordinates one service window at a better negotiated rate.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Deal 1 */}
            <div className="border border-slate-200 rounded-3xl p-6 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase">Price unlocked</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Car Wash & Detailing</h3>
              <p className="text-slate-500 text-sm mb-6 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> Sobha Dream Acres · Block B</p>
              
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-black text-slate-900">₹199</span>
                <span className="text-lg text-slate-400 line-through mb-1">₹300</span>
                <span className="text-sm font-bold text-green-600 mb-1.5 bg-green-50 px-2 rounded">Save ₹101</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-brand-primary">100% Funded</span>
                  <span className="text-slate-500">24 joined</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full w-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-medium text-slate-600 border-t border-slate-100 pt-4">
                <span className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" /> 4.8 provider</span>
                <span className="flex items-center text-orange-600"><Clock className="w-4 h-4 mr-1" /> 2d left</span>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="border border-slate-200 rounded-3xl p-6 relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-6 right-6 bg-brand-secondary text-brand-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase">Provider confirmed</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Sofa & Carpet Cleaning</h3>
              <p className="text-slate-500 text-sm mb-6 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> Mantri Espana · Tower 2</p>
              
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-black text-slate-900">₹749</span>
                <span className="text-lg text-slate-400 line-through mb-1">₹999</span>
                <span className="text-sm font-bold text-green-600 mb-1.5 bg-green-50 px-2 rounded">Save ₹250</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-brand-primary">100% Funded</span>
                  <span className="text-slate-500">21 joined</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full w-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-medium text-slate-600 border-t border-slate-100 pt-4">
                <span className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" /> 4.9 provider</span>
                <span className="flex items-center text-orange-600"><Clock className="w-4 h-4 mr-1" /> 1d left</span>
              </div>
            </div>

            {/* Deal 3 */}
            <div className="border border-brand-primary/30 rounded-3xl p-6 relative overflow-hidden bg-brand-secondary/30 shadow-md">
              <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase">Price unlocked</div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">AC Service</h3>
              <p className="text-slate-500 text-sm mb-6 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> Prestige Lakeside Habitat · Tower 4</p>
              
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-black text-slate-900">₹499</span>
                <span className="text-lg text-slate-400 line-through mb-1">₹699</span>
                <span className="text-sm font-bold text-green-600 mb-1.5 bg-green-50 px-2 rounded">Save ₹200</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm font-semibold mb-2">
                  <span className="text-brand-primary">3 more → ₹447</span>
                  <span className="text-slate-700">17 joined</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full w-[85%] relative"></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm font-medium text-slate-600 border-t border-slate-200 pt-4">
                <span className="flex items-center"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" /> 4.7 provider</span>
                <span className="flex items-center text-brand-primary"><Clock className="w-4 h-4 mr-1" /> 3d left</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-slate-400 mb-8 italic">Example pricing shown for demonstration. Not a guaranteed rate.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/community-deals" className="bg-brand-indigo hover:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors flex items-center justify-center">
              Find community deals
            </Link>
            <button className="bg-white border-2 border-brand-indigo text-brand-indigo font-bold px-8 py-3.5 rounded-full transition-colors hover:bg-indigo-50">
              Start a deal in my society
            </button>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-slate-500 font-bold tracking-wider uppercase text-sm mb-4 block">HOW IT WORKS</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Two simple journeys</h2>
            <p className="text-lg text-slate-600">One for the task only you needed to be present for. One for the service your whole block needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            {/* Divider line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-12 w-px bg-slate-200 -translate-x-1/2"></div>

            {/* Left: Personal Task */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center flex items-center justify-center">
                <span className="bg-brand-secondary text-brand-primary text-xs px-2.5 py-1 rounded uppercase tracking-wider mr-3">Proxiva Go</span>
                Personal Task
              </h3>
              <div className="space-y-6">
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
                  <div key={i} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary flex items-center justify-center font-bold text-sm shrink-0 mr-4 shadow-sm z-10">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center md:text-left">
                <Link to="/book" className="bg-brand-primary hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors inline-block">
                  Book a task
                </Link>
              </div>
            </div>

            {/* Right: Community Deal */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center flex items-center justify-center">
                <span className="bg-indigo-50 text-brand-indigo text-xs px-2.5 py-1 rounded uppercase tracking-wider mr-3">Proxiva Pool</span>
                Community Deal
              </h3>
              <div className="space-y-6">
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
                  <div key={i} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-indigo text-brand-indigo flex items-center justify-center font-bold text-sm shrink-0 mr-4 shadow-sm z-10">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center md:text-left">
                <Link to="/community-deals" className="bg-brand-indigo hover:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-full transition-colors inline-block">
                  Browse deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST & SAFETY */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="max-w-xl">
              <span className="text-slate-400 font-bold tracking-wider uppercase text-sm mb-4 block">TRUST & SAFETY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Authorized assistance — never impersonation</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Proxiva provides authorized task assistance where delegation is permitted. Every custom task is classified before it is accepted.
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="bg-green-900/40 border border-green-800 rounded-lg p-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-4 shrink-0"></div>
                  <span className="text-white font-medium">Proxy eligible</span>
                </div>
                <div className="bg-yellow-900/40 border border-yellow-800 rounded-lg p-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-4 shrink-0"></div>
                  <span className="text-white font-medium">Authorization required</span>
                </div>
                <div className="bg-red-900/40 border border-red-800 rounded-lg p-4 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-4 shrink-0"></div>
                  <span className="text-white font-medium">Personal appearance required</span>
                </div>
              </div>

              <p className="text-sm text-slate-500 mb-8">
                Some legal, government, financial, identity-verification and other activities may require personal appearance. Proxiva does not impersonate customers.
              </p>

              <button className="text-white border-b-2 border-brand-primary pb-1 font-bold hover:text-brand-secondary transition-colors">
                Read trust & safety
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Verified partners', desc: 'ID and background checks before a partner takes a task.', icon: Shield },
                { title: 'Live GPS tracking', desc: 'See where your partner is at every stage.', icon: Radar },
                { title: 'Photo & video proof', desc: 'Visual proof attached to every completed task.', icon: FileCheck },
                { title: 'OTP confirmation', desc: 'Handovers confirmed with a one-time code.', icon: CheckSquare }
              ].map((feature, i) => (
                <div key={i} className="bg-brand-navy-light rounded-2xl p-6 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Something needs doing across town today?</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Book a verified task partner in minutes, or gather your neighbours and unlock a better price on the service everyone needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/book" className="bg-white text-brand-primary hover:bg-slate-50 font-bold px-8 py-4 rounded-full transition-colors text-lg">
                  Book a task
                </Link>
                <Link to="/community-deals" className="bg-transparent border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-colors text-lg">
                  Find community deals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
