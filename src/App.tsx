import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Shield, 
  Clock, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Phone, 
  Quote,
  ExternalLink,
  Users
} from 'lucide-react';

const testimonials = [
  {
    text: "Salaan, waxaan rabaa inaan idiinka mahadceliyo wax walba oo aad ii sameyseen. Aad bay macno weyn ii lahayd maadaama aan dareemayay murugo iyo kelinimo, waxaadna isiiseen xiriirro iyo waxyaabo kale oo iga caawiyay dareenkaas.",
    author: "Ayaan Xasan"
  },
  {
    text: "Waa sheeko gaaban oo kooban, balse waxay ahayd daqiiqad aanan kelinimo dareemayn, daqiiqad uu qof rabay inuu ogaado sida aan ahay. Aad ayaan idiinku mahadcelinayaa taas.",
    author: "Cabdiraxmaan Cali"
  },
  {
    text: "Mahadsanidiin badan mutadawicii iga jawaabay fariintayda 5tii subaxnimo markii aan dareemayay walwal iyo walaac badan... Waxay ahayd mid dejin badan oo waxay u ekeyd sidii inaan la hadlayay saaxiibkayga ugu dhow.",
    author: "Hodan Maxamed"
  },
  {
    text: "Waxaan diray fariin anigoo murugo leh oo ilmeynaya, balse waan ka baxay wada hadalka anigoo dareemaya awood, xoog, iyo farxad wejigayga ka muuqata. Aad iyo aad baad u mahadsan tihiin.",
    author: "Yuusuf Cabdi"
  },
  {
    text: "Waan ka mahadcelinayaa caawimada. Way koobnayd, balse waan murugaysnaa oo waan ooyayay, anigoo dareemaya jahawareer. Ma helin cid noloshayda ka mid ah oo aan la xiriiro, waxaana u baahnaa wax iga caawiya inaan is dejiyo.",
    author: "Sahra Axmed"
  }
];

const issues = [
  "Anxiety", "Abuse", "Alcohol Misuse", "Bullying", "Depression", 
  "Drug misuse", "Grief", "Loneliness", "Panic attacks", 
  "Relationship problems", "Sadness", "Self-harm", "Stress", "Suicidal thoughts"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'about') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-brand-primary">Maanjiheeye</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo('home')} className={`text-sm cursor-pointer
  font-medium  transition-colors ${currentPage === 'home' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`text-sm  cursor-pointer
 font-medium  transition-colors ${currentPage === 'about' ? 'text-brand-primary' : 'hover:text-brand-primary'}`}>About</button>
            <a href="#how-it-works" className="text-sm font-medium hover:text-brand-primary transition-colors">How it works</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-brand-primary transition-colors">Testimonials</a>
            <a 
  href="https://wa.me/+353870342498?text=HELLO"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
>
  Text Now
</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <button onClick={() => navigateTo('home')} className="text-2xl font-serif">Home</button>
              <button onClick={() => navigateTo('about')} className="text-2xl font-serif">About</button>
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">How it works</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif">Testimonials</a>
              <a 
                href="https://wa.me/+353870342498?text=HELLO"
  target="_blank"
  rel="noopener noreferrer"
                className="bg-brand-primary text-white py-4 rounded-2xl text-lg font-bold"
              >
                Text Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20">
              <div className="absolute top-20 left-10 w-64 h-64 bg-brand-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                  Free • Anonymous • 24/7
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-balance">
                  If it matters to you, <br />
                  <span className="italic text-brand-primary">it matters to us.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Maanjiheeye is a free, anonymous, 24/7 messaging service providing everything from a calming chat to immediate support.
                </p>

                <div className="flex flex-col sm:flex-row items-center jsustify-center gap-4">
                 
                  <a 
                    href="https://wa.me/+353 87 034 2498?text=HELLO" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-white border-2 border-brand-primary/10 text-brand-primary px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-brand-accent/30 transition-all active:scale-95"
                  >
                    Message on WhatsApp
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="mt-6 text-sm text-gray-500 italic">
                  *Free on all major networks. Funded by the HSE.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center">
                    <Shield className="text-brand-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">100% Anonymous</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A safe space to share anonymously. Our trained volunteers only know what you share with them over text and nothing else.
                  </p>
                </motion.div>

                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center">
                    <Clock className="text-brand-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Available 24/7</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are here for you every hour of every day. From calming chats to immediate support - we're always just a text away.
                  </p>
                </motion.div>

                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center">
                    <Heart className="text-brand-primary w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Always Free</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Completely free on all major networks. Funded by the HSE and donations to ensure everyone can get support.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section id="how-it-works" className="py-24 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                    How does it work?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Maanjiheeye provides a safe space where you’re listened to by a trained volunteer. You’ll text back and forth, only sharing what you feel comfortable with.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Text HELLO to +353870342498 to begin",
                      "Get connected with a trained volunteer",
                      "Share what's on your mind at your own pace",
                      "Work together to reach a calm, safe place"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </div>
                        <span className="font-medium text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div className="aspect-[4/5] bg-brand-secondary/20 rounded-[2rem] overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/support/800/1000" 
                      alt="Supportive environment" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="glass p-8 rounded-3xl shadow-2xl space-y-4 max-w-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-brand-primary rounded-full" />
                          <div className="h-4 w-24 bg-gray-200 rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 w-full bg-gray-100 rounded-full" />
                          <div className="h-3 w-5/6 bg-gray-100 rounded-full" />
                          <div className="h-3 w-4/6 bg-gray-100 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Issues Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Issues we can help with</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {issues.map((issue, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: '#2D5A27', color: '#fff' }}
                    className="px-6 py-3 rounded-full border-2 border-brand-primary/10 text-brand-primary font-semibold cursor-default transition-all"
                  >
                    {issue}
                  </motion.span>
                ))}
              </div>
              <p className="mt-12 text-gray-500 italic max-w-2xl mx-auto">
                Remember - we’re here to listen to whatever is going on for you. If it matters to you, it matters to us.
              </p>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-24 bg-brand-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Quote size={200} />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What people say</h2>
                <p className="text-brand-accent/80">Real stories from people who reached out.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between"
                  >
                    <p className="text-lg italic leading-relaxed mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                        <Heart className="text-brand-primary w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-wider">{t.author}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Volunteer Section */}
          {/* <section id="volunteer" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-brand-accent/30 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
                    <Users className="text-white w-6 h-6" />
                  </div>
                  <h2 className="text-4xl font-serif font-bold">Become a Volunteer</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our trained volunteers interact with texters through our secure online platform. Help people sort through their feelings and reach a safe place.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-primary w-5 h-5" />
                      <span className="font-medium">Full training provided</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-primary w-5 h-5" />
                      <span className="font-medium">Work from your own laptop</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-brand-primary w-5 h-5" />
                      <span className="font-medium">Secure & anonymous platform</span>
                    </li>
                  </ul>
                  <button className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-95">
                    Apply to Volunteer
                  </button>
                </div>
                <div className="flex-1">
                  <img 
                    // src="https://picsum.photos/seed/volunteer/800/600" 

                                        src="../src/volon.jpg" 

                    alt="Volunteer working" 
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section> */}
        </>
      ) : (
        <AboutPage />
      )}

      {/* Footer */}
      <footer className="bg-brand-bg pt-20 pb-10 border-t border-brand-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-serif font-bold tracking-tight text-brand-primary">Maanjiheeye</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                Maanjiheeye is operated by spunout CLG. Registered Charity Number: 20057923. Funded by the Health Service Executive.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => navigateTo('home')} className="hover:text-brand-primary transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-brand-primary transition-colors">About</button></li>
                <li><a href="#how-it-works" className="hover:text-brand-primary transition-colors">How it works</a></li>
                <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Contact</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-primary" />
                  <span>Text HELLO to +353 87 034 2498</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-brand-primary" />
                  <span>WhatsApp: +353 87 034 2498</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Maanjiheeye. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-40">
        <a 
          href="https://wa.me/+353870342498?text=HELLO" 
          className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl active:scale-95"
        >
          <MessageSquare className="w-5 h-5" />
          Text Now
        </a>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-brand-primary">
          Ku Saabsan Maanjiheeye
        </h1>
        
        <div className="prose prose-lg prose-brand max-w-none space-y-8 text-gray-700">
          
          <section className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Hadafkeenna
            </h2>
            <p className="leading-relaxed">
              Maanjiheeye waa adeeg fariin qoraal ah oo bilaash ah, qarsoodi ah, 
              kana shaqeeya 24 saac maalintii, 7 maalmood usbuucii gudaha Soomaaliya. 
              Waxaan bixinnaa wax kasta laga bilaabo wada sheekeysi dejin ah ilaa 
              taageero degdeg ah qof kasta oo u baahan. Hadafkeenna waa inaan hubinno 
              in qofna uusan keligiis wajahin caqabadihiisa, annagoo siinayna meel 
              ammaan ah oo aan lagu xukumin wakhti kasta oo maalinta ama habeenka ah.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            
            <div className="bg-brand-accent/20 p-8 rounded-3xl border border-brand-primary/5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-brand-primary" />
                Badbaado & Qarsoodi
              </h3>
              <p className="text-sm">
                Waxaan si dhab ah u ilaalinaa xogtaada gaarka ah. 
                Mutadawiciinteena tababaran waxay ogyihiin oo keliya 
                waxa aad fariin ahaan ula wadaagto — wax kale ma arkaan.
              </p>
            </div>

            <div className="bg-brand-accent/20 p-8 rounded-3xl border border-brand-primary/5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="text-brand-primary" />
                Waxaa Taageera Bulshada
              </h3>
              <p className="text-sm">
                Adeeggeenna waxaa taageera deeqo iyo tabarucaad ka yimaada 
                bulshada iyo hay’ado gudaha Soomaaliya ah, si loo hubiyo 
                in taageeradu mar walba ahaato mid bilaash ah qof walba.
              </p>
            </div>

          </div>

          <section className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Yaa Nahaye?
            </h2>
            <p className="leading-relaxed">
              Maanjiheeye waxaa maamula urur maxalli ah oo ka diiwaangashan 
              Soomaaliya, waxaana suurtageliya bulsho mutadawiciin tababaran 
              iyo shaqaale xirfadlayaal ah. Mutadawiciin kasta wuxuu maraa 
              tababar adag si loo hubiyo inay bixiyaan taageerada ugu tayada wanaagsan.
            </p>
            <p className="leading-relaxed">
              Haddii aad la tacaaleyso walwal, kelinimo, dhibaato xiriir, 
              ama aad si fudud ugu baahan tahay qof ku dhageysta — waan kuu joognaa. 
              Haddii ay adiga kuu muhiim tahay, annagana way noo muhiim tahay.
            </p>
          </section>

          <section className="bg-brand-primary text-white p-12 rounded-[3rem] text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold">
              Ma rabtaa inaad la hadasho qof?
            </h2>
            <p className="text-brand-accent/80 max-w-md mx-auto">
              Mutadawiciinteennu waa diyaar. Adeeggu waa bilaash, 
              qarsoodi ah, waana la heli karaa hadda.
            </p>
            <a 
              href="https://wa.me/+353870342498?text=Salaan" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-primary px-10 py-4 rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-xl"
            >
              Fariin Dir Hadda
            </a>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
