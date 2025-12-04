import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')`,
        }}
      >
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            {t('hero.badge')}
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            {t('hero.title')}
            <span className="text-primary-400">
              {' '}
              {t('hero.titleHighlight')}
            </span>
            {t('hero.titleEnd') && ` ${t('hero.titleEnd')}`}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-primary gap-2"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#projects"
              className="btn-secondary gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Play className="w-5 h-5" />
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
