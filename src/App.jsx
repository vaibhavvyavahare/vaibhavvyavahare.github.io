import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Globe,
  Settings,
  Lightbulb,
  Leaf,
  Ship,
  Sprout,
  ShieldCheck,
} from 'lucide-react';
import './index.css';

const App = () => {
  const [isSoftwareMode, setIsSoftwareMode] = useState(true);
  const [activePage, setActivePage] = useState('home');

  const toggleMode = () => setIsSoftwareMode(!isSoftwareMode);

  // Configuration for modes
  const themeConfig = isSoftwareMode
    ? {
      mode: 'software',
      baseBg: 'bg-slate-900',
      textColor: 'text-slate-100',
      navBg: 'bg-slate-900/90 border-slate-800',
      primaryText: 'text-blue-400',
      btnPrimary: 'bg-blue-600 hover:bg-blue-500 text-white',
      btnSecondary: 'border-blue-600 text-blue-400 hover:bg-blue-900',
      cardBg: 'bg-slate-800 border-slate-700',
      iconColor: 'text-blue-400',
      heroBg: 'from-slate-900 via-slate-800 to-blue-900/20',
      heroHeadline: 'Architecting Digital Excellence.',
      heroSubline: 'Empowering businesses through intelligent automation and bespoke software integration.',
      servicesTitle: 'Our Tech Solutions',
      services: [
        { id: 1, title: 'Custom Development', desc: 'Scalable web and mobile applications engineered for high performance.', Icon: Cpu },
        { id: 2, title: 'AI Automation', desc: 'Streamlining workflows with intelligent agents and advanced machine learning.', Icon: Lightbulb },
        { id: 3, title: 'Systems Integration', desc: 'Connecting fragmented tools into a seamless, unified ecosystem.', Icon: Settings },
        { id: 4, title: 'Tech Consulting', desc: 'Strategic roadmaps for comprehensive digital transformation.', Icon: Globe }
      ],
      aboutImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
    }
    : {
      mode: 'agri',
      baseBg: 'bg-[#fdfbf7]',
      textColor: 'text-[#2c3e2e]',
      navBg: 'bg-[#fdfbf7]/90 border-[#e8dfcf]',
      primaryText: 'text-[#3f5c43]',
      btnPrimary: 'bg-[#4a6b4e] hover:bg-[#3f5c43] text-white',
      btnSecondary: 'border-[#4a6b4e] text-[#4a6b4e] hover:bg-[#e8dfcf]',
      cardBg: 'bg-white border-[#e8dfcf]',
      iconColor: 'text-[#6a8c6f]',
      heroBg: 'from-[#fdfbf7] via-[#f4eedf] to-[#e4dec9]',
      heroHeadline: 'From Indian Soil to Global Markets.',
      heroSubline: 'Bridging the gap between premium agriculture and international demand with seamless logistics.',
      servicesTitle: 'Agri-Commerce Services',
      services: [
        { id: 5, title: 'Agri-Export', desc: 'Global supply chain management for premium, fresh produce.', Icon: Ship },
        { id: 6, title: 'Bulk Product Selling', desc: 'Quality-assured wholesale distribution to international buyers.', Icon: Sprout },
        { id: 7, title: 'Sustainable Sourcing', desc: 'Connecting global markets directly with ethical, verified farmers.', Icon: Leaf },
        { id: 8, title: 'Quality Logistics', desc: 'Cold-chain optimization and rigorous export-standard packaging.', Icon: ShieldCheck }
      ],
      aboutImg: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1000&auto=format&fit=crop'
    };

  // Motion variants
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleNavClick = (e, targetHash) => {
    setActivePage('home');
    if (targetHash) {
      setTimeout(() => {
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${themeConfig.baseBg} ${themeConfig.textColor}`}>

      {/* Navbar with Switch */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-700 ${themeConfig.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }}
            >
              <span className={`font-bold text-2xl tracking-tight transition-colors duration-700 ${themeConfig.primaryText}`}>
                Vaibhav Enterprise
              </span>
            </div>

            <nav className="hidden md:flex space-x-8 items-center cursor-pointer">
              <span onClick={(e) => handleNavClick(e, 'home')} className="font-medium hover:opacity-75 transition-opacity">Home</span>
              <span onClick={(e) => handleNavClick(e, 'services')} className="font-medium hover:opacity-75 transition-opacity">Services</span>
              <span onClick={(e) => handleNavClick(e, 'about')} className="font-medium hover:opacity-75 transition-opacity">About</span>
              <span onClick={(e) => handleNavClick(e, 'contact')} className="font-medium hover:opacity-75 transition-opacity">Contact</span>

              {/* Global Toggle Switch */}
              <div
                onClick={toggleMode}
                className="relative w-44 h-10 bg-black/10 dark:bg-white/10 rounded-full p-1 cursor-pointer flex items-center shrink-0 border border-white/10 shadow-inner overflow-hidden"
              >
                <div
                  className={`absolute h-8 w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out transform ${isSoftwareMode ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'}`}
                />
                <div className={`relative w-1/2 text-center text-xs font-bold z-10 select-none ${isSoftwareMode ? 'text-slate-900' : 'text-slate-500'}`}>Tech Mode</div>
                <div className={`relative w-1/2 text-center text-xs font-bold z-10 select-none ${!isSoftwareMode ? 'text-[#3f5c43]' : 'text-slate-400'}`}>Agri Mode</div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dynamic Hero Section */}
              <section id="home" className={`relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-gradient-to-br transition-all duration-700 ${themeConfig.heroBg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={themeConfig.heroHeadline}
                      variants={fadeVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="max-w-4xl mx-auto"
                    >
                      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        {themeConfig.heroHeadline}
                      </h1>
                      <p className="text-xl md:text-2xl opacity-80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        {themeConfig.heroSubline}
                      </p>
                      <div className="flex justify-center gap-4">
                        <button onClick={(e) => handleNavClick(e, 'services')} className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg ${themeConfig.btnPrimary}`}>
                          Explore Services
                        </button>
                        <button onClick={(e) => handleNavClick(e, 'contact')} className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 shadow-sm backdrop-blur-sm ${themeConfig.btnSecondary}`}>
                          Get in Touch
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </section>

              {/* Dynamic Services Section */}
              <section id="services" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={themeConfig.servicesTitle}
                      variants={fadeVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className={`text-sm font-bold tracking-wider uppercase mb-3 ${themeConfig.primaryText}`}>What we do</h2>
                        <h3 className="text-4xl font-bold">{themeConfig.servicesTitle}</h3>
                      </div>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                      >
                        {themeConfig.services.map((service) => {
                          const Icon = service.Icon;
                          return (
                            <motion.div
                              key={service.id}
                              variants={cardVariants}
                              className={`p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${themeConfig.cardBg}`}
                            >
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 ${themeConfig.iconColor}`}>
                                <Icon className="w-7 h-7" />
                              </div>
                              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                              <p className="opacity-70 leading-relaxed">{service.desc}</p>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </section>

              {/* Shared About Section */}
              <section id="about" className="py-24 bg-black/5 flex items-center min-h-[500px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className={`text-sm font-bold tracking-wider uppercase mb-3 ${themeConfig.primaryText}`}>About Us</h2>
                    <h3 className="text-4xl font-bold mb-6">Innovating Across Diverse Industries</h3>
                    <p className="text-lg opacity-80 leading-relaxed mb-6">
                      Vaibhav Enterprise is a multi-dimensional organization dedicated to excellence in both cutting-edge technology and global agriculture. Our unique dual-focus allows us to bring world-class engineering to our software clients while utilizing intelligent supply chain logistics to deliver premium agricultural goods worldwide.
                    </p>
                    <p className="text-lg opacity-80 leading-relaxed">
                      Whether you are looking to architect complex digital systems or source the finest global produce, our commitment to quality, integrity, and innovation remains our foundational promise.
                    </p>
                  </div>
                  <div className="relative">
                    <div className={`aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 border-8 ${isSoftwareMode ? 'border-slate-800' : 'border-[#e8dfcf]'}`}>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={themeConfig.aboutImg}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                          exit={{ opacity: 0 }}
                          src={themeConfig.aboutImg}
                          alt="Industry Focus"
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </section>

              {/* Shared Contact Section */}
              <section id="contact" className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className={`text-sm font-bold tracking-wider uppercase mb-3 ${themeConfig.primaryText}`}>Get in Touch</h2>
                    <h3 className="text-4xl font-bold">Start a Conversation</h3>
                  </div>

                  <form action="https://formsubmit.co/vaibhavvyavahare5@gmail.com" method="POST" className={`p-8 md:p-12 rounded-3xl border shadow-xl transition-all duration-700 ${themeConfig.cardBg}`}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Query from Vaibhav Enterprise!" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <label className="block text-sm font-medium mb-2 opacity-80">Full Name</label>
                        <input type="text" name="name" required className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 opacity-80">Email Address</label>
                        <input type="email" name="email" required className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors" />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium mb-2 opacity-80">Area of Interest</label>
                      <select
                        name="interest"
                        className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors appearance-none outline-none"
                        defaultValue={isSoftwareMode ? 'Software & Tech Solutions' : 'Agri-Export & Products'}
                      >
                        <option value="tech" className="text-black">Software & Tech Solutions</option>
                        <option value="agri" className="text-black">Agri-Export & Products</option>
                      </select>
                    </div>

                    <div className="mb-10">
                      <label className="block text-sm font-medium mb-2 opacity-80">Message</label>
                      <textarea name="message" required rows={4} className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className={`w-full py-4 rounded-xl font-bold transition-all shadow-md ${themeConfig.btnPrimary}`}>
                      Send Message
                    </button>
                  </form>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="opacity-80 space-y-6 leading-relaxed">
                <p>Welcome to Vaibhav Enterprise. We prioritize your privacy and are committed to protecting it. This Privacy Policy details how we collect, use, and handle your information when you visit our website.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>1. Information We Collect</h3>
                <p>When you contact us using our contact form, we collect the information you provide, such as your Full Name, Email Address, and your stated Area of Interest.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>2. How We Use Your Information</h3>
                <p>We use your information exclusively to respond to your inquiries, provide support, and improve the services we offer you across our technology and agriculture sectors.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>3. Data Security</h3>
                <p>We implement standard security measures to protect against the unauthorized access, alteration, or destruction of your personal information.</p>
                <p className="mt-8 font-semibold">Last updated: March 2026</p>
              </div>
            </motion.div>
          )}

          {activePage === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
              <div className="opacity-80 space-y-6 leading-relaxed">
                <p>By accessing and using this website, you agree to comply with and be bound by the following Terms and Conditions. If you disagree with any part of these terms, please do not use our website.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>1. General Information</h3>
                <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>2. Services</h3>
                <p>Vaibhav Enterprise operates across two major sectors: Technology Solutions and Agri-Commerce. The services listed under each sector are subject to separate formal agreements and contracts discussed individually with our clients.</p>
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${themeConfig.primaryText}`}>3. Limitations of Liability</h3>
                <p>We shall not be held liable for any inaccuracies, errors, or omissions of the materials and info provided on this website. It shall be your own responsibility to ensure that any services or information available perfectly meet your specific requirements.</p>
                <p className="mt-8 font-semibold">Last updated: March 2026</p>
              </div>
            </motion.div>
          )}
          {activePage === 'refund' && (
            <motion.div
              key="refund"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <h1 className="text-4xl font-bold mb-8">Cancellation & Refund Policy</h1>
              <div className="opacity-80 space-y-6 leading-relaxed">
                <p className="font-semibold">Last updated on 21-03-2026 21:32:27</p>
                <p>VAIBHAV ENTERPRISE believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:</p>
                <p>• Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</p>
                <p>• VAIBHAV ENTERPRISE does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</p>
                <p>• In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within Only same day days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within Only same day days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</p>
                <p>• In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any Refunds approved by the VAIBHAV ENTERPRISE, it'll take 9-15 Days days for the refund to be processed to the end customer.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 transition-colors duration-700 bg-black/5 border-black/10 dark:border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-xl tracking-tight transition-colors duration-700 ${themeConfig.primaryText}`}>
              Vaibhav Enterprise
            </span>
          </div>

          <div className="text-sm opacity-60 text-center md:text-right flex flex-col items-center md:items-end">
            <p>&copy; 2026 Vaibhav Enterprise. All rights reserved.</p>
            <div className="mt-2 flex space-x-6 cursor-pointer justify-center md:justify-end flex-wrap gap-y-2">
              <span onClick={() => { setActivePage('privacy'); window.scrollTo(0, 0); }} className="hover:underline transition-all">Privacy Policy</span>
              <span onClick={() => { setActivePage('terms'); window.scrollTo(0, 0); }} className="hover:underline transition-all">Terms & Conditions</span>
              <span onClick={() => { setActivePage('refund'); window.scrollTo(0, 0); }} className="hover:underline transition-all">Cancellation & Refund Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
