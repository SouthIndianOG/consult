import React from 'react';
import { ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-50 to-white pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Expert OBGyn Care
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                AI Healthcare Educator
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert OBGyn Care & 
              <span className="text-blue-600"> Maternal-Fetal Medicine</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MS Obstetrics & Gynecology | High-Risk Pregnancy Specialist | Medical Innovation Educator
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Learn About Our Services
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Evidence-Based Treatment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">High-Risk Pregnancy Care</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-medium">Telemedicine Available</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional Medical Care"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">MS</div>
                  <div className="text-sm text-gray-600">OBGyn Degree</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Line</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">MS</div>
                  <div className="text-sm text-gray-600">Specialization</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;