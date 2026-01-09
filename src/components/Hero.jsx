import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm mb-6">
                    Welcome to my portfolio
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Building Digital <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Experiences</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    I craft beautiful, high-performance web applications using modern technologies like React, Astro, and TailwindCSS.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#contact" className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                        Get in Touch
                    </a>
                    <a href="#about" className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        View Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
