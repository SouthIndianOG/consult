import React, { useState } from 'react';
import { BookOpen, Video, Download, Plus, Minus, ExternalLink } from 'lucide-react';

const PatientResources = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Comprehensive guides on women\'s health and pregnancy care'
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Educational videos and webinars on medical topics'
    },
    {
      icon: Download,
      title: 'Patient Guides',
      description: 'Downloadable resources for appointment preparation and care'
    }
  ];

  const educationalContent = [
    {
      title: 'Understanding High-Risk Pregnancy',
      description: 'Comprehensive guide to managing and monitoring high-risk pregnancies',
      type: 'Guide',
      readTime: '8 min read'
    },
    {
      title: 'Prenatal Care Essentials',
      description: 'Everything expectant mothers need to know about prenatal appointments',
      type: 'Article',
      readTime: '5 min read'
    },
    {
      title: 'Minimally Invasive Procedures',
      description: 'Modern surgical techniques for gynecological conditions',
      type: 'Guide',
      readTime: '10 min read'
    },
    {
      title: 'AI in Healthcare: What Patients Need to Know',
      description: 'How artificial intelligence is improving medical care and diagnosis',
      type: 'Article',
      readTime: '6 min read'
    }
  ];

  const videoContent = [
    {
      title: 'Preparing for Your First OBGyn Visit',
      platform: 'YouTube',
      duration: '12:30',
      views: '2.5K'
    },
    {
      title: 'Understanding Fertility and Reproductive Health',
      platform: 'YouTube',
      duration: '18:45',
      views: '4.2K'
    },
    {
      title: 'AI Healthcare Education Series',
      platform: 'YouTube',
      duration: '25:15',
      views: '1.8K'
    },
    {
      title: 'Medical Innovation in Women\'s Health',
      platform: 'YouTube',
      duration: '20:30',
      views: '3.1K'
    }
  ];

  const patientGuides = [
    {
      title: 'Pre-Appointment Checklist',
      description: 'Essential information to bring to your medical consultation',
      format: 'PDF',
      pages: '2 pages'
    },
    {
      title: 'Post-Surgery Care Instructions',
      description: 'Comprehensive recovery guidelines for gynecological procedures',
      format: 'PDF',
      pages: '4 pages'
    },
    {
      title: 'Pregnancy Milestone Tracker',
      description: 'Track important appointments and developmental milestones',
      format: 'PDF',
      pages: '6 pages'
    },
    {
      title: 'Emergency Contact Guide',
      description: 'When to call your doctor and emergency procedures',
      format: 'PDF',
      pages: '1 page'
    }
  ];

  const faqs = [
    {
      question: 'What should I expect during my first OBGyn appointment?',
      answer: 'Your first appointment will include a comprehensive medical history review, discussion of your concerns, and a physical examination if necessary. We\'ll also discuss your health goals and create a personalized care plan.'
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer: 'Yes, we provide telemedicine consultations for follow-up appointments, second opinions, and non-emergency consultations. This allows you to receive expert care from the comfort of your home.'
    },
    {
      question: 'What makes you different from other OBGyn specialists?',
      answer: 'Our practice combines traditional medical excellence with cutting-edge technology and AI-enhanced diagnostics. We focus on evidence-based care while maintaining a personal, compassionate approach to each patient.'
    },
    {
      question: 'How do you handle high-risk pregnancy cases?',
      answer: 'We specialize in maternal-fetal medicine and provide comprehensive monitoring, advanced diagnostic testing, and coordinated care with other specialists when needed. Our goal is to ensure the best possible outcomes for both mother and baby.'
    },
    {
      question: 'What emergency services do you provide?',
      answer: 'We offer 24/7 emergency consultation for urgent obstetric and gynecological concerns. Patients can reach us through our emergency hotline for immediate guidance and care coordination.'
    }
  ];

  const socialLinks = [
    {
      platform: 'YouTube',
      handle: '@RealSouthindianOG',
      url: 'https://www.youtube.com/@RealSouthindianOG',
      followers: '15K subscribers'
    },
    {
      platform: 'Instagram',
      handle: '@southindianog',
      url: 'https://www.instagram.com/southindianog/',
      followers: '8.5K followers'
    },
    {
      platform: 'LinkedIn',
      handle: 'southindianog',
      url: 'https://www.linkedin.com/in/southindianog/',
      followers: '12K connections'
    },
    {
      platform: 'Twitter/X',
      handle: '@SouthindianOG',
      url: 'https://x.com/SouthindianOG',
      followers: '6.2K followers'
    }
  ];

  const renderContent = () => {
    const contents = [educationalContent, videoContent, patientGuides];
    const currentContent = contents[activeCategory];

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {currentContent.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              <ExternalLink className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                {activeCategory === 0 ? (item as any).type : 
                 activeCategory === 1 ? (item as any).platform : 
                 (item as any).format}
              </span>
              <span className="text-sm text-gray-500">
                {activeCategory === 0 ? (item as any).readTime : 
                 activeCategory === 1 ? (item as any).duration : 
                 (item as any).pages}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Resources & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive educational materials, video content, and patient guides 
            to help you make informed decisions about your healthcare
          </p>
        </div>

        {/* Resource Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {categories[activeCategory].title}
            </h3>
            <p className="text-gray-600">
              {categories[activeCategory].description}
            </p>
          </div>
          {renderContent()}
        </div>

        {/* Social Media & Content Hub */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Follow Our Educational Content
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{link.platform}</div>
                <div className="text-gray-900 font-medium mb-1">{link.handle}</div>
                <div className="text-sm text-gray-500">{link.followers}</div>
                <ExternalLink className="h-4 w-4 text-blue-600 mx-auto mt-2" />
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                  {expandedFaq === index ? (
                    <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientResources;