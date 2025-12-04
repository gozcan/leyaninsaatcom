import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert(t('contact.form.success'));
  };

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'contact.info.address',
      value: 'Küçük Çamlıca mah. Libadiye cad. No:52 Üsküdar İstanbul, Türkiye',
    },
    {
      icon: Phone,
      labelKey: 'contact.info.phone',
      value: '+90 850 346 46 52',
      href: 'tel:+908503464652',
    },
    {
      icon: Mail,
      labelKey: 'contact.info.email',
      value: 'info@leyaninsaat.com',
      href: 'mailto:info@leyaninsaat.com',
    },
    {
      icon: Clock,
      labelKey: 'contact.info.hours',
      valueKey: 'contact.info.hoursValue',
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-secondary-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('contact.badge')}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-secondary-600">{t('contact.description')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? t('contact.form.sending')
                  : t('contact.form.submit')}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    {t(info.labelKey)}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-secondary-600">
                      {info.valueKey ? t(info.valueKey) : info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm h-64">
              <iframe
                src="https://maps.google.com/maps?q=K%C3%BC%C3%A7%C3%BCk%20%C3%87aml%C4%B1ca%20mah.%20Libadiye%20cad.%20No:52%20%C3%9Csk%C3%BCdar%20%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
