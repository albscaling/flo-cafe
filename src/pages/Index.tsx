import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Clock, Coffee, Cake, Users, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cafeExterior from '@/assets/cafe-exterior.jpeg';
import galleryDessertNight from '@/assets/gallery-dessert-night.jpeg';

const Index = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    { icon: Coffee, key: 'featureCoffee' },
    { icon: Cake, key: 'featurePastry' },
    { icon: Users, key: 'featureAtmosphere' },
    { icon: Heart, key: 'featureTradition' },
  ];

  const popularItems = [
    { nameAl: 'Kapucino', nameEn: 'Cappuccino', price: '150 L', icon: Coffee },
    { nameAl: 'Tiramisu', nameEn: 'Tiramisu', price: '200 L', icon: Cake },
    { nameAl: 'Banana Split', nameEn: 'Banana Split', price: '400 L', icon: Cake },
    { nameAl: 'Margarita', nameEn: 'Margarita', price: '450 L', icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cafeExterior})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cafe & Pasticeri{' '}
            <span className="text-cafe-yellow">FLO</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light italic mb-6 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('slogan')}
          </motion.p>

          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('description')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-cafe-red hover:bg-cafe-red/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/menu">{t('viewMenu')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-cafe-brown px-8 py-6 text-lg rounded-full bg-transparent"
            >
              <Link to="/contact">{t('contactUs')}</Link>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://www.instagram.com/cafe_pasticeri_flo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-cafe-red p-4 rounded-full transition-all hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/cafepasticeriFLO/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-cafe-red p-4 rounded-full transition-all hover:scale-110"
            >
              <Facebook size={24} />
            </a>
          </motion.div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-4">
              {t('whyChooseUs')}
            </h2>
            <div className="w-24 h-1 bg-cafe-red mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                className="text-center p-6 rounded-2xl bg-cream hover:shadow-lg transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe-red/10 rounded-full mb-4">
                  <Icon className="text-cafe-red" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-cafe-brown mb-2">
                  {t(`${key}Title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`${key}Desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-20 bg-cafe-yellow/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-4">
              {t('popularItems')}
            </h2>
            <div className="w-24 h-1 bg-cafe-red mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {popularItems.map(({ nameAl, nameEn, price, icon: Icon }) => (
              <motion.div
                key={nameAl}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-cafe-red/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-cafe-red" size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold text-cafe-brown">
                  {nameAl}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {nameEn}
                </p>
                <p className="text-cafe-red font-bold">{price}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-cafe-brown hover:bg-cafe-brown/90 text-white rounded-full px-8"
            >
              <Link to="/menu" className="flex items-center gap-2">
                {t('seeFullMenu')}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={galleryDessertNight} 
                  alt="Café FLO atmosphere"
                  className="rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cafe-yellow rounded-2xl -z-10"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-4">
                  {t('ourStoryTitle')}
                </h2>
                <div className="w-24 h-1 bg-cafe-red mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('ourStoryPreview')}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white rounded-full px-8"
                >
                  <Link to="/about" className="flex items-center gap-2">
                    {t('learnMore')}
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cafe-yellow/20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-serif text-4xl font-bold text-cafe-brown text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('findUs')}
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Location */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe-red/10 rounded-full mb-4">
                <MapPin className="text-cafe-red" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-brown mb-2">
                {t('address')}
              </h3>
              <p className="text-muted-foreground">Gjuhadol, Shkodër</p>
            </motion.div>

            {/* Hours */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cafe-red/10 rounded-full mb-4">
                <Clock className="text-cafe-red" size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-cafe-brown mb-2">
                {t('openHours')}
              </h3>
              <p className="text-muted-foreground">{t('everyday')}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-cafe-red hover:bg-cafe-red/90 text-white rounded-full px-8"
            >
              <Link to="/contact" className="flex items-center gap-2">
                {t('getInTouch')}
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
