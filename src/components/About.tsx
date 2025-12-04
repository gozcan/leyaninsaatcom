import { useTranslation } from 'react-i18next';
import { Award, Clock, Users, Headphones } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      titleKey: 'about.features.quality.title',
      descriptionKey: 'about.features.quality.description',
    },
    {
      icon: Clock,
      titleKey: 'about.features.onTime.title',
      descriptionKey: 'about.features.onTime.description',
    },
    {
      icon: Users,
      titleKey: 'about.features.expert.title',
      descriptionKey: 'about.features.expert.description',
    },
    {
      icon: Headphones,
      titleKey: 'about.features.support.title',
      descriptionKey: 'about.features.support.description',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=2070&auto=format&fit=crop"
                alt="Renovation planning"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="font-display text-4xl font-bold">25+</div>
              <div className="text-white/80 text-sm">
                {t('hero.stats.experience')}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t('about.badge')}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
