import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Get In <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
