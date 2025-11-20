import React from 'react';
import { GraduationCap, Award, Users, MapPin, Calendar, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'MS Obstetrics & Gynecology',
      subtitle: 'Government Medical College, Thiruvananthapuram',
      year: 'Current',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      title: 'MBBS',
      subtitle: 'Bangalore Medical College & Research Institute',
      year: 'Completed',
      color: 'green'
    },
  ];

  const achievements = [
    'Member of Federation of Obstetric and Gynaecological Societies of India (FOGSI)',
    'Member of Travancore Obstetric and Gynaecological Society (TROGS)',
    'Research publications in obstetrics and gynecology',
    'Innovation mentor for healthcare startups',
    'AI healthcare education specialist',
    'Evidence-based medicine advocate'
  ];

  const timeline = [
    {
      year: 'Current',
      title: 'MS Obstetrics & Gynecology',
      location: 'Government Medical College, Thiruvananthapuram',
      description: 'Specializing in comprehensive women\'s healthcare and high-risk pregnancies'
    },
    {
      year: 'May 2026',
      title: 'Future Practice',
      location: 'Karnataka',
      description: 'Expanding practice to serve patients in Karnataka'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Dr. Prashanth G
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted medical expert bridging clinical excellence with innovation, 
            dedicated to improving maternal-fetal outcomes through evidence-based care
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Background */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-8 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dr. Prashanth G"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                SouthIndian OG - The Trusted MedTech Voice
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Prashanth G is a dedicated OBGyn specialist with a passion for evidence-based medicine 
                and healthcare innovation. Currently pursuing MS in Obstetrics & Gynecology, he combines 
                clinical excellence with cutting-edge technology to provide comprehensive women's healthcare.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an AI healthcare educator and medical innovation mentor, Dr. Prashanth bridges the gap 
                between traditional medicine and modern technology, ensuring his patients receive the most 
                advanced and compassionate care available.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
              <p className="text-gray-700 italic">
                "To provide exceptional women's healthcare through evidence-based practice and compassionate care, 
                ensuring every patient receives personalized treatment that addresses their unique needs and circumstances."
              </p>
            </div>
          </div>

          {/* Credentials and Achievements */}
          <div className="space-y-8">
            {/* Credentials Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Credentials</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((credential, index) => {
                  const colors = getColorClasses(credential.color);
                  const IconComponent = credential.icon;
                  
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{credential.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{credential.subtitle}</p>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {credential.year}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements & Memberships</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                          {item.year}
                        </span>
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{item.location}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;