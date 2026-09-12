import { Link } from 'react-router-dom';
import { Package, Calendar, Settings, MapPin, ChevronRight, LogOut, CheckCircle2 } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Dashboard Header */}
      <section className="bg-proxiva-navy text-white pt-12 pb-20">
        <div className="section-container flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-slate-400">Manage your tasks and community deals.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <Link to="/book" className="btn-primary bg-proxiva-blue hover:bg-blue-700">Book New Task</Link>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="-mt-12 relative z-10 pb-20">
        <div className="section-container grid md:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 space-y-1">
              <a href="#" className="flex items-center px-4 py-3 bg-blue-50 text-proxiva-blue font-semibold rounded-xl transition-colors">
                <Package className="w-5 h-5 mr-3" /> My Tasks
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-50 font-medium rounded-xl transition-colors">
                <Calendar className="w-5 h-5 mr-3" /> Community Deals
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-50 font-medium rounded-xl transition-colors">
                <MapPin className="w-5 h-5 mr-3" /> Saved Addresses
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-600 hover:bg-slate-50 font-medium rounded-xl transition-colors">
                <Settings className="w-5 h-5 mr-3" /> Settings
              </a>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link to="/" className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 font-medium rounded-xl transition-colors">
                  <LogOut className="w-5 h-5 mr-3" /> Sign Out
                </Link>
              </div>
            </div>
          </div>

          {/* Main Area */}
          <div className="md:col-span-3 space-y-8">
            
            {/* Active Tasks */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-proxiva-navy">Active Tasks</h2>
                <Link to="/track" className="text-sm font-semibold text-proxiva-blue hover:underline">Track all</Link>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-l-amber-500">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-proxiva-navy text-lg">Document Collection</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">In Progress</span>
                  </div>
                  <p className="text-slate-500 text-sm">ID: PXV-102938 • Today, 10:15 AM</p>
                  <p className="text-slate-600 mt-2 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-slate-400" /> Koramangala
                  </p>
                </div>
                <Link to="/track" className="btn-secondary whitespace-nowrap w-full md:w-auto text-center">Track Live</Link>
              </div>
            </div>

            {/* Completed Tasks */}
            <div>
              <h2 className="text-xl font-bold text-proxiva-navy mb-4">Past Tasks</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-proxiva-navy">Office Visit</span>
                      <span className="flex items-center text-proxiva-success text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 mr-1" /> Completed
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Sep 10, 2026 • Indiranagar</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
                <div className="p-6 flex justify-between items-center hover:bg-slate-50 cursor-pointer transition-colors">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-proxiva-navy">Repair Pickup</span>
                      <span className="flex items-center text-proxiva-success text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 mr-1" /> Completed
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">Aug 24, 2026 • HSR Layout</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomerDashboard;
