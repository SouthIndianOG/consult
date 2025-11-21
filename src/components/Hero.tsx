import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-innovation-teal/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-heritage-gold/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-heritage-gold" />
              <span className="text-sm font-medium text-gray-300">{t('hero.badge')}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-heritage-gold to-yellow-200">{t('hero.title_highlight')}</span><br />
              <span className="text-white">{t('hero.title_suffix')}</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://calendar.app.google/eNwjgcKkDFwYdMKH8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                {t('hero.cta_primary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary">
                {t('hero.cta_secondary')}
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-heritage-gold to-innovation-teal rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src="/dr-prashanth.jpg"
                  alt="Dr. Prashanth G"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-4 -right-4 bg-medical-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-innovation-teal animate-pulse"></div>
                  <div>
                    <p className="text-xs text-gray-400">{t('hero.next_available')}</p>
                    <p className="text-sm font-bold text-white">{t('hero.today')}, 4:00 PM</p>
                  </div>
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