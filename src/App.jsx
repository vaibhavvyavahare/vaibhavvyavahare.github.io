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
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import './index.css';

const App = () => {
  const [isSoftwareMode, setIsSoftwareMode] = useState(true);

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

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${themeConfig.baseBg} ${themeConfig.textColor}`}>

      {/* Navbar with Switch */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-700 ${themeConfig.navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <span className={`font-bold text-2xl tracking-tight transition-colors duration-700 ${themeConfig.primaryText}`}>
                Vaibhav Enterprise
              </span>
            </div>

            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="font-medium hover:opacity-75 transition-opacity">Home</a>
              <a href="#services" className="font-medium hover:opacity-75 transition-opacity">Services</a>
              <a href="#about" className="font-medium hover:opacity-75 transition-opacity">About</a>
              <a href="#contact" className="font-medium hover:opacity-75 transition-opacity">Contact</a>

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

      <main>
        {/* Dynamic Hero Section */}
        <section id="home" className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br transition-all duration-700 ${themeConfig.heroBg}`}>
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
                  <a href="#services" className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg ${themeConfig.btnPrimary}`}>
                    Explore Services
                  </a>
                  <a href="#contact" className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 shadow-sm backdrop-blur-sm ${themeConfig.btnSecondary}`}>
                    Get in Touch
                  </a>
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

            <form className={`p-8 md:p-12 rounded-3xl border shadow-xl transition-all duration-700 ${themeConfig.cardBg}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-80">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2 opacity-80">Area of Interest</label>
                <select
                  className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors appearance-none outline-none"
                  value={isSoftwareMode ? 'tech' : 'agri'}
                  onChange={() => { }}
                >
                  <option value="tech" className="text-black">Software & Tech Solutions</option>
                  <option value="agri" className="text-black">Agri-Export & Products</option>
                </select>
              </div>

              <div className="mb-10">
                <label className="block text-sm font-medium mb-2 opacity-80">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-opacity-20 border-current py-3 focus:outline-none focus:border-opacity-100 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className={`w-full py-4 rounded-xl font-bold transition-all shadow-md ${themeConfig.btnPrimary}`}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 transition-colors duration-700 bg-black/5 border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-xl tracking-tight transition-colors duration-700 ${themeConfig.primaryText}`}>
              Vaibhav Enterprise
            </span>
          </div>

          <div className="flex space-x-6 opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:opacity-100 transition-opacity"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:opacity-100 transition-opacity"><Linkedin className="w-5 h-5" /></a>
          </div>

          <div className="text-sm opacity-60 text-center md:text-right">
            <p>&copy; 2026 Vaibhav Enterprise. All rights reserved.</p>
            <div className="mt-1 space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
