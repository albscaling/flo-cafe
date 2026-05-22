import { Instagram, Facebook, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-cafe-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Cafe & Pasticeri <span className="text-cafe-yellow">FLO</span>
            </h3>
            <a 
              href="https://maps.app.goo.gl/QLSunbDXLVkK6Pv38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 text-sm hover:text-cafe-yellow transition-colors flex items-center gap-2"
            >
              <MapPin size={16} />
              Gjuhadol, Shkodër, Shqipëri
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Clock size={18} />
              {t('openHours')}
            </h4>
            <p className="text-cream/80 text-sm">{t('everyday')}</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cafe_pasticeri_flo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cafe-red p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/cafepasticeriFLO/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cafe-red p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://maps.app.goo.gl/QLSunbDXLVkK6Pv38"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream/10 hover:bg-cafe-red p-3 rounded-full transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-6 text-center text-sm text-cream/60">
          <p>© {new Date().getFullYear()} Cafe & Pasticeri FLO. {t('allRights')}.</p>
          <p className="mt-2">
            Powered by{' '}
            <a
              href="https://albscaling.al"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cafe-yellow hover:text-white transition-colors font-semibold"
            >
              Albscaling
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;