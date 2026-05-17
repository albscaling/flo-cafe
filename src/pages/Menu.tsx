import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Wine, Cake, IceCream, Sandwich, Sparkles, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Import background images
import menuCoffee from '@/assets/menu-coffee.jpeg';
import menuDessert from '@/assets/menu-dessert.jpeg';
import menuDrinks from '@/assets/menu-drinks.jpeg';
import menuFood from '@/assets/menu-food.jpeg';
import menuSpecial from '@/assets/menu-special.jpeg';
import menuCover from '@/assets/menu-cover.jpg';

interface MenuItemProps {
  nameAl: string;
  nameEn: string;
  price: string;
  index: number;
}

const MenuItem = ({ nameAl, nameEn, price, index }: MenuItemProps) => (
  <motion.div 
    className="group flex justify-between items-center py-3 px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    viewport={{ once: true }}
  >
    <div className="flex-1">
      <h4 className="font-serif text-lg font-semibold text-white group-hover:text-cafe-yellow transition-colors">
        {nameAl}
      </h4>
      <p className="text-sm text-white/70 italic">{nameEn}</p>
    </div>
    <span className="text-cafe-yellow font-bold text-lg whitespace-nowrap ml-4">{price}</span>
  </motion.div>
);

interface MenuSectionProps {
  icon: React.ElementType;
  title: string;
  titleEn: string;
  backgroundImage: string;
  children: React.ReactNode;
  delay?: number;
  darkerOverlay?: boolean;
  bgPosition?: string;
}

const MenuSection = ({ icon: Icon, title, titleEn, backgroundImage, children, delay = 0, darkerOverlay = false, bgPosition = 'center' }: MenuSectionProps) => (
  <motion.div 
    className="relative rounded-3xl overflow-hidden shadow-2xl"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: bgPosition }}
    />
    <div className={`absolute inset-0 ${darkerOverlay ? 'bg-gradient-to-b from-black/90 via-black/85 to-black/95' : 'bg-gradient-to-b from-black/80 via-black/70 to-black/85'}`} />
    
    {/* Content */}
    <div className="relative z-10">
      {/* Header */}
      <div className="px-6 py-6 border-b border-white/20">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-14 h-14 bg-cafe-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cafe-yellow/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-cafe-yellow" size={28} />
          </motion.div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">{title}</h3>
            <p className="text-cafe-yellow/80 text-sm italic">{titleEn}</p>
          </div>
        </div>
      </div>
      {/* Items */}
      <div className="p-4">{children}</div>
    </div>
  </motion.div>
);

const Menu = () => {
  const { t } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);

  const kafeteria = [
    { nameAl: 'Kafe', nameEn: 'Coffee', price: '80 L' },
    { nameAl: 'Kafe Turke', nameEn: 'Turkish Coffee', price: '80 L' },
    { nameAl: 'Makiato', nameEn: 'Macchiato', price: '90 L' },
    { nameAl: 'Kapucino', nameEn: 'Cappuccino', price: '150 L' },
    { nameAl: 'Kapucino me Bustine', nameEn: 'Cappuccino Sachet', price: '150 L' },
    { nameAl: 'Kakao', nameEn: 'Cocoa', price: '150 L' },
    { nameAl: 'Caj Bio', nameEn: 'Bio Tea', price: '130 L' },
    { nameAl: 'Krem Cokollate', nameEn: 'Cream Chocolate', price: '150 L' },
    { nameAl: 'Kafe Amerikane', nameEn: 'American Coffee', price: '150 L' },
    { nameAl: 'Kafe Gjermane', nameEn: 'German Coffee', price: '150 L' },
    { nameAl: 'Kafe Afagato (me akullore)', nameEn: 'Coffee Affogato (with ice cream)', price: '160 L' },
    { nameAl: 'Frape', nameEn: 'Frappe', price: '180 L' },
  ];

  const iceCoffee = [
    { nameAl: 'Frappe Ice Coffee', nameEn: 'Frappe Ice Coffee', price: '180 L' },
    { nameAl: 'Fredocino', nameEn: 'Fredocino', price: '230 L' },
    { nameAl: 'Milkshake', nameEn: 'Milkshake', price: '250 L' },
    { nameAl: 'Caramel Frappuccino', nameEn: 'Caramel Frappuccino', price: '230 L' },
    { nameAl: 'Choco Frappuccino', nameEn: 'Choco Frappuccino', price: '230 L' },
  ];

  const refreshing = [
    { nameAl: 'Bravo', nameEn: 'Bravo', price: '170 L' },
    { nameAl: 'My Tea', nameEn: 'My Tea', price: '170 L' },
    { nameAl: 'Café Mio', nameEn: 'Café Mio', price: '300 L' },
    { nameAl: 'Ama Iced Coffee', nameEn: 'Ama Iced Coffee', price: '250 L' },
    { nameAl: 'Fanta', nameEn: 'Fanta', price: '170 L' },
    { nameAl: 'Cola', nameEn: 'Cola', price: '170 L' },
    { nameAl: 'Lemon Soda', nameEn: 'Lemon Soda', price: '170 L' },
    { nameAl: 'Rose Lemonade', nameEn: 'Rose Lemonade', price: '350 L' },
  ];

  const beer = [
    { nameAl: 'Tuborg', nameEn: 'Tuborg', price: '250 L' },
    { nameAl: 'Heiniken', nameEn: 'Heineken', price: '300 L' },
    { nameAl: 'Corona', nameEn: 'Corona', price: '400 L' },
    { nameAl: 'Korca', nameEn: 'Korca', price: '250 L' },
    { nameAl: 'La Trape', nameEn: 'La Trape', price: '450 L' },
    { nameAl: 'HB', nameEn: 'HB', price: '500 L' },
    { nameAl: 'Bavaria', nameEn: 'Bavaria', price: '250 L' },
    { nameAl: 'Paulaner', nameEn: 'Paulaner', price: '400 L' },
  ];

  const energyDrinks = [
    { nameAl: 'Red Bull Energy Drink', nameEn: 'Red Bull Energy Drink', price: '250 L' },
    { nameAl: 'Red Bull Zero', nameEn: 'Red Bull Zero', price: '250 L' },
    { nameAl: 'Red Bull Red Edition', nameEn: 'Red Bull Red Edition', price: '250 L' },
    { nameAl: 'Red Bull Green Edition', nameEn: 'Red Bull Green Edition', price: '250 L' },
  ];

  const cocktails = [
    { nameAl: 'Margarita', nameEn: 'Margarita', price: '450 L' },
    { nameAl: 'Aperol Spritz', nameEn: 'Aperol Spritz', price: '450 L' },
    { nameAl: 'Mojito', nameEn: 'Mojito', price: '450 L' },
    { nameAl: 'Vodka Sour', nameEn: 'Vodka Sour', price: '450 L' },
    { nameAl: 'AMF', nameEn: 'AMF', price: '500 L' },
    { nameAl: 'Tequila Sunrise', nameEn: 'Tequila Sunrise', price: '450 L' },
    { nameAl: 'Negroni', nameEn: 'Negroni', price: '500 L' },
    { nameAl: 'Mimosa', nameEn: 'Mimosa', price: '450 L' },
    { nameAl: 'Cuba Libre', nameEn: 'Cuba Libre', price: '450 L' },
  ];

  const floDesserts = [
    { nameAl: 'Cheesecake', nameEn: 'Cheesecake', price: '280 L' },
    { nameAl: 'Tiramisu', nameEn: 'Tiramisu', price: '200 L' },
    { nameAl: 'Trilece', nameEn: 'Trilece', price: '180 L' },
    { nameAl: 'Bakllava Kanellë', nameEn: 'Cinnamon Baklava', price: '180 L' },
    { nameAl: 'Bakllava me Qumësht', nameEn: 'Milk Baklava', price: '150 L' },
    { nameAl: 'Kadaif', nameEn: 'Kadaif', price: '160 L' },
    { nameAl: 'Suflé', nameEn: 'Souffle', price: '220 L' },
    { nameAl: 'Luleshtrydhe', nameEn: 'Strawberry', price: '280 L' },
    { nameAl: 'Zupë', nameEn: 'Zupe', price: '160 L' },
    { nameAl: 'Vullkan Shege', nameEn: 'Pomegranate Volcano', price: '350 L' },
    { nameAl: 'Vullkan Luleshtrydhe', nameEn: 'Strawberry Volcano', price: '300 L' },
  ];

  const specialDesserts = [
    { nameAl: 'Oreo', nameEn: 'Oreo', price: '280 L' },
    { nameAl: 'Çokollatë Vanilje', nameEn: 'Choco Vanilla', price: '280 L' },
    { nameAl: 'Kiss', nameEn: 'Kiss', price: '280 L' },
    { nameAl: 'Primavera', nameEn: 'Primavera', price: '280 L' },
    { nameAl: 'Snickers', nameEn: 'Snickers', price: '280 L' },
    { nameAl: 'Kinder', nameEn: 'Kinder', price: '280 L' },
    { nameAl: 'Mus Fëstëk', nameEn: 'Pistachio Mousse', price: '280 L' },
    { nameAl: 'Mus', nameEn: 'Mousse', price: '280 L' },
    { nameAl: 'Ferrero', nameEn: 'Ferrero', price: '280 L' },
    { nameAl: 'Bounty', nameEn: 'Bounty', price: '280 L' },
    { nameAl: 'Devis', nameEn: 'Devis', price: '280 L' },
    { nameAl: 'Tortë Boronicë', nameEn: 'Blueberry Cake', price: '280 L' },
  ];

  const floSpecialities = [
    { nameAl: 'Banana Split', nameEn: 'Banana Split', price: '400 L' },
    { nameAl: 'Kupë Frutash', nameEn: 'Fruit Cup', price: '350 L' },
    { nameAl: 'Kupë Arash', nameEn: 'Nut Cup', price: '350 L' },
    { nameAl: 'Akullore (çdo zgjedhje - e Madhe 3 toptha)', nameEn: 'Ice Cream of Any Choice (Large 3 Scoops)', price: '240 L' },
    { nameAl: 'Akullore (çdo zgjedhje - e Mesme 2 toptha)', nameEn: 'Ice Cream of Any Choice (Mid 2 Scoops)', price: '160 L' },
    { nameAl: 'Luleshtrydhe', nameEn: 'Strawberry', price: '350 L' },
    { nameAl: 'Flo Waffles', nameEn: 'Flo Waffles', price: '350 L' },
    { nameAl: 'Flo (akullore pop)', nameEn: 'Flo (Ice cream pop)', price: '350 L' },
  ];

  const piadinesAndSandwiches = [
    { nameAl: 'Piadine Roll Pulë Parmigiano', nameEn: 'Piadine Roll Chicken Parmesan', price: '350 L' },
    { nameAl: 'Piadine Roll Vegjetariane', nameEn: 'Piadine Roll Vegetarian', price: '300 L' },
    { nameAl: 'Piadine Roll Pikante', nameEn: 'Piadine Roll Spicy', price: '280 L' },
    { nameAl: 'Piadine e Lehtë', nameEn: 'Light Piadine', price: '250 L' },
    { nameAl: 'Piadine Spontane', nameEn: 'Spontaneous Piadine', price: '280 L' },
    { nameAl: 'Piadine Gjuhadol', nameEn: 'Traditional Piadine', price: '300 L' },
    { nameAl: 'Panine', nameEn: 'Panini', price: '200 L' },
    { nameAl: 'Club Sandwich', nameEn: 'Club Sandwich', price: '250 L' },
    { nameAl: 'Piadine', nameEn: 'Piadine', price: '200 L' },
    { nameAl: 'Tost Flo', nameEn: 'Flo Toast', price: '180 L' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <AnimatePresence mode="wait">
        {!showMenu ? (
          /* Menu Cover */
          <motion.section 
            key="cover"
            className="min-h-screen flex flex-col items-center justify-center relative pt-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cover Image */}
            <motion.div 
              className="w-full max-w-md mx-auto px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src={menuCover} 
                alt="Pasticeri FLO Menu Cover" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Button */}
            <motion.button
              onClick={() => setShowMenu(true)}
              className="mt-8 group flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-cafe-brown text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-cafe-brown/90 transition-colors text-lg">
                Kliko për më shumë
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="text-cafe-brown" size={28} />
              </motion.div>
            </motion.button>
          </motion.section>
        ) : (
          /* Full Menu */
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <section className="pt-28 pb-12 bg-gradient-to-br from-cafe-brown via-cafe-brown to-cafe-brown/80 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
              </div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <Coffee size={18} />
                  <span className="text-sm font-medium">Cafe & Pasticeri FLO</span>
                </motion.div>
                <motion.h1 
                  className="font-serif text-4xl md:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {t('menuTitle')}
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/80 italic max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t('menuSubtitle')}
                </motion.p>
              </div>
            </section>

            {/* Menu Content */}
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  
                  {/* Kafeteria */}
                  <MenuSection 
                    icon={Coffee} 
                    title="Kafeteria" 
                    titleEn="Coffee & Tea"
                    backgroundImage={menuCoffee}
                    delay={0}
                  >
                    {kafeteria.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Iced Coffee */}
                  <MenuSection 
                    icon={Coffee} 
                    title="Kafe me Akull" 
                    titleEn="Iced Coffee"
                    backgroundImage={menuDrinks}
                    delay={0.05}
                  >
                    {iceCoffee.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Refreshing Drinks */}
                  <MenuSection 
                    icon={Coffee} 
                    title="Pije Freskuese" 
                    titleEn="Refreshing Drinks"
                    backgroundImage={menuDrinks}
                    delay={0.1}
                  >
                    {refreshing.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Beer */}
                  <MenuSection 
                    icon={Wine} 
                    title="Birra" 
                    titleEn="Beer"
                    backgroundImage={menuDrinks}
                    delay={0.15}
                  >
                    {beer.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Energy Drinks */}
                  <MenuSection 
                    icon={Wine} 
                    title="Pije Energjie" 
                    titleEn="Energy Drinks"
                    backgroundImage={menuDrinks}
                    delay={0.2}
                  >
                    {energyDrinks.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Cocktails */}
                  <MenuSection 
                    icon={Wine} 
                    title="Kokteje" 
                    titleEn="Cocktails"
                    backgroundImage={menuDrinks}
                    delay={0.25}
                  >
                    {cocktails.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* FLO Desserts */}
                  <MenuSection 
                    icon={Cake} 
                    title="Ëmbëlsira FLO" 
                    titleEn="FLO Desserts"
                    backgroundImage={menuDessert}
                    delay={0.3}
                  >
                    {floDesserts.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Special Desserts - uses menuDessert image */}
                  <MenuSection 
                    icon={Sparkles} 
                    title="Ëmbëlsira Speciale" 
                    titleEn="Special Desserts"
                    backgroundImage={menuDessert}
                    delay={0.35}
                  >
                    {specialDesserts.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* FLO Specialities - uses menuSpecial (fruit cup) image */}
                  <MenuSection 
                    icon={IceCream} 
                    title="Specialitetet FLO" 
                    titleEn="FLO Specialities"
                    backgroundImage={menuSpecial}
                    delay={0.4}
                  >
                    {floSpecialities.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                  {/* Piadine & Sandwiches - centered on croissant */}
                  <MenuSection 
                    icon={Sandwich} 
                    title="Piadine & Sandwich" 
                    titleEn="Piadine & Sandwich"
                    backgroundImage={menuFood}
                    delay={0.45}
                    darkerOverlay
                    bgPosition="center 30%"
                  >
                    {piadinesAndSandwiches.map((item, index) => (
                      <MenuItem
                        key={item.nameAl}
                        nameAl={item.nameAl}
                        nameEn={item.nameEn}
                        price={item.price}
                        index={index}
                      />
                    ))}
                  </MenuSection>

                </div>
              </div>
            </section>

            {/* CTA Section */}
            <motion.section 
              className="py-16 bg-gradient-to-r from-cafe-brown to-cafe-brown/90 text-white text-center relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:30px_30px]"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  {t('visitUs')}
                </h2>
                <p className="text-white/80 mb-6 max-w-md mx-auto">{t('visitUsDesc')}</p>
                <motion.a
                  href="https://maps.app.goo.gl/QLSunbDXLVkK6Pv38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cafe-yellow text-cafe-brown font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('getDirections')}
                </motion.a>
              </div>
            </motion.section>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
