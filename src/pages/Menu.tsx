import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Coffee, Wine, Cake, IceCream, Sandwich, Sparkles,
  ChevronDown, Zap, ChevronLeft, ChevronRight, X,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Section hero images
import menuCoffee from '@/assets/menu-coffee.jpeg';
import menuDrinks from '@/assets/menu-drinks.jpeg';
import menuFood from '@/assets/menu-food.jpeg';
import menuCover from '@/assets/menu-cover.jpg';
import drinks from '@/assets/drinks.jpeg';
import beers from '@/assets/beers.png';
import cocktailsImg from '@/assets/cocktails.jpeg';
import energyDrinksImg from '@/assets/energydrink.jpg';

// All 26 product photos
import img9847 from '@/assets/IMG_9847.jpg';
import img9860 from '@/assets/IMG_9860.jpg';
import img9888 from '@/assets/IMG_9888.jpg';
import img9889 from '@/assets/IMG_9889.jpg';
import img9891 from '@/assets/IMG_9891.jpg';
import img9897 from '@/assets/IMG_9897.jpg';
import img9898 from '@/assets/IMG_9898.jpg';
import img9902 from '@/assets/IMG_9902.jpg';
import img9908 from '@/assets/IMG_9908.jpg';
import img9908_2 from '@/assets/IMG_9908-2.jpg';
import img9912 from '@/assets/IMG_9912.jpg';
import img9914 from '@/assets/IMG_9914.jpg';
import img9925 from '@/assets/IMG_9925.jpg';
import img9926 from '@/assets/IMG_9926.jpg';
import img9929 from '@/assets/IMG_9929.jpg';
import img9929_2 from '@/assets/IMG_9929-2.jpg';
import img9931 from '@/assets/IMG_9931.jpg';
import img9935 from '@/assets/IMG_9935.jpg';
import img9938 from '@/assets/IMG_9938.jpg';
import img9940 from '@/assets/IMG_9940.jpg';
import img9950 from '@/assets/IMG_9950.jpg';
import img9951 from '@/assets/IMG_9951.jpg';
import img9955 from '@/assets/IMG_9955.jpg';
import img9969 from '@/assets/IMG_9969.jpg';
import img9971 from '@/assets/IMG_9971.jpg';
import img9985 from '@/assets/IMG_9985.jpg';

/* ── Types ────────────────────────────────────────────────────────── */
type MenuItemData = { nameAl: string; nameEn: string; price: string };

/* ── Nav config ──────────────────────────────────────────────────── */
const NAV = [
  { id: 'kafeteria',    label: 'Kafe',         Icon: Coffee   },
  { id: 'ice-coffee',   label: 'Kafe Akull',   Icon: Coffee   },
  { id: 'refreshing',   label: 'Freskuese',    Icon: Wine     },
  { id: 'beer',         label: 'Birra',        Icon: Wine     },
  { id: 'energy',       label: 'Energjike',    Icon: Zap      },
  { id: 'cocktails',    label: 'Kokteje',      Icon: Wine     },
  { id: 'flo-desserts', label: 'Ëmbëlsira',    Icon: Cake     },
  { id: 'special',      label: 'Speciale',     Icon: Sparkles },
  { id: 'specialities', label: 'Specialitete', Icon: IceCream },
  { id: 'food',         label: 'Ushqim',       Icon: Sandwich },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/* ── Price row ───────────────────────────────────────────────────── */
const PriceRow = ({ nameAl, nameEn, price, i }: { nameAl: string; nameEn: string; price: string; i: number }) => (
  <motion.div
    className="flex items-center gap-3 py-3 border-b border-stone-100 last:border-0"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3, delay: i * 0.02 }}
    viewport={{ once: true }}
  >
    <div className="flex-1 min-w-0">
      <span className="font-medium text-stone-800 text-sm">{nameAl}</span>
      {nameEn !== nameAl && (
        <span className="text-stone-400 text-xs italic ml-2">{nameEn}</span>
      )}
    </div>
    <span className="font-bold text-cafe-brown text-sm tabular-nums whitespace-nowrap flex-shrink-0">
      {price}
    </span>
  </motion.div>
);

/* ── Photo strip with arrows + tap-to-fullscreen ─────────────────── */
const PhotoStrip = ({ images }: { images: string[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Strip */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          aria-label="scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-cafe-brown hover:bg-cafe-yellow transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory px-11"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((src, i) => (
            <motion.button
              key={i}
              className="flex-shrink-0 w-36 rounded-2xl overflow-hidden snap-start shadow-sm focus:outline-none"
              style={{ height: 210 }}
              onClick={() => setLightbox(src)}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={src} alt="" className="w-full h-full object-cover pointer-events-none" />
            </motion.button>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          aria-label="scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-cafe-brown hover:bg-cafe-yellow transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </>
  );
};

/* ── Drink section: banner + price list ──────────────────────────── */
const DrinkSection = ({ id, Icon, title, titleEn, hero, items }: {
  id: string;
  Icon: React.ElementType;
  title: string;
  titleEn: string;
  hero: string;
  items: MenuItemData[];
}) => (
  <motion.div
    id={id}
    className="bg-white rounded-3xl overflow-hidden shadow-md scroll-mt-32"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative h-44 overflow-hidden">
      <img src={hero} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      <div className="absolute inset-0 flex items-center px-5 gap-3">
        <div className="w-11 h-11 rounded-full bg-cafe-yellow flex items-center justify-center flex-shrink-0 shadow-md">
          <Icon className="text-cafe-brown" size={20} />
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-cafe-yellow text-xs italic">{titleEn}</p>
        </div>
      </div>
    </div>
    <div className="px-5 py-5">
      {items.map((it, i) => <PriceRow key={it.nameAl} {...it} i={i} />)}
    </div>
  </motion.div>
);

/* ── Visual section: header + photo strip + price list ───────────── */
const VisualSection = ({ id, Icon, title, titleEn, photos, items }: {
  id: string;
  Icon: React.ElementType;
  title: string;
  titleEn: string;
  photos: string[];
  items: MenuItemData[];
}) => (
  <div id={id} className="space-y-4 scroll-mt-32">
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 rounded-2xl bg-cafe-brown flex items-center justify-center flex-shrink-0 shadow-md">
        <Icon className="text-cafe-yellow" size={22} />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-bold text-cafe-brown leading-tight">{title}</h3>
        <p className="text-stone-400 text-xs italic">{titleEn}</p>
      </div>
    </motion.div>

    <PhotoStrip images={photos} />

    <div className="bg-white rounded-2xl px-5 py-4 shadow-sm">
      {items.map((it, i) => <PriceRow key={it.nameAl} {...it} i={i} />)}
    </div>
  </div>
);

/* ── Main component ──────────────────────────────────────────────── */
const Menu = () => {
  const { t } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('kafeteria');

  // ── Menu data ────────────────────────────────────────────────────

  const kafeteria: MenuItemData[] = [
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

  const iceCoffee: MenuItemData[] = [
    { nameAl: 'Frappe Ice Coffee', nameEn: 'Frappe Ice Coffee', price: '180 L' },
    { nameAl: 'Fredocino', nameEn: 'Fredocino', price: '230 L' },
    { nameAl: 'Milkshake', nameEn: 'Milkshake', price: '250 L' },
    { nameAl: 'Caramel Frappuccino', nameEn: 'Caramel Frappuccino', price: '230 L' },
    { nameAl: 'Choco Frappuccino', nameEn: 'Choco Frappuccino', price: '230 L' },
  ];

  const refreshing: MenuItemData[] = [
    { nameAl: 'Bravo', nameEn: 'Bravo', price: '170 L' },
    { nameAl: 'My Tea', nameEn: 'My Tea', price: '170 L' },
    { nameAl: 'Café Mio', nameEn: 'Café Mio', price: '300 L' },
    { nameAl: 'Ama Iced Coffee', nameEn: 'Ama Iced Coffee', price: '250 L' },
    { nameAl: 'Fanta', nameEn: 'Fanta', price: '170 L' },
    { nameAl: 'Cola', nameEn: 'Cola', price: '170 L' },
    { nameAl: 'Lemon Soda', nameEn: 'Lemon Soda', price: '170 L' },
    { nameAl: 'Rose Lemonade', nameEn: 'Rose Lemonade', price: '350 L' },
  ];

  const beer: MenuItemData[] = [
    { nameAl: 'Tuborg', nameEn: 'Tuborg', price: '250 L' },
    { nameAl: 'Heiniken', nameEn: 'Heineken', price: '300 L' },
    { nameAl: 'Corona', nameEn: 'Corona', price: '400 L' },
    { nameAl: 'Korca', nameEn: 'Korca', price: '250 L' },
    { nameAl: 'La Trape', nameEn: 'La Trape', price: '450 L' },
    { nameAl: 'HB', nameEn: 'HB', price: '500 L' },
    { nameAl: 'Bavaria', nameEn: 'Bavaria', price: '250 L' },
    { nameAl: 'Paulaner', nameEn: 'Paulaner', price: '400 L' },
  ];

  const energyDrinks: MenuItemData[] = [
    { nameAl: 'Red Bull Energy Drink', nameEn: 'Red Bull Energy Drink', price: '250 L' },
    { nameAl: 'Red Bull Zero', nameEn: 'Red Bull Zero', price: '250 L' },
    { nameAl: 'Red Bull Red Edition', nameEn: 'Red Bull Red Edition', price: '250 L' },
    { nameAl: 'Red Bull Green Edition', nameEn: 'Red Bull Green Edition', price: '250 L' },
  ];

  const cocktails: MenuItemData[] = [
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

  const floDesserts: MenuItemData[] = [
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

  const specialDesserts: MenuItemData[] = [
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

  const floSpecialities: MenuItemData[] = [
    { nameAl: 'Banana Split', nameEn: 'Banana Split', price: '400 L' },
    { nameAl: 'Kupë Frutash', nameEn: 'Fruit Cup', price: '350 L' },
    { nameAl: 'Kupë Arash', nameEn: 'Nut Cup', price: '350 L' },
    { nameAl: 'Akullore e Madhe (3 toptha)', nameEn: 'Ice Cream Large (3 Scoops)', price: '240 L' },
    { nameAl: 'Akullore e Mesme (2 toptha)', nameEn: 'Ice Cream Mid (2 Scoops)', price: '160 L' },
    { nameAl: 'Luleshtrydhe', nameEn: 'Strawberry', price: '350 L' },
    { nameAl: 'Flo Waffles', nameEn: 'Flo Waffles', price: '350 L' },
    { nameAl: 'Flo (akullore pop)', nameEn: 'Flo (Ice cream pop)', price: '350 L' },
  ];

  const piadines: MenuItemData[] = [
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

  // ── Photo assignments ────────────────────────────────────────────
  // Divider strip: café atmosphere shots (drinks served in decorative glasses)
  const dividerPhotos     = [img9897, img9898, img9902, img9908, img9908_2];
  // FLO Desserts: tiramisu, lotus cups, kadaif, strawberry layered desserts
  const floDessertsPhotos = [img9888, img9889, img9891, img9912, img9914, img9925, img9926, img9931, img9935];
  // Special Desserts: oreo cups, mousse domes, coconut, red velvet cakes
  const specialPhotos     = [img9929, img9929_2, img9938, img9940, img9950, img9951, img9955, img9969, img9971, img9985];
  // FLO Specialities: banana split
  const specialitiesPhotos = [img9847, img9860];

  return (
    <div className="min-h-screen bg-[#FBF7F2]">
      <Navbar />

      <AnimatePresence mode="wait">
        {!showMenu ? (
          /* ── Cover page ──────────────────────────────────────────── */
          <motion.section
            key="cover"
            className="min-h-screen flex flex-col items-center justify-center relative pt-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-full max-w-md mx-auto px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src={menuCover}
                alt="Pasticeri FLO Menu Cover"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.button
              onClick={() => setShowMenu(true)}
              className="mt-8 group flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-cafe-brown text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg">
                Kliko për më shumë
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="text-cafe-brown" size={28} />
              </motion.div>
            </motion.button>
          </motion.section>
        ) : (
          /* ── Full menu ───────────────────────────────────────────── */
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page header */}
            <section className="pt-24 pb-10 bg-cafe-brown text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-6 left-6 w-28 h-28 border border-white rounded-full" />
                <div className="absolute bottom-6 right-6 w-44 h-44 border border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Coffee size={16} />
                  <span className="text-sm font-medium">Cafe & Pasticeri FLO</span>
                </motion.div>
                <motion.h1
                  className="font-serif text-4xl md:text-5xl font-bold mb-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t('menuTitle')}
                </motion.h1>
                <motion.p
                  className="text-white/70 italic"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t('menuSubtitle')}
                </motion.p>
              </div>
            </section>

            {/* Sticky category navigation */}
            <div className="sticky top-16 z-40 bg-[#FBF7F2]/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
              <div
                className="flex gap-2 overflow-x-auto px-4 py-3"
                style={{ scrollbarWidth: 'none' }}
              >
                {NAV.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => { setActiveTab(id); scrollTo(id); }}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 border ${
                      activeTab === id
                        ? 'bg-cafe-brown text-white border-cafe-brown shadow-md'
                        : 'bg-white text-stone-600 border-stone-200 hover:border-cafe-brown/40 hover:text-cafe-brown'
                    }`}
                  >
                    <Icon size={13} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Menu sections ──────────────────────────────────────── */}
            <div className="container mx-auto px-4 py-10 max-w-2xl space-y-10">

              {/* Drinks — plain banner + list */}
              <DrinkSection id="kafeteria"  Icon={Coffee}   title="Kafeteria"      titleEn="Coffee & Tea"      hero={menuCoffee}      items={kafeteria}    />
              <DrinkSection id="ice-coffee" Icon={Coffee}   title="Kafe me Akull"  titleEn="Iced Coffee"       hero={menuDrinks}      items={iceCoffee}    />
              <DrinkSection id="refreshing" Icon={Wine}     title="Pije Freskuese" titleEn="Refreshing Drinks" hero={drinks}          items={refreshing}   />
              <DrinkSection id="beer"       Icon={Wine}     title="Birra"          titleEn="Beer"              hero={beers}           items={beer}         />
              <DrinkSection id="energy"     Icon={Zap}      title="Pije Energjike" titleEn="Energy Drinks"     hero={energyDrinksImg} items={energyDrinks} />
              <DrinkSection id="cocktails"  Icon={Wine}     title="Kokteje"        titleEn="Cocktails"         hero={cocktailsImg}    items={cocktails}    />

              {/* ── Krijimet Tona divider with scrollable photo strip ── */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-stone-300" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 whitespace-nowrap">
                    Krijimet Tona · Our Creations
                  </span>
                  <div className="flex-1 h-px bg-stone-300" />
                </div>
                <PhotoStrip images={dividerPhotos} />
              </motion.div>

              {/* Desserts — photo strip + full price list */}
              <VisualSection id="flo-desserts" Icon={Cake}     title="Ëmbëlsira FLO"     titleEn="FLO Desserts"     photos={floDessertsPhotos}  items={floDesserts}     />
              <VisualSection id="special"       Icon={Sparkles} title="Ëmbëlsira Speciale" titleEn="Special Desserts"  photos={specialPhotos}      items={specialDesserts} />
              <VisualSection id="specialities"  Icon={IceCream} title="Specialitetet FLO"  titleEn="FLO Specialities" photos={specialitiesPhotos}  items={floSpecialities} />

              {/* Food */}
              <DrinkSection id="food" Icon={Sandwich} title="Piadine & Sandwich" titleEn="Piadine & Sandwich" hero={menuFood} items={piadines} />

            </div>

            {/* CTA */}
            <motion.section
              className="py-16 bg-cafe-brown text-white text-center relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:30px_30px]" />
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{t('visitUs')}</h2>
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
