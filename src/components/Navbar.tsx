import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <img
              src="/leyan-logo.png"
              alt="Leyan İnşaat Logo"
              className="h-12 w-auto rounded-lg"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-secondary-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <a
              href="tel:+908503464652"
              className={`flex items-center gap-2 font-medium ${
                isScrolled ? 'text-secondary-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+90 850 346 46 52</span>
            </a>
            <a
              href="#contact"
              className="btn-primary"
            >
              {t('nav.getQuote')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-secondary-900' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="container-custom flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary-700 font-medium py-2 hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-secondary-700 font-medium py-2 hover:text-primary-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{i18n.language === 'tr' ? 'English' : 'Türkçe'}</span>
              </button>
              <a
                href="#contact"
                className="btn-primary text-center mt-2"
              >
                {t('nav.getQuote')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
