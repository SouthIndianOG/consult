import React, { useState } from 'react';
import { Heart, Baby, Stethoscope, Brain, Users, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const primaryServices = [
    {
      icon: Heart,
      title: 'Comprehensive OBGyn Care',
      description: 'Complete women\'s health services from routine care to complex procedures',
      features: [
        'Routine gynecological examinations',
        'Prenatal and postnatal care',
        'Minimally invasive procedures',
        'Fertility consultations',
        'Menopause management'
      ],
      color: 'blue'
    },
    {
      icon: Baby,
      title: 'High-Risk Pregnancy Care',
      description: 'Specialized care for complex pregnancies and obstetric cases',
      features: [
        'High-risk pregnancy management',
        'Fetal monitoring and assessment',
        'Genetic counseling',
        'Multiple pregnancy care',
        'Emergency obstetric care'
      ],
      color: 'green'
    },
    {
      icon: Stethoscope,
      title: 'Second Opinion Services',
      description: 'Expert consultation and review for complex medical cases',
      features: [
        'Case review and analysis',
        'Treatment plan evaluation',
        'Telemedicine consultations',
        'Diagnostic interpretation',
        'Surgical planning advice'
      ],
      color: 'amber'
    }
  ];

  const secondaryServices = [
    {
      icon: Brain,
      title: 'AI Healthcare Education',
      description: 'Advanced training for medical professionals in healthcare AI',
      features: [
        'Healthcare data science training',
        'AI implementation in clinical practice',
        'Digital health solution consulting',
        'Research methodology guidance'
      ],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Medical Innovation Mentoring',
      description: 'Guidance for healthcare startups and innovation projects',
      features: [
        'Healthcare startup consultation',
        'Innovation framework development',
        'Academic collaboration',
        'Research project mentoring'
      ],
      color: 'indigo'
    },
    {
      icon: BookOpen,
      title: 'Educational Content & Training',
      description: 'Medical education content creation and professional development',
      features: [
        'Medical content development',
        'Professional training programs',
        'Healthcare innovation workshops',
        'Academic partnership programs'
      ],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const ServiceCard = ({ service, index, isActive, onClick }: any) => {
    const colors = getColorClasses(service.color);
    const IconComponent = service.icon;
    
    return (
      <div 
        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
          isActive ? colors.border : 'border-gray-200'
        } transform hover:-translate-y-1`}
        onClick={() => onClick(index)}
      >
        <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <IconComponent className={`h-6 w-6 ${colors.text}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span>Learn More</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From specialized OBGyn care to cutting-edge medical education, we provide expert services 
            that bridge clinical excellence with innovation
          </p>
        </div>

        {/* Primary Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Primary Medical Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {primaryServices.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                index={index}
                isActive={activeService === index}
                onClick={setActiveService}
              />
            ))}
          </div>

          {/* Service Details */}
          {activeService < primaryServices.length && (
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {primaryServices[activeService].title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {primaryServices[activeService].description}
                  </p>
                  <div className="space-y-3">
                    {primaryServices[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Medical Services"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Secondary Services */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Innovation & Education Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryServices.map((service, index) => {
              const colors = getColorClasses(service.color);
              const IconComponent = service.icon;
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;