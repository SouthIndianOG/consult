import React from 'react';
import { Heart, Calendar, Phone, MapPin, ExternalLink, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: 'https://www.instagram.com/southindianog/',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      url: 'https://www.youtube.com/@RealSouthindianOG',
      label: 'YouTube'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/southindianog/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      url: 'https://x.com/SouthindianOG',
      label: 'Twitter'
    }
  ];

  const quickLinks = [
    { name: 'OBGyn Services', href: '#services' },
    { name: 'About Dr. Prashanth', href: '#about' },
    { name: 'Patient Resources', href: '#resources' },
    { name: 'Book Consultation', href: '#contact' },
    { name: 'Emergency Care', href: '#contact' }
  ];

  const services = [
    'Comprehensive OBGyn Care',
    'High-Risk Pregnancy Management',
    'Maternal-Fetal Medicine',
    'Second Opinion Services',
    'Telemedicine Consultations',
    'AI Healthcare Education'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/public/South indian png logo transperent.png" 
                alt="SouthIndian OG Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Dr. Prashanth G</h3>
                <p className="text-blue-400 text-sm">MS Obstetrics & Gynecology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              SouthIndian OG - The Trusted MedTech Voice. Providing expert OBGyn care 
              with a focus on evidence-based medicine and healthcare innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors group"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-5 w-5 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-start space-x-2">
                  <Heart className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <a 
                    href="https://calendar.app.google/eNwjgcKkDFwYdMKH8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-blue-400 transition-colors"
                  >
                    Book Appointment Online
                  </a>
                  <p className="text-gray-400 text-sm">Google Calendar Booking</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Current Location</p>
                  <p className="text-gray-400 text-sm">Government Medical College</p>
                  <p className="text-gray-400 text-sm">Thiruvananthapuram, Kerala</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-medium">Emergency Line</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Support Available</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-blue-400 font-medium text-sm mb-1">Coming Soon</p>
                <p className="text-white font-medium">Karnataka Practice</p>
                <p className="text-gray-400 text-sm">Available May 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Dr. Prashanth G. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
                <button className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
                <button className="text-gray-400 hover:text-white transition-colors">Medical Disclaimer</button>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with care for better healthcare</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only 
              and is not intended as medical advice. Always consult with a qualified healthcare provider for proper diagnosis 
              and treatment. In case of medical emergencies, contact your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;