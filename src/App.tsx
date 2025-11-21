import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import CarePrograms from './components/CarePrograms';
import ProgramDetail from './components/ProgramDetail';
import Login from './components/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProgramForm from './components/admin/AdminProgramForm';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-medical-900 text-white font-sans selection:bg-heritage-gold/30">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Services />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/care-programs" element={<CarePrograms />} />
              <Route path="/program/:id" element={<ProgramDetail />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/new" element={<AdminProgramForm />} />
              <Route path="/admin/edit/:id" element={<AdminProgramForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider >
  );
}

export default App;