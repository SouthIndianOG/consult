import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    appointmentType: '',
    message: '',
    preferredDate: '',
    urgency: 'routine'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        appointmentType: '',
        message: '',
        preferredDate: '',
        urgency: 'routine'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      details: 'Schedule Online',
      subtitle: 'Google Calendar Booking',
      action: 'https://calendar.app.google/eNwjgcKkDFwYdMKH8'
    },
    {
      icon: MapPin,
      title: 'Current Location',
      details: 'Government Medical College',
      subtitle: 'Thiruvananthapuram, Kerala',
      action: null
    },
    {
      icon: Phone,
      title: 'Future Location',
      details: 'Emergency Line Available',
      subtitle: '24/7 Emergency Support',
      action: null
    }
  ];

  const serviceOptions = [
    'OBGyn Consultation',
    'High-Risk Pregnancy Care',
    'Second Opinion',
    'Telemedicine Consultation',
    'AI Healthcare Education',
    'Medical Innovation Mentoring',
    'Emergency Consultation',
    'Other'
  ];

  const appointmentTypes = [
    'In-Person Consultation',
    'Telemedicine',
    'Second Opinion Review',
    'Emergency Consultation',
    'Follow-up Appointment'
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Request!
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                We've received your consultation request and will contact you within 24 hours to schedule your appointment.
              </p>
              <p className="text-gray-500">
                For urgent matters, please call us directly at +91 86600 30840
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards comprehensive healthcare. Book your consultation with 
            Dr. Prashanth G and experience expert medical care tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="bg-blue-600 text-white p-3 rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                );

                return info.action ? (
                  <a key={index} href={info.action} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-900">Easy Online Booking</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Schedule your consultation directly through our online calendar system. 
                Choose a time that works best for you.
              </p>
              <a
                href="https://calendar.app.google/eNwjgcKkDFwYdMKH8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Now</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Book Your Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    required
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select type</option>
                    {appointmentTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="routine">Routine</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide any additional details about your consultation needs, medical history, or specific concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Send className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and consent to being contacted 
                regarding your healthcare needs. For emergencies, please call directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;