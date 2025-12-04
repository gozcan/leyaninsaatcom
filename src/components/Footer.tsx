import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { labelKey: 'nav.home', href: '#home' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.services', href: '#services' },
    { labelKey: 'nav.projects', href: '#projects' },
    { labelKey: 'nav.contact', href: '#contact' },
  ];

  const serviceLinks = [
    { labelKey: 'services.items.renovation.title', href: '#services' },
    { labelKey: 'services.items.restoration.title', href: '#services' },
    { labelKey: 'services.items.remodeling.title', href: '#services' },
    { labelKey: 'services.items.interior.title', href: '#services' },
    { labelKey: 'services.items.strengthening.title', href: '#services' },
  ];

  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/leyan-logo.png"
                alt="Leyan İnşaat Logo"
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-secondary-400">
                  Küçük Çamlıca mah. Libadiye cad. No:52 Üsküdar İstanbul,
                  Türkiye
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <a
                  href="tel:+908503464652"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  +90 850 346 46 52
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                <a
                  href="mailto:info@leyaninsaat.com"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                >
                  info@leyaninsaat.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-sm">
            © {new Date().getFullYear()} Leyan İnşaat. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-secondary-500 hover:text-primary-400 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-secondary-500 hover:text-primary-400 transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
