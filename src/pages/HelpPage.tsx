import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How are Proxiva Task Partners verified?",
    answer: "All our partners go through a strict 4-step verification process: ID verification, address check, criminal background check, and an in-person interview. We only onboard top-rated individuals."
  },
  {
    question: "Can I track my task in real-time?",
    answer: "Yes! Once a partner is assigned, you can track their location via GPS, communicate with them in the app, and receive photo/video proof once the task is completed."
  },
  {
    question: "How does the Community Pool pricing work?",
    answer: "We aggregate demand for specific services (like AC repair) in your apartment complex. As more neighbors join the deal, the price drops. You are guaranteed the final unlocked price at the end of the deal window."
  },
  {
    question: "What happens if a provider doesn't show up?",
    answer: "We offer a 100% money-back guarantee if a provider or task partner fails to arrive. We will also prioritize a free rescheduling for your inconvenience."
  },
  {
    question: "How do I create a new deal for my apartment?",
    answer: "Simply navigate to the Community Deals page and click 'Start a New Deal'. Select the service, your society, and generate a WhatsApp link to share with your neighbors to start building the pool."
  }
];

const HelpPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="bg-proxiva-navy text-white pt-16 pb-24 text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Browse our FAQs or reach out to our support team directly.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary bg-[#25D366] hover:bg-[#1da851] flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Support
            </button>
          </div>
        </div>
      </section>

      <section className="-mt-12 relative z-10 pb-20">
        <div className="section-container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-proxiva-navy mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    className="w-full text-left px-6 py-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-proxiva-navy">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-white text-slate-600 leading-relaxed border-t border-slate-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
