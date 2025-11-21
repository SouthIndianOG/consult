import React from 'react';
import { Stethoscope, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-heritage-gold/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('services.title_prefix')} <span className="text-innovation-teal">{t('services.title_highlight')}</span></h2>
          <p className="text-gray-400">{t('services.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Service 1: Second Opinion */}
          <div className="card-glass p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-heritage-gold/10 blur-3xl rounded-full -z-10 group-hover:bg-heritage-gold/20 transition-colors"></div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-heritage-gold/10 flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6 text-heritage-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('services.second_opinion.title')}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {t('services.second_opinion.description')}
                </p>
                <a href="https://calendar.app.google/eNwjgcKkDFwYdMKH8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-heritage-gold font-semibold hover:gap-3 transition-all">
                  {t('services.second_opinion.cta')} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Service 2: Care Programs */}
          <div className="card-glass p-8 relative overflow-hidden group border-innovation-teal/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-innovation-teal/10 blur-3xl rounded-full -z-10 group-hover:bg-innovation-teal/20 transition-colors"></div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-innovation-teal/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-innovation-teal" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">{t('services.care_programs.title')}</h3>
                  <span className="px-2 py-1 rounded text-[10px] font-bold bg-innovation-teal/20 text-innovation-teal border border-innovation-teal/30">{t('services.care_programs.badge')}</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {t('services.care_programs.description')}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-innovation-teal" />
                    <span>{t('services.care_programs.feature1')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-innovation-teal" />
                    <span>{t('services.care_programs.feature2')}</span>
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

export default Services;