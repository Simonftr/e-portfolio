import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  language: 'fr' | 'en';
}

const content = {
  fr: {
    title: 'Contactez-moi',
    subtitle: 'N\'hésitez pas à me contacter pour toute opportunité ou question',
    info: {
      title: 'Informations de contact',
      email: 'fetre.simon@gmail.com',
      phone: '+33 6 49 31 13 52',
      location: 'Annecy, France',
    },
  },
  en: {
    title: 'Contact Me',
    subtitle: 'Feel free to reach out for any opportunity or question',
    info: {
      title: 'Contact information',
      email: 'fetre.simon@gmail.com',
      phone: '+33 6 49 31 13 52',
      location: 'Annecy, France',
    },
  },
};

export function Contact({ language }: ContactProps) {
  const t = content[language];

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="mb-6">{t.info.title}</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-white/80 mb-1">Email</p>
                  <a
                    href={`mailto:${t.info.email}`}
                    className="text-white hover:text-white/80 transition-colors cursor-pointer"
                  >
                    {t.info.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-white/80 mb-1">
                    {language === 'fr' ? 'Téléphone' : 'Phone'}
                  </p>
                  <a
                    href={`tel:${t.info.phone.replace(/\s/g, '')}`}
                    className="text-white hover:text-white/80 transition-colors cursor-pointer"
                  >
                    {t.info.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-white/80 mb-1">
                    {language === 'fr' ? 'Localisation' : 'Location'}
                  </p>
                  <p className="text-white">{t.info.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-gray-900 mb-4">
              {language === 'fr' ? 'Disponibilité' : 'Availability'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'fr'
                ? 'Je suis actuellement en poste et ne recherche pas activement de nouvelles opportunités pour le moment.'
                : 'I am currently employed and not actively seeking new opportunities at the moment.'}
            </p>
            <div className="flex items-center gap-2 text-red-600">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span>
                {language === 'fr' ? 'Indisponible' : 'Unavailable'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}