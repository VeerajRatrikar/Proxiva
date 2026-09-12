import { useState } from 'react';
import { ChevronRight, CheckCircle2, MapPin, Calendar, Upload, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookTaskPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [taskDescription, setTaskDescription] = useState('');
  const [service, setService] = useState('Document Collection');
  const [pickupLocation, setPickupLocation] = useState('Koramangala 4th Block, Bengaluru');
  const [dropLocation, setDropLocation] = useState('Indiranagar 100ft Road, Bengaluru');
  const [dateTime, setDateTime] = useState('2026-09-20T10:30');
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isDelegableConfirmed, setIsDelegableConfirmed] = useState(true);

  const servicesList = [
    { title: "Document Collection", base: 199 },
    { title: "Office & Government Visits", base: 299 },
    { title: "Repair Pickup & Drop", base: 199 },
    { title: "Return & Exchange Assistant", base: 199 },
    { title: "Property Visit", base: 499 },
    { title: "Technician Coordination", base: 299 }
  ];

  const selectedServiceObj = servicesList.find(s => s.title === service) || servicesList[0];
  const basePrice = selectedServiceObj.base;
  const distancePrice = 40;
  const urgencyPrice = isUrgent ? 100 : 0;
  const totalPrice = basePrice + distancePrice + urgencyPrice;

  const handleFinishBooking = () => {
    navigate('/track?id=PXV-102938');
  };

  const stepsList = [
    'Tell us task',
    'Service',
    'Location',
    'Date & time',
    'Upload docs',
    'Price',
    'Payment',
    'Complete'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative mb-2">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (stepsList.length - 1)) * 100}%` }}
            ></div>
            
            {stepsList.map((_, i) => (
              <div 
                key={i} 
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white transition-colors ${
                  currentStep > i + 1 
                    ? 'bg-green-600 text-white' 
                    : currentStep === i + 1 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {currentStep > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </div>
            ))}
          </div>
          <div className="hidden sm:flex justify-between text-[11px] font-medium text-slate-500">
            {stepsList.map((s, i) => (
              <span key={i} className={currentStep === i + 1 ? 'text-blue-600 font-bold' : ''}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Wizard Form Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10">
          
          {/* Step 1: Tell us your task */}
          {currentStep === 1 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 1 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Tell us what needs doing</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Briefly summarize what task you'd like your Proxiva partner to carry out.</p>

              <div className="space-y-4">
                <textarea
                  rows={4}
                  placeholder="e.g., I need someone to collect my degree certificate from Bangalore University office and deliver it to my home."
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full p-4 border border-slate-300 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 flex items-start text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Delegation Check:</strong> Proxiva partners perform authorized tasks only where personal appearance is not legally mandatory.
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select a service */}
          {currentStep === 2 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 2 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Select a Service Category</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Match your task to the closest service for optimal partner allocation.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {servicesList.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => setService(s.title)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      service === s.title 
                        ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600 shadow-sm' 
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs sm:text-sm text-slate-900">{s.title}</span>
                      <span className="text-xs font-bold text-blue-600">₹{s.base}+</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(1)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  onClick={() => setCurrentStep(3)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Enter location */}
          {currentStep === 3 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 3 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Enter Locations</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Where should the partner visit, and where is the drop location?</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup / Visit Location</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Drop Location (if applicable)</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input 
                      type="text" 
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(2)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  onClick={() => setCurrentStep(4)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Pick date & time */}
          {currentStep === 4 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 4 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Pick Date & Time</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">When would you like this task executed?</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Slot</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-blue-600 absolute left-3.5 top-3.5" />
                    <input 
                      type="datetime-local" 
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <label className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <div>
                    <span className="font-semibold text-xs text-slate-800 block">Immediate dispatch (Within 2 hours)</span>
                    <span className="text-[11px] text-slate-500">+₹100 priority surcharge</span>
                  </div>
                </label>
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(3)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  onClick={() => setCurrentStep(5)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Upload documents if required */}
          {currentStep === 5 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 5 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Upload Authorization / Documents</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Attach authorization letters, token IDs, or identification proofs if required for the visit.</p>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-50">
                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-800">
                  {documentsUploaded ? '✅ authorization_letter.pdf uploaded' : 'Drag & drop or click to upload'}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">PDF, JPG, PNG up to 10MB (Optional)</p>
                <button 
                  type="button"
                  onClick={() => setDocumentsUploaded(true)}
                  className="mt-4 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-1.5 rounded-full text-xs font-medium"
                >
                  {documentsUploaded ? 'Replace Document' : 'Upload File'}
                </button>
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(4)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  onClick={() => setCurrentStep(6)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Continue to Price Review <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Review price */}
          {currentStep === 6 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 6 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Review Upfront Price</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Full transparent breakdown before proceeding to payment.</p>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
                <div className="space-y-3 pb-4 border-b border-slate-200">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>{service} base fare</span>
                    <span className="font-semibold text-slate-900">₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Est. Distance surcharge (~8 km)</span>
                    <span className="font-semibold text-slate-900">₹{distancePrice}</span>
                  </div>
                  {isUrgent && (
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Urgent dispatch fee</span>
                      <span className="font-semibold text-slate-900">+₹{urgencyPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-green-700 font-medium">
                    <span>Live GPS tracking & photo proof</span>
                    <span>FREE</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline pt-4">
                  <span className="font-bold text-slate-900 text-sm">Total Upfront Amount</span>
                  <span className="text-3xl font-black text-blue-600">₹{totalPrice}</span>
                </div>
              </div>

              <label className="flex items-start space-x-2.5 text-xs text-slate-600 mb-4 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isDelegableConfirmed}
                  onChange={(e) => setIsDelegableConfirmed(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded mt-0.5"
                />
                <span>I confirm that this task is legally delegable and does not involve impersonation.</span>
              </label>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(5)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  disabled={!isDelegableConfirmed}
                  onClick={() => setCurrentStep(7)}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Proceed to Pay <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Pay */}
          {currentStep === 7 && (
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Step 7 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Secure Escrow Payment</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Payment is held safely in escrow and only released once task proof is verified.</p>

              <div className="space-y-3 mb-6">
                <div className="p-4 border-2 border-blue-600 bg-blue-50/40 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">⚡</span>
                    <div>
                      <p className="font-bold text-xs text-slate-900">UPI / QR (Google Pay, PhonePe, Paytm)</p>
                      <p className="text-[11px] text-slate-500">Fast & Zero convenience fee</p>
                    </div>
                  </div>
                  <span className="w-4 h-4 rounded-full border-4 border-blue-600"></span>
                </div>

                <div className="p-4 border border-slate-200 rounded-2xl flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">💳</span>
                    <div>
                      <p className="font-bold text-xs text-slate-900">Credit / Debit Card</p>
                      <p className="text-[11px] text-slate-500">Visa, Mastercard, RuPay</p>
                    </div>
                  </div>
                  <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={() => setCurrentStep(6)} className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2">Back</button>
                <button 
                  onClick={() => setCurrentStep(8)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors flex items-center text-xs shadow-sm"
                >
                  Confirm & Deposit ₹{totalPrice} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Step 8: Track to completion */}
          {currentStep === 8 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider block mb-1">Step 8 of 8</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Task Booked Successfully!</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-md mx-auto">
                Task ID <strong>PXV-102938</strong> has been created. A verified partner has been allocated and is on the way.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 max-w-sm mx-auto mb-8 text-left text-xs space-y-2 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Partner:</span>
                  <span className="font-bold text-slate-800">Arun Kumar (4.9 ★)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Escrow Amount:</span>
                  <span className="font-bold text-blue-600">₹{totalPrice} Deposited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Live Status:</span>
                  <span className="font-bold text-amber-600">On The Way</span>
                </div>
              </div>

              <button 
                onClick={handleFinishBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors inline-flex items-center text-xs shadow-sm"
              >
                Track Live Progress Now <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BookTaskPage;
