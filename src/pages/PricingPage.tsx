import { CheckCircle2, Info } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="bg-proxiva-navy text-white pt-16 pb-12 text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            No hidden fees. Pay for the task, the distance, and the time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Proxiva GO Pricing */}
            <div className="card-premium border-t-4 border-t-proxiva-blue">
              <h2 className="text-2xl font-bold text-proxiva-navy mb-2">Proxiva GO</h2>
              <p className="text-slate-500 mb-6">For personal, one-off tasks.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-proxiva-navy">₹199</span>
                <span className="text-slate-500"> base fee</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-success mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Distance Fee</span>
                    <span className="text-sm text-slate-500">₹10/km after first 5km</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-success mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Waiting Time</span>
                    <span className="text-sm text-slate-500">₹50 per 30 minutes (first 30 mins free)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-success mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Urgency Fee</span>
                    <span className="text-sm text-slate-500">+₹100 for tasks needed within 2 hours</span>
                  </div>
                </li>
              </ul>
              
              <button className="w-full btn-primary">Book a Task</button>
            </div>

            {/* Proxiva POOL Pricing */}
            <div className="card-premium border-t-4 border-t-proxiva-indigo">
              <h2 className="text-2xl font-bold text-proxiva-navy mb-2">Proxiva POOL</h2>
              <p className="text-slate-500 mb-6">For community aggregated services.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-proxiva-navy">Up to 40%</span>
                <span className="text-slate-500"> savings</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-indigo mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Dynamic Pricing</span>
                    <span className="text-sm text-slate-500">Price drops as more neighbors join the pool.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-indigo mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Small Platform Fee</span>
                    <span className="text-sm text-slate-500">A flat ₹49 fee per user for coordination.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-indigo mr-3 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Guaranteed Providers</span>
                    <span className="text-sm text-slate-500">Top-rated local professionals only.</span>
                  </div>
                </li>
              </ul>
              
              <button className="w-full btn-primary bg-proxiva-indigo hover:bg-indigo-700">Find Deals</button>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start">
            <Info className="w-6 h-6 text-proxiva-blue mr-4 shrink-0" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold">Note on payments:</span> Payments are held securely and only released to the Task Partner once the task is marked as completed with valid proof (photos/videos). In case of cancellation before a partner is assigned, a full refund is issued instantly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
