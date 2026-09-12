import { useState } from 'react';
import { ChevronRight, CheckCircle2, MapPin, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookTaskPage = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');

  const services = [
    "Document Collection", "Office & Govt Visits", "Repair Pickup & Drop",
    "Return & Exchange", "Property Visit", "Technician Coordination"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 py-12">
      <div className="section-container max-w-3xl">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-proxiva-blue -z-10 transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
            
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-slate-50 transition-colors ${step >= i ? 'bg-proxiva-blue text-white' : 'bg-slate-200 text-slate-500'}`}>
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs font-medium text-slate-500 px-2">
            <span>Service</span>
            <span>Location</span>
            <span>Details</span>
            <span>Review</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-proxiva-navy mb-6">Select a Service</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button 
                    key={s}
                    onClick={() => setService(s)}
                    className={`p-4 rounded-xl border text-left transition-all ${service === s ? 'border-proxiva-blue bg-blue-50 ring-1 ring-proxiva-blue' : 'border-slate-200 hover:border-proxiva-blue/50 hover:bg-slate-50'}`}
                  >
                    <span className="font-semibold text-proxiva-navy">{s}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  disabled={!service}
                  onClick={() => setStep(2)} 
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Continue <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-proxiva-navy mb-6">Where should we go?</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pickup / Start Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="text" placeholder="Enter complete address..." className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-proxiva-blue focus:border-proxiva-blue" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Drop / End Location (Optional)</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="text" placeholder="Enter complete address..." className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-proxiva-blue focus:border-proxiva-blue" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(1)} className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors">Back</button>
                <button onClick={() => setStep(3)} className="btn-primary flex items-center">
                  Continue <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-proxiva-navy mb-6">Task Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">When do you need this done?</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <input type="datetime-local" className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-proxiva-blue focus:border-proxiva-blue" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Instructions for Partner</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                    <textarea rows={4} placeholder="Please explain exactly what needs to be done..." className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-proxiva-blue focus:border-proxiva-blue"></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(2)} className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors">Back</button>
                <button onClick={() => setStep(4)} className="btn-primary flex items-center">
                  Review & Pay <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-proxiva-blue" />
                </div>
                <h2 className="text-2xl font-bold text-proxiva-navy">Review Your Booking</h2>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Service</span>
                  <span className="font-bold text-proxiva-navy">{service}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Base Fee</span>
                  <span className="font-semibold text-slate-800">₹199</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Est. Distance Fee</span>
                  <span className="font-semibold text-slate-800">₹40</span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200 text-lg">
                  <span className="font-bold text-proxiva-navy">Total to Pay</span>
                  <span className="font-extrabold text-proxiva-blue">₹239</span>
                </div>
              </div>

              <div className="mt-8 flex justify-between gap-4">
                <button onClick={() => setStep(3)} className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors flex-1">Back</button>
                <Link to="/track" className="btn-primary flex-2 text-center w-full justify-center">
                  Pay ₹239 & Confirm
                </Link>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default BookTaskPage;
