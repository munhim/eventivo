import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommentSection } from "@/components/blog/CommentSection";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-gold hover:underline">← Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-2xl font-serif font-bold mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-xl font-serif font-semibold mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={key++} className="text-muted-foreground ml-6 mb-1 list-disc">
            {renderInlineFormatting(line.replace("- ", ""))}
          </li>
        );
      } else if (line.trim() === "") {
        // skip empty lines
      } else {
        elements.push(
          <p key={key++} className="text-muted-foreground mb-4 leading-relaxed">
            {renderInlineFormatting(line)}
          </p>
        );
      }
    }

    return elements;
  };

  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

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
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" />
          </div>
          <div className="relative z-10 container-custom text-center text-ivory">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 max-w-4xl mx-auto">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm text-ivory/80">
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary rounded-2xl p-6 mb-10 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <User size={24} className="text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg">{post.author}</p>
                <p className="text-muted-foreground text-sm">{post.authorRole} at Eventivo</p>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose-custom"
            >
              {renderContent(post.content)}
            </motion.article>

            {/* Comment Section */}
            <CommentSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
