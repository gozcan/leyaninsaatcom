import { useTranslation } from 'react-i18next';
import {
  Hammer,
  Landmark,
  PencilRuler,
  Palette,
  Shield,
  Building,
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Hammer,
      titleKey: 'services.items.renovation.title',
      descriptionKey: 'services.items.renovation.description',
    },
    {
      icon: Landmark,
      titleKey: 'services.items.restoration.title',
      descriptionKey: 'services.items.restoration.description',
    },
    {
      icon: PencilRuler,
      titleKey: 'services.items.remodeling.title',
      descriptionKey: 'services.items.remodeling.description',
    },
    {
      icon: Palette,
      titleKey: 'services.items.interior.title',
      descriptionKey: 'services.items.interior.description',
    },
    {
      icon: Shield,
      titleKey: 'services.items.strengthening.title',
      descriptionKey: 'services.items.strengthening.description',
    },
    {
      icon: Building,
      titleKey: 'services.items.facade.title',
      descriptionKey: 'services.items.facade.description',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-secondary-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('services.badge')}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-secondary-600">{t('services.description')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <service.icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-secondary-900 mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
