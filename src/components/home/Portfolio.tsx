import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioImages = [
  { src: portfolio1, alt: "Bridal Shower Decoration", category: "Bridal Shower" },
  { src: portfolio2, alt: "Baby Shower Setup", category: "Baby Shower" },
  { src: portfolio3, alt: "Engagement Party", category: "Engagement" },
  { src: portfolio4, alt: "Anniversary Celebration", category: "Anniversary" },
];

export function Portfolio() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-4">
            Recent Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of beautifully decorated events and see how we transform spaces into magical celebrations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-ivory font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
