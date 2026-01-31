import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const blogPosts = [
  {
    id: 1,
    title: "10 Trending Wedding Decoration Ideas for 2025",
    excerpt:
      "Discover the latest trends in wedding décor that will make your special day unforgettable. From sustainable elements to bold color palettes...",
    image: portfolio4,
    category: "Weddings",
    date: "January 15, 2025",
    readTime: "5 min read",
    slug: "trending-wedding-decoration-ideas-2025",
  },
  {
    id: 2,
    title: "How to Plan the Perfect Birthday Party on a Budget",
    excerpt:
      "Creating a magical birthday celebration doesn't have to break the bank. Learn our insider tips for stunning parties without overspending...",
    image: portfolio2,
    category: "Tips & Guides",
    date: "January 10, 2025",
    readTime: "4 min read",
    slug: "plan-perfect-birthday-party-budget",
  },
  {
    id: 3,
    title: "Bridal Shower Themes That Will Wow Your Guests",
    excerpt:
      "From elegant tea parties to modern minimalist gatherings, explore the hottest bridal shower themes that celebrate the bride-to-be in style...",
    image: portfolio1,
    category: "Showers",
    date: "January 5, 2025",
    readTime: "6 min read",
    slug: "bridal-shower-themes-wow-guests",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Choosing Your Event Color Palette",
    excerpt:
      "Color sets the mood for your entire celebration. Master the art of choosing the perfect color scheme that reflects your personality and vision...",
    image: portfolio3,
    category: "Tips & Guides",
    date: "December 28, 2024",
    readTime: "7 min read",
    slug: "guide-choosing-event-color-palette",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Insights & Inspiration
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                Our Blog
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
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
