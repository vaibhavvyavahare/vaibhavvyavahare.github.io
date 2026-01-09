import React from 'react';

const About = () => {
    const skills = [
        "React", "Astro", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "GraphQL", "PostgreSQL"
    ];

    return (
        <section id="about" className="section bg-zinc-900/50">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="text-purple-500">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I'm a passionate Full Stack Developer based in San Francisco. I love building tools that are user-friendly, simple and delightful.
                            With over 5 years of experience in web development, I have a deep understanding of modern web technologies and best practices.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6 text-white">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-full bg-white/10 text-gray-200 text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
