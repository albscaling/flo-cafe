import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sq' | 'en';

interface Translations {
  [key: string]: {
    sq: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { sq: 'Kryesore', en: 'Home' },
  menu: { sq: 'Menu', en: 'Menu' },
  about: { sq: 'Rreth Nesh', en: 'About' },
  gallery: { sq: 'Galeria', en: 'Gallery' },
  contact: { sq: 'Kontakt', en: 'Contact' },
  
  // Hero Section
  slogan: { sq: 'Ku tradita takon shijet e reja', en: 'Where tradition meets new flavors' },
  description: { 
    sq: 'Kafeneja më e famshme në Gjuhadol. Shijoni kafenë tonë të shkëlqyer, ëmbëlsirat tradicionale dhe atmosferën e ngrohtë në zemër të Shkodrës.', 
    en: 'The most famous café in Gjuhadol. Enjoy our excellent coffee, traditional sweets, and warm atmosphere in the heart of Shkodra.' 
  },
  viewMenu: { sq: 'Shiko Menunë', en: 'View Menu' },
  contactUs: { sq: 'Na Kontaktoni', en: 'Contact Us' },
  
  // Features Section
  whyChooseUs: { sq: 'Pse të na Zgjidhni', en: 'Why Choose Us' },
  featureCoffeeTitle: { sq: 'Kafe Premium', en: 'Premium Coffee' },
  featureCoffeeDesc: { sq: 'Kafe e përzgjedhur me kujdes nga prodhuesit më të mirë.', en: 'Carefully selected coffee from the finest producers.' },
  featurePastryTitle: { sq: 'Pastiçeri Artizanale', en: 'Artisan Pastries' },
  featurePastryDesc: { sq: 'Të pjekura çdo ditë me receta tradicionale.', en: 'Baked fresh daily with traditional recipes.' },
  featureAtmosphereTitle: { sq: 'Atmosferë e Ngrohtë', en: 'Warm Atmosphere' },
  featureAtmosphereDesc: { sq: 'Vend i përsosur për familjen dhe miqtë.', en: 'Perfect place for family and friends.' },
  featureTraditionTitle: { sq: 'Traditë Shqiptare', en: 'Albanian Tradition' },
  featureTraditionDesc: { sq: 'Ruajmë shijet autentike të Shkodrës.', en: 'Preserving the authentic flavors of Shkodra.' },
  
  // Popular Items
  popularItems: { sq: 'Produktet më të Dashura', en: 'Most Loved Items' },
  seeFullMenu: { sq: 'Shiko Menunë e Plotë', en: 'See Full Menu' },
  
  // Testimonials
  whatPeopleSay: { sq: 'Çfarë Thonë Klientët', en: 'What People Say' },
  testimonial1: { sq: 'Kafeja më e mirë në Shkodër! Atmosferë e mrekullueshme dhe staf i shkëlqyer.', en: 'The best coffee in Shkodra! Wonderful atmosphere and excellent staff.' },
  testimonial2: { sq: 'Trilecja është absolutisht e jashtëzakonshme. Vend që duhet vizituar!', en: 'The trilece is absolutely exceptional. A must-visit place!' },
  testimonial3: { sq: 'Vendi perfekt për të takuar miqtë. Pastiçeria është e shkëlqyer.', en: 'Perfect place to meet friends. The pastry is excellent.' },
  
  // Our Story Preview
  ourStoryTitle: { sq: 'Historia Jonë', en: 'Our Story' },
  ourStoryPreview: { sq: 'Që nga viti 2010, Cafe & Pasticeri FLO ka qenë zemra e Gjuhadolit, duke ofruar kafe të shkëlqyer dhe ëmbëlsira tradicionale për turistët dhe vendësit.', en: 'Since 2010, Cafe & Pasticeri FLO has been the heart of Gjuhadol, offering excellent coffee and traditional sweets to tourists and locals alike.' },
  learnMore: { sq: 'Mëso më Shumë', en: 'Learn More' },
  getInTouch: { sq: 'Na Kontaktoni', en: 'Get In Touch' },
  
  // Menu Page
  menuTitle: { sq: 'Menuja Jonë', en: 'Our Menu' },
  menuSubtitle: { sq: 'Zbuloni shijet tona të veçanta', en: 'Discover our special flavors' },
  visitUs: { sq: 'Vizitoni Kafenenë Tonë', en: 'Visit Our Café' },
  visitUsDesc: { sq: 'Ejani dhe shijoni atmosferën e ngrohtë të Cafe FLO.', en: 'Come and enjoy the warm atmosphere of Cafe FLO.' },
  getDirections: { sq: 'Merr Drejtimin', en: 'Get Directions' },
  
  // Menu Categories
  coffee: { sq: 'Kafe', en: 'Coffee' },
  teaHotDrinks: { sq: 'Çaj & Pije të Ngrohta', en: 'Tea & Hot Drinks' },
  pastries: { sq: 'Pastiçeri', en: 'Pastries' },
  cakes: { sq: 'Ëmbëlsira & Torta', en: 'Cakes & Desserts' },
  iceCream: { sq: 'Akullore', en: 'Ice Cream' },
  drinks: { sq: 'Pije', en: 'Drinks' },
  snacks: { sq: 'Snack', en: 'Snacks' },
  
  // Coffee Items
  espresso: { sq: 'Espresso', en: 'Espresso' },
  espressoDesc: { sq: 'Kafe italiane klasike', en: 'Classic Italian coffee' },
  espressoDouble: { sq: 'Espresso Doppio', en: 'Double Espresso' },
  espressoDoubleDesc: { sq: 'Dy shot espresso', en: 'Two shots of espresso' },
  macchiato: { sq: 'Macchiato', en: 'Macchiato' },
  macchiatoDesc: { sq: 'Espresso me pak qumësht', en: 'Espresso with a touch of milk' },
  cappuccino: { sq: 'Cappuccino', en: 'Cappuccino' },
  cappuccinoDesc: { sq: 'Espresso me qumësht të shkumëzuar', en: 'Espresso with foamed milk' },
  latte: { sq: 'Latte', en: 'Latte' },
  latteDesc: { sq: 'Kafe me shumë qumësht', en: 'Coffee with plenty of milk' },
  americano: { sq: 'Americano', en: 'Americano' },
  americanoDesc: { sq: 'Espresso me ujë të ngrohtë', en: 'Espresso with hot water' },
  mocha: { sq: 'Mocha', en: 'Mocha' },
  mochaDesc: { sq: 'Kafe me çokollatë', en: 'Coffee with chocolate' },
  turkishCoffee: { sq: 'Kafe Turke', en: 'Turkish Coffee' },
  turkishCoffeeDesc: { sq: 'Kafe tradicionale e zier', en: 'Traditional brewed coffee' },
  icedCoffee: { sq: 'Kafe e Ftohtë', en: 'Iced Coffee' },
  icedCoffeeDesc: { sq: 'Kafe e ftohtë me akull', en: 'Cold coffee with ice' },
  freddo: { sq: 'Freddo', en: 'Freddo' },
  freddoDesc: { sq: 'Espresso i ftohtë greke', en: 'Greek cold espresso' },
  
  // Tea Items
  blackTea: { sq: 'Çaj i Zi', en: 'Black Tea' },
  blackTeaDesc: { sq: 'Çaj klasik i zi', en: 'Classic black tea' },
  greenTea: { sq: 'Çaj Jeshil', en: 'Green Tea' },
  greenTeaDesc: { sq: 'Çaj i shëndetshëm jeshil', en: 'Healthy green tea' },
  herbalTea: { sq: 'Çaj Bimor', en: 'Herbal Tea' },
  herbalTeaDesc: { sq: 'Përzierje bimore natyrale', en: 'Natural herbal blend' },
  chamomile: { sq: 'Kamomil', en: 'Chamomile' },
  chamomileDesc: { sq: 'Çaj qetësues kamomili', en: 'Soothing chamomile tea' },
  hotChocolate: { sq: 'Çokollatë e Ngrohtë', en: 'Hot Chocolate' },
  hotChocolateDesc: { sq: 'Çokollatë e pasur me qumësht', en: 'Rich chocolate with milk' },
  
  // Pastries Items
  croissant: { sq: 'Croissant', en: 'Croissant' },
  croissantDesc: { sq: 'I freskët me gjalpë', en: 'Fresh with butter' },
  croissantChocolate: { sq: 'Croissant Çokollatë', en: 'Chocolate Croissant' },
  croissantChocolateDesc: { sq: 'Me mbushje çokollate', en: 'Filled with chocolate' },
  croissantAlmond: { sq: 'Croissant Bajame', en: 'Almond Croissant' },
  croissantAlmondDesc: { sq: 'Me krem bajamesh', en: 'With almond cream' },
  byrek: { sq: 'Byrek', en: 'Byrek' },
  byrekDesc: { sq: 'Byrek tradicional shqiptar', en: 'Traditional Albanian pastry' },
  byrekCheese: { sq: 'Byrek me Djathë', en: 'Cheese Byrek' },
  byrekCheeseDesc: { sq: 'Me djathë të bardhë', en: 'With white cheese' },
  byrekSpinach: { sq: 'Byrek me Spinaq', en: 'Spinach Byrek' },
  byrekSpinachDesc: { sq: 'Me spinaq të freskët', en: 'With fresh spinach' },
  danish: { sq: 'Danish', en: 'Danish' },
  danishDesc: { sq: 'Me fruta ose krem', en: 'With fruit or cream' },
  muffin: { sq: 'Muffin', en: 'Muffin' },
  muffinDesc: { sq: 'Muffin i freskët i ditës', en: 'Fresh daily muffin' },
  cookies: { sq: 'Biskota', en: 'Cookies' },
  cookiesDesc: { sq: 'Biskota të bëra në shtëpi', en: 'Homemade cookies' },
  
  // Cakes Items
  trilece: { sq: 'Trilece', en: 'Trilece' },
  trileceDesc: { sq: 'Ëmbëlsirë e famshme shqiptare', en: 'Famous Albanian dessert' },
  baklava: { sq: 'Bakllava', en: 'Baklava' },
  baklavaDesc: { sq: 'Me arra dhe mjaltë', en: 'With walnuts and honey' },
  cheesecake: { sq: 'Cheesecake', en: 'Cheesecake' },
  cheesecakeDesc: { sq: 'Torte me djathë kremoze', en: 'Creamy cheese cake' },
  cheesecakeBerry: { sq: 'Cheesecake Fruta Pylli', en: 'Berry Cheesecake' },
  cheesecakeBerryDesc: { sq: 'Me fruta të pyllit', en: 'With mixed berries' },
  tiramisu: { sq: 'Tiramisu', en: 'Tiramisu' },
  tiramisuDesc: { sq: 'Klasike italiane', en: 'Italian classic' },
  chocolateCake: { sq: 'Torte Çokollatë', en: 'Chocolate Cake' },
  chocolateCakeDesc: { sq: 'E pasur dhe e butë', en: 'Rich and smooth' },
  redVelvet: { sq: 'Red Velvet', en: 'Red Velvet' },
  redVelvetDesc: { sq: 'Torte klasike amerikane', en: 'Classic American cake' },
  carrotCake: { sq: 'Torte Karota', en: 'Carrot Cake' },
  carrotCakeDesc: { sq: 'Me krem djathi', en: 'With cream cheese frosting' },
  fruitTart: { sq: 'Tarte me Fruta', en: 'Fruit Tart' },
  fruitTartDesc: { sq: 'Me fruta të freskëta të stinës', en: 'With fresh seasonal fruits' },
  profiterole: { sq: 'Profiterol', en: 'Profiterole' },
  profiteroleDesc: { sq: 'Me krem dhe çokollatë', en: 'With cream and chocolate' },
  pannaCotta: { sq: 'Panna Cotta', en: 'Panna Cotta' },
  pannaCottaDesc: { sq: 'Ëmbëlsirë italiane me krem', en: 'Italian cream dessert' },
  cremeBrulee: { sq: 'Crème Brûlée', en: 'Crème Brûlée' },
  cremeBruleeDesc: { sq: 'Me karamel të djegur', en: 'With burnt caramel top' },
  
  // Ice Cream Items
  iceCreamScoop: { sq: 'Akullore (1 topth)', en: 'Ice Cream (1 scoop)' },
  iceCreamScoopDesc: { sq: 'Zgjidhni shijen tuaj', en: 'Choose your flavor' },
  iceCreamDouble: { sq: 'Akullore (2 toptha)', en: 'Ice Cream (2 scoops)' },
  iceCreamDoubleDesc: { sq: 'Dy shijet e preferuara', en: 'Two favorite flavors' },
  sundae: { sq: 'Sundae', en: 'Sundae' },
  sundaeDesc: { sq: 'Me krem, çokollatë dhe fruta', en: 'With cream, chocolate and fruits' },
  affogato: { sq: 'Affogato', en: 'Affogato' },
  affogatoDesc: { sq: 'Akullore me espresso', en: 'Ice cream with espresso' },
  
  // Drinks Items
  freshJuice: { sq: 'Lëng i Freskët', en: 'Fresh Juice' },
  freshJuiceDesc: { sq: 'Portokall, mollë ose përzierje', en: 'Orange, apple or mix' },
  orangeJuice: { sq: 'Lëng Portokalli', en: 'Orange Juice' },
  orangeJuiceDesc: { sq: 'I shtrydhur i freskët', en: 'Freshly squeezed' },
  lemonade: { sq: 'Limonadë', en: 'Lemonade' },
  lemonadeDesc: { sq: 'E freskët shtëpiake', en: 'Fresh homemade' },
  lemonadeStrawberry: { sq: 'Limonadë Luleshtrydhe', en: 'Strawberry Lemonade' },
  lemonadeStrawberryDesc: { sq: 'Me luleshtrydhe të freskëta', en: 'With fresh strawberries' },
  icedTea: { sq: 'Çaj i Ftohtë', en: 'Iced Tea' },
  icedTeaDesc: { sq: 'Me limon dhe mentë', en: 'With lemon and mint' },
  smoothie: { sq: 'Smoothie', en: 'Smoothie' },
  smoothieDesc: { sq: 'Me fruta të freskëta', en: 'With fresh fruits' },
  milkshake: { sq: 'Milkshake', en: 'Milkshake' },
  milkshakeDesc: { sq: 'Çokollatë, vanilje ose fruta', en: 'Chocolate, vanilla or fruit' },
  water: { sq: 'Ujë', en: 'Water' },
  waterDesc: { sq: 'Ujë natyral', en: 'Natural water' },
  sparklingWater: { sq: 'Ujë me Gaz', en: 'Sparkling Water' },
  sparklingWaterDesc: { sq: 'Ujë mineral me gaz', en: 'Mineral sparkling water' },
  softDrinks: { sq: 'Pije Freskuese', en: 'Soft Drinks' },
  softDrinksDesc: { sq: 'Coca-Cola, Fanta, Sprite', en: 'Coca-Cola, Fanta, Sprite' },
  
  // Snacks Items
  clubSandwich: { sq: 'Club Sandwich', en: 'Club Sandwich' },
  clubSandwichDesc: { sq: 'Me pulë, proshutë dhe perime', en: 'With chicken, ham and vegetables' },
  toastHamCheese: { sq: 'Toast Proshutë & Djathë', en: 'Ham & Cheese Toast' },
  toastHamCheeseDesc: { sq: 'Toast klasik i ngrohtë', en: 'Classic warm toast' },
  panini: { sq: 'Panini', en: 'Panini' },
  paniniDesc: { sq: 'Panini italian me perime', en: 'Italian panini with vegetables' },
  bruschetta: { sq: 'Bruschetta', en: 'Bruschetta' },
  bruschettaDesc: { sq: 'Me domate dhe borzilok', en: 'With tomato and basil' },
  
  // About Page
  aboutTitle: { sq: 'Rreth Nesh', en: 'About Us' },
  aboutSubtitle: { sq: 'Historia e Cafe & Pasticeri FLO', en: 'The story of Cafe & Pasticeri FLO' },
  ourStory: { sq: 'Historia Jonë', en: 'Our Story' },
  storyParagraph1: { 
    sq: 'Cafe & Pasticeri FLO u themelua në vitin 2010 në zemër të Gjuhadolit, një nga lagjet më të bukura dhe historike të Shkodrës. Që nga dita e parë, misioni ynë ka qenë i thjeshtë: të ofrojmë kafe të shkëlqyer dhe ëmbëlsira tradicionale në një atmosferë të ngrohtë dhe mikpritëse.', 
    en: 'Cafe & Pasticeri FLO was founded in 2010 in the heart of Gjuhadol, one of the most beautiful and historic neighborhoods in Shkodra. From day one, our mission has been simple: to offer excellent coffee and traditional sweets in a warm and welcoming atmosphere.' 
  },
  storyParagraph2: { 
    sq: 'Gjuhadoli është i njohur për arkitekturën e tij të veçantë dhe rrugët e ngushta plot histori. Kafeneja jonë është bërë pjesë e pandashme e kësaj historie, duke mirëpritur turistë nga e gjithë bota dhe vendës që kërkojnë një moment relaksi.', 
    en: 'Gjuhadol is known for its unique architecture and narrow streets full of history. Our café has become an integral part of this history, welcoming tourists from around the world and locals seeking a moment of relaxation.' 
  },
  storyParagraph3: { 
    sq: 'Sot, FLO vazhdon traditën e shkëlqyeshme duke përdorur receta të trashëguara nga gjenerata në gjeneratë, duke i kombinuar ato me teknika moderne për të krijuar shije të paharrueshme.', 
    en: 'Today, FLO continues the excellent tradition using recipes passed down from generation to generation, combining them with modern techniques to create unforgettable flavors.' 
  },
  ourValues: { sq: 'Vlerat Tona', en: 'Our Values' },
  passionTitle: { sq: 'Pasion', en: 'Passion' },
  passionDesc: { sq: 'Dashuri për çdo gjë që bëjmë.', en: 'Love for everything we do.' },
  communityTitle: { sq: 'Komunitet', en: 'Community' },
  communityDesc: { sq: 'Jemi pjesë e familjes së Gjuhadolit.', en: 'We are part of the Gjuhadol family.' },
  qualityTitle: { sq: 'Cilësi', en: 'Quality' },
  qualityDesc: { sq: 'Vetëm produktet më të mira.', en: 'Only the finest products.' },
  traditionTitle: { sq: 'Traditë', en: 'Tradition' },
  traditionDesc: { sq: 'Ruajmë vlerat shqiptare.', en: 'Preserving Albanian values.' },
  teamTitle: { sq: 'Ekipi Ynë', en: 'Our Team' },
  teamDesc: { sq: 'Stafi ynë i përkushtuar punon çdo ditë për t\'ju ofruar përvojën më të mirë. Me buzëqeshje dhe profesionalizëm, jemi këtu për t\'ju mirëpritur.', en: 'Our dedicated staff works every day to provide you with the best experience. With smiles and professionalism, we are here to welcome you.' },
  
  // Contact Page
  contactTitle: { sq: 'Na Kontaktoni', en: 'Contact Us' },
  contactSubtitle: { sq: 'Do të donim të dëgjonim nga ju', en: 'We would love to hear from you' },
  sendMessage: { sq: 'Dërgo Mesazh', en: 'Send Message' },
  yourName: { sq: 'Emri Juaj', en: 'Your Name' },
  namePlaceholder: { sq: 'Shkruani emrin...', en: 'Enter your name...' },
  yourEmail: { sq: 'Email Juaj', en: 'Your Email' },
  emailPlaceholder: { sq: 'email@example.com', en: 'email@example.com' },
  subject: { sq: 'Subjekti', en: 'Subject' },
  subjectPlaceholder: { sq: 'Si mund t\'ju ndihmojmë?', en: 'How can we help you?' },
  message: { sq: 'Mesazhi', en: 'Message' },
  messagePlaceholder: { sq: 'Shkruani mesazhin tuaj këtu...', en: 'Write your message here...' },
  sendBtn: { sq: 'Dërgo Mesazhin', en: 'Send Message' },
  sending: { sq: 'Duke dërguar...', en: 'Sending...' },
  messageSent: { sq: 'Mesazhi u dërgua me sukses!', en: 'Message sent successfully!' },
  contactInfo: { sq: 'Informacion Kontakti', en: 'Contact Information' },
  phone: { sq: 'Telefon', en: 'Phone' },
  email: { sq: 'Email', en: 'Email' },
  mapComingSoon: { sq: 'Harta do të shtohet së shpejti', en: 'Map coming soon' },
  
  // Gallery Page
  galleryTitle: { sq: 'Galeria', en: 'Gallery' },
  gallerySubtitle: { sq: 'Momente nga Cafe FLO', en: 'Moments from Cafe FLO' },
  galleryComingSoon: { sq: 'Fotot do të shtohen së shpejti - Na ndiqni në Instagram!', en: 'Photos coming soon - Follow us on Instagram!' },
  interior: { sq: 'Brendësia', en: 'Interior' },
  pastry: { sq: 'Pastiçeri', en: 'Pastry' },
  exterior: { sq: 'Pamja', en: 'Exterior' },
  desserts: { sq: 'Ëmbëlsira', en: 'Desserts' },
  atmosphere: { sq: 'Atmosferë', en: 'Atmosphere' },
  morePhotosText: { sq: 'Për më shumë foto, na ndiqni në rrjetet sociale!', en: 'For more photos, follow us on social media!' },
  viewOnInstagram: { sq: 'Shiko në Instagram', en: 'View on Instagram' },
  
  // Contact Section
  findUs: { sq: 'Na Gjeni', en: 'Find Us' },
  address: { sq: 'Adresa', en: 'Address' },
  openHours: { sq: 'Orari', en: 'Opening Hours' },
  everyday: { sq: 'Çdo ditë: 07:00 - 23:00', en: 'Every day: 07:00 - 23:00' },
  followUs: { sq: 'Na Ndiqni', en: 'Follow Us' },
  viewOnMap: { sq: 'Shiko në Hartë', en: 'View on Map' },
  
  // Footer
  allRights: { sq: 'Të gjitha të drejtat e rezervuara', en: 'All rights reserved' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sq');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};