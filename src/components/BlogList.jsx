import React from 'react';

const BlogList = ({ posts }) => {
    return (
        <section id="blogs" className="section">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Latest <span className="text-blue-500">Writing</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-blue-400 text-xs font-medium uppercase tracking-wider">{post.data.category}</span>
                                <span className="text-gray-500 text-xs">{post.data.date}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                <a href={`/blog/${post.slug}`}>{post.data.title}</a>
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {post.data.excerpt}
                            </p>
                            <a href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400">
                                Read Article →
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
