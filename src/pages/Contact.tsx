import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t('messageSent'));
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: MapPin, title: 'address', value: 'Gjuhadol, Shkodër, Shqipëri', link: 'https://maps.app.goo.gl/QLSunbDXLVkK6Pv38' },
    { icon: Clock, title: 'openHours', value: '07:00 - 23:00', link: '' },
    { icon: Phone, title: 'phone', value: '+355 69 XXX XXXX', link: '' },
    { icon: Mail, title: 'email', value: 'info@cafeflo.al', link: '' },
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
            {t('contactTitle')}
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contactSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-bold text-cafe-brown mb-6">
                {t('sendMessage')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-cafe-brown mb-2">
                      {t('yourName')}
                    </label>
                    <Input 
                      required
                      placeholder={t('namePlaceholder')}
                      className="border-cafe-brown/20 focus:border-cafe-red"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cafe-brown mb-2">
                      {t('yourEmail')}
                    </label>
                    <Input 
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      className="border-cafe-brown/20 focus:border-cafe-red"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cafe-brown mb-2">
                    {t('subject')}
                  </label>
                  <Input 
                    required
                    placeholder={t('subjectPlaceholder')}
                    className="border-cafe-brown/20 focus:border-cafe-red"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cafe-brown mb-2">
                    {t('message')}
                  </label>
                  <Textarea 
                    required
                    rows={5}
                    placeholder={t('messagePlaceholder')}
                    className="border-cafe-brown/20 focus:border-cafe-red resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cafe-red hover:bg-cafe-red/90 text-white py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      {t('sendBtn')}
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl font-bold text-cafe-brown mb-6">
                  {t('contactInfo')}
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map(({ icon: Icon, title, value, link }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-cafe-red/10 rounded-full flex items-center justify-center">
                        <Icon className="text-cafe-red" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cafe-brown">{t(title)}</h3>
                        {link ? (
                          <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-cafe-red transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-cafe-yellow/30 rounded-2xl p-8">
                <h3 className="font-serif text-xl font-bold text-cafe-brown mb-4">
                  {t('followUs')}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/cafe_pasticeri_flo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cafe-red text-white p-4 rounded-full hover:bg-cafe-brown transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/cafepasticeriFLO/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cafe-red text-white p-4 rounded-full hover:bg-cafe-brown transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <a 
                  href="https://maps.app.goo.gl/QLSunbDXLVkK6Pv38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-64 bg-cafe-brown/10 flex items-center justify-center hover:bg-cafe-brown/20 transition-colors group"
                >
                  <div className="text-center">
                    <MapPin className="text-cafe-red mx-auto mb-2 group-hover:scale-110 transition-transform" size={48} />
                    <p className="text-cafe-brown font-medium">{t('viewOnMap')}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
