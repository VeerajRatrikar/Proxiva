import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CommunityDealsPage from './pages/CommunityDealsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/community-deals" element={<CommunityDealsPage />} />
            {/* Additional routes will go here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
