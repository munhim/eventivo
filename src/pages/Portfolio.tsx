import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAForm } from "@/components/home/CTAForm";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import birthdayImage from "@/assets/service-birthday.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import privateImage from "@/assets/service-private.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

const categories = ["All", "Weddings", "Birthdays", "Showers", "Private Events"];

const portfolioItems = [
  { src: heroImage, category: "Weddings", title: "Elegant Wedding Ceremony" },
  { src: birthdayImage, category: "Birthdays", title: "Pink & Gold Birthday" },
  { src: weddingImage, category: "Weddings", title: "Classic White Wedding" },
  { src: privateImage, category: "Private Events", title: "Anniversary Dinner" },
  { src: portfolio1, category: "Showers", title: "Luxury Bridal Shower" },
  { src: portfolio2, category: "Showers", title: "Sweet Baby Shower" },
  { src: portfolio3, category: "Private Events", title: "Romantic Engagement" },
  { src: portfolio4, category: "Private Events", title: "Golden Anniversary" },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                Portfolio
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through our collection of beautifully decorated events and see how we transform spaces into magical celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-gold text-ivory"
                      : "bg-secondary text-muted-foreground hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/70 transition-colors duration-300 flex flex-col items-center justify-center">
                    <span className="text-ivory font-serif text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {item.title}
                    </span>
                    <span className="text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTAForm />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
