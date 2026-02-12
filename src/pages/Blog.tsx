import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import portfolio3 from "@/assets/portfolio-3.jpg";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={portfolio3}
              alt="Event planning blog"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/70" />
          </div>
          <div className="relative z-10 container-custom text-center text-ivory">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4"
              >
                Insights & Inspiration
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-ivory/90 text-lg max-w-2xl mx-auto">
                Tips, trends, and inspiration for planning your perfect event. Stay updated with the latest in event design and decoration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <span className="absolute top-4 left-4 bg-gold text-ivory px-4 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <div>
                <span className="text-gold text-sm font-medium">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {blogPosts[0].author}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-gold text-sm font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-serif font-semibold mt-2 mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
