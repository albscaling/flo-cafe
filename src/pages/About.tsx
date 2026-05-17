import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Coffee } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
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

  const values = [
    { icon: Heart, key: 'passion' },
    { icon: Users, key: 'community' },
    { icon: Award, key: 'quality' },
    { icon: Coffee, key: 'tradition' },
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
            {t('aboutTitle')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 italic max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('aboutSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              {...fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-6">
                {t('ourStory')}
              </h2>
              <div className="w-24 h-1 bg-cafe-red mx-auto mb-8"></div>
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none text-muted-foreground space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed">
                {t('storyParagraph1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('storyParagraph2')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('storyParagraph3')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-cafe-yellow/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-4">
              {t('ourValues')}
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
            {values.map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cafe-brown mb-6">
              {t('teamTitle')}
            </h2>
            <div className="w-24 h-1 bg-cafe-red mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              {t('teamDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
