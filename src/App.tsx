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

function App() {
  return (
    <AuthProvider>
      <Router>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;