import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-medical-50/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About <span className="text-heritage-gold">Dr. Prashanth G</span></h2>
          <p className="text-gray-400 text-lg">
            MS Obstetrics & Gynecology | Maternal-Fetal Medicine Enthusiast
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card-glass p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-heritage-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-heritage-gold/20 transition-colors">
              <Award className="w-8 h-8 text-heritage-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3">Trusted Expert</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Resident at GMC Thiruvananthapuram. Specializing in high-risk pregnancies and evidence-based care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-glass p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-innovation-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-innovation-teal/20 transition-colors">
              <BookOpen className="w-8 h-8 text-innovation-teal" />
            </div>
            <h3 className="text-xl font-bold mb-3">Medical Educator</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between complex medical topics and simple, accessible explanations for everyone.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-glass p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Leader</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Founder of NeoAdjuvant & Innovation Coordinator. Building a community of future-ready healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;