import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import galleryDessertMouse from '@/assets/gallery-dessert-mouse.jpeg';
import galleryCoffee from '@/assets/gallery-coffee.jpeg';
import galleryDessertNight from '@/assets/gallery-dessert-night.jpeg';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryItems = [
    { id: 1, image: galleryCoffee, category: 'coffee' },
    { id: 2, image: galleryDessertMouse, category: 'desserts' },
    { id: 3, image: galleryDessertNight, category: 'atmosphere' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-cafe-brown to-cafe-brown/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('galleryTitle')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('gallerySubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={t(item.category)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium capitalize">{t(item.category)}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Instagram CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-muted-foreground mb-4">{t('morePhotosText')}</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/cafe_pasticeri_flo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cafe-red text-white px-6 py-3 rounded-full hover:bg-cafe-brown transition-colors"
              >
                {t('viewOnInstagram')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
