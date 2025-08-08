import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Welcome from './pages/welcome';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import Blog from './pages/blog';
import BlogDetail from './pages/BlogDetail';
import Service from './pages/service';
import FinancialPlanningAnalysis from './pages/Financial Planning & Analysis';
import TaxPreparationFiling from './pages/Tax Preparation & Filing';
import BudgetManagement from './pages/Budget Management';
import InvestmentAdvisory from './pages/Investment Advisory';
import AuditCompliance from './pages/Audit & Compliance';
import BookkeepingAccounting from './pages/Bookkeeping & Accounting';
import AdminDashboard from './pages/admindashboard';

function Layout({ children }) {
  const location = useLocation();
  const isWelcome = location.pathname === '/';
  return (
    <div className="App">
      {!isWelcome && <Header />}
      <div className={!isWelcome ? 'pt-16' : ''}>
        {children}
      </div>
      {!isWelcome && <Footer />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home1" element={<Home1 />} />
                <Route path="home2" element={<Home2 />} />
                <Route path="aboutus" element={<AboutUs />} />
                
                <Route path="contactus" element={<ContactUs />} />
                <Route path="service" element={<Service />} />
                <Route path="Financial Planning & Analysis" element={<FinancialPlanningAnalysis />} />
                <Route path="Tax Preparation & Filing" element={<TaxPreparationFiling />} />
                <Route path="Budget Management" element={<BudgetManagement />} />
                <Route path="Investment Advisory" element={<InvestmentAdvisory />} />
                <Route path="Audit & Compliance" element={<AuditCompliance />} />
                <Route path="Bookkeeping & Accounting" element={<BookkeepingAccounting />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
