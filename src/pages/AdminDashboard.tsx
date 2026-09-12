import { Users, Briefcase, Activity, CheckCircle2, TrendingUp, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      
      {/* Admin Topbar */}
      <header className="bg-proxiva-navy text-white sticky top-0 z-50">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-proxiva-blue rounded-lg flex items-center justify-center text-white font-bold text-xl italic tracking-tighter">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-white">PROXIVA Admin</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input type="text" placeholder="Search tasks, users..." className="bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:ring-1 focus:ring-proxiva-blue" />
            </div>
            <button className="relative">
              <Bell className="w-5 h-5 text-slate-300 hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-proxiva-navy"></span>
            </button>
            <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:block flex-shrink-0">
          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center px-4 py-2.5 bg-blue-50 text-proxiva-blue font-semibold rounded-lg">
              <Activity className="w-5 h-5 mr-3" /> Overview
            </a>
            <a href="#" className="flex items-center px-4 py-2.5 text-slate-600 hover:bg-slate-50 font-medium rounded-lg transition-colors">
              <Briefcase className="w-5 h-5 mr-3" /> Bookings
            </a>
            <a href="#" className="flex items-center px-4 py-2.5 text-slate-600 hover:bg-slate-50 font-medium rounded-lg transition-colors">
              <Users className="w-5 h-5 mr-3" /> Task Partners
            </a>
            <a href="#" className="flex items-center px-4 py-2.5 text-slate-600 hover:bg-slate-50 font-medium rounded-lg transition-colors">
              <Users className="w-5 h-5 mr-3" /> Customers
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-proxiva-navy">Dashboard Overview</h1>
            <p className="text-slate-500 text-sm">Welcome to the Proxiva Admin control center.</p>
          </div>

          {/* KPI Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-proxiva-blue" />
                </div>
                <span className="flex items-center text-xs font-semibold text-proxiva-success bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" /> 12%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Active Tasks</p>
              <h3 className="text-2xl font-bold text-proxiva-navy mt-1">142</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-proxiva-indigo" />
                </div>
                <span className="flex items-center text-xs font-semibold text-proxiva-success bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" /> 8%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Community Pools</p>
              <h3 className="text-2xl font-bold text-proxiva-navy mt-1">28</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-proxiva-success" />
                </div>
                <span className="flex items-center text-xs font-semibold text-proxiva-success bg-green-50 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" /> 24%
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">Tasks Completed</p>
              <h3 className="text-2xl font-bold text-proxiva-navy mt-1">3,892</h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-slate-600" />
                </div>
              </div>
              <p className="text-slate-500 text-sm font-medium">Active Partners</p>
              <h3 className="text-2xl font-bold text-proxiva-navy mt-1">84</h3>
            </div>
          </div>

          {/* Recent Bookings Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <h2 className="font-bold text-proxiva-navy">Recent Bookings</h2>
              <button className="text-sm text-proxiva-blue font-semibold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-white text-slate-500 text-xs uppercase border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-semibold">ID</th>
                    <th className="px-6 py-4 font-semibold">Service</th>
                    <th className="px-6 py-4 font-semibold">Customer</th>
                    <th className="px-6 py-4 font-semibold">Partner</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-proxiva-navy">PXV-102938</td>
                    <td className="px-6 py-4">Document Collection</td>
                    <td className="px-6 py-4">John Doe</td>
                    <td className="px-6 py-4 text-proxiva-blue hover:underline cursor-pointer">Rahul M.</td>
                    <td className="px-6 py-4">
                      <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold">In Progress</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-proxiva-navy">PXV-102937</td>
                    <td className="px-6 py-4">Office Visit</td>
                    <td className="px-6 py-4">Sarah Smith</td>
                    <td className="px-6 py-4 text-slate-400">Unassigned</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold">Pending</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-proxiva-navy">PXV-102936</td>
                    <td className="px-6 py-4">Repair Pickup</td>
                    <td className="px-6 py-4">Amit Kumar</td>
                    <td className="px-6 py-4 text-proxiva-blue hover:underline cursor-pointer">Priya S.</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-semibold">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
