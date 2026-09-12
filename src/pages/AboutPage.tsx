import { Users, Target, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="section-container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-proxiva-navy mb-6">About Proxiva</h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "Proxiva is a human-powered task and local services platform designed to make physical tasks easier and local services more affordable."
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <Target className="w-8 h-8 text-proxiva-blue" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proxiva-navy mb-4">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Make everyday tasks possible even when you can't be there — and make local services cheaper when communities come together.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-proxiva-indigo" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proxiva-navy mb-4">Community Powered</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We believe that neighborhoods that buy together, save together. By aggregating demand in apartment complexes and localities, we eliminate logistics waste and pass the savings directly to you.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <Shield className="w-8 h-8 text-proxiva-success" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-proxiva-navy mb-4">Trust at the Core</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every task partner is background-verified. We don't impersonate—we represent you transparently and legally. Your tasks are tracked with live GPS, and completed with photo/video proof.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
