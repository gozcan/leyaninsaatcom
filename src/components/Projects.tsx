import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop',
    category: 'renovation',
    location: 'İstanbul, Türkiye',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    category: 'restoration',
    location: 'Ankara, Türkiye',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    category: 'remodeling',
    location: 'İzmir, Türkiye',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop',
    category: 'renovation',
    location: 'Antalya, Türkiye',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop',
    category: 'restoration',
    location: 'Bursa, Türkiye',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    category: 'remodeling',
    location: 'Kocaeli, Türkiye',
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', labelKey: 'projects.categories.all' },
    { key: 'renovation', labelKey: 'projects.categories.renovation' },
    { key: 'restoration', labelKey: 'projects.categories.restoration' },
    { key: 'remodeling', labelKey: 'projects.categories.remodeling' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('projects.badge')}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-secondary-600">{t('projects.description')}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-2">
                  {t(`projects.categories.${project.category}`)}
                </span>
                <p className="text-white/80 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
